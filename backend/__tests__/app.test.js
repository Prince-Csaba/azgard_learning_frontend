const app = require("../app");
const supertest = require("supertest");
const request = supertest(app);
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const jwt = require('jsonwebtoken');

const User = require('../models/user.model');
const Lesson = require('../models/lesson.model');
const Quote = require('../models/quote.model');

//Some basic tests
test("Testing to see if Jest works", () => {
	expect(1).toBe(1);
});

//nr 1
test(`Testing the endpoint '/test', to see if the server works, and wants to get {"title": "Express generator server is on"} response`, async () => {
	const response = await request.get("/api/test");

	expect(response.status).toBe(200);
	expect(response.status).not.toBe(304);
	expect(response.body).toStrictEqual({"title": "Express generator server is on"});
});

describe("testing some database-connected cases", () => {
	let mongoServer;
	beforeAll(async () => {
		mongoServer = await MongoMemoryServer.create();
		await mongoose.connect(mongoServer.getUri(),
			{
				useNewUrlParser: true,
				dbName: "verifyMASTER",
				useCreateIndex: true,
				useUnifiedTopology: true
			});
	});

  const fillQuote = async () => {
    await Quote.create({ 
      nr: 1,
      quote: "Bigger is always better"
    }, 
 		{ 
      nr: 2,
      quote: "Suit up!"
    }
 		);
  }  
	
		const fillLesson = async () => {
    	await Lesson.create({ 
				title : "Második lecke",
				text : "Lorem ipsum secundus"
    	});
  	}

		const fillUser = async () => {
    	await User.create({ 
				google_id: 1,
				full_name: "Barney Stinson",
				email: "barney@stinson.cool",
				picture: "none",
				given_name: "Barney",
				nick_name: "Barney",
				level: "99",
				basic_class: {class: "our class"},
				courses: {
					foundations: ["our class"]
				}
    	});
  	}

 //nr 2 
  test(`Testing the endpoint '/api/quote', should return status 404, because the db is still empty`, async () => {
    const response = await request.get("/api/quote");
    expect(response.status).toBe(200);
  });

	//nr 3
  test(`Testing the endpoint '/api/quote', works when there is a document in the quotes`, async () => {
    await fillQuote();
    const response = await request.get("/api/quote");
    expect(response.status).toBe(200);
  });

	test(`Testing the endpoint '/api/lesson', returns error when the lesson db is empty`, async () => {
    const response = await request.get("/api/lessons");
		expect(response.status).toBe(404);
		expect(response.body.error).toBe("no lessons found");
  });

 	//nr 4
  test(`Testing the endpoint '/api/lesson', returns a value`, async () => {
    await fillLesson();
    const response = await request.get("/api/lessons");
		expect(response.status).toBe(200);
		expect(response.body).not.toBe({});
  });

	//nr 5
	test(`Testing the endpoint '/api/progress', returns error: "e-mail is missing" when there is no email sent in te request`, async () => {
			const data = {
				email: "",
			};
			const response = await request.post("/api/progress").send(data);
			expect(response.status).toBe(404);
			expect(response.body.error).toBe("e-mail is missing");
		});
		
	//nr 6
	test(`Testing the endpoint '/api/setprogress', returns response when when a proper email is sent`, async () => {
    fillUser();
		const data = {
			email: "barney@stinson.cool",
		};
		const response = await request.post("/api/progress").send(data);
		console.log(response.body);
		expect(response.status).toBe(200);
 		expect(response.body).not.toBe({}); 
  });

	//nr 7
	test(`Testing the endpoint '/api/setprogress', returns error: "e-mail is missing" when there is no email sent in te request`, async () => {
		const data = {
			email: "",
		};
		const response = await request.post("/api/setprogress").send(data);
		console.log(response.body);
		expect(response.status).toBe(404);
 		expect(response.body.error).toBe("e-mail is missing"); 
  });

	//nr 8
 	test(`Testing the endpoint '/api/setprogress', returns error: "progress array is missing" when there is no progress array sent in te request`, async () => {
		const data = {
			email: "barney@stinson.cool",
			progress: ""
		};
		const response = await request.post("/api/setprogress").send(data);
		console.log(response.body);
		expect(response.status).toBe(404);
 		expect(response.body.error).toBe("progress array is missing"); 
  });

	//nr 9
	test(`Testing the endpoint '/api/setprogress', returns "Progress Set" response when when a proper email and progress array is sent`, async () => {
    fillUser();
		const data = {
			email: "barney@stinson.cool",
			progress: []
		};
		const response = await request.post("/api/setprogress").send(data);
		console.log(response.body);
		expect(response.status).toBe(200);
 		expect(response.body.data).toBe("Progress Set"); 
  });

	//nr 10
	test("If User collection is empty, it should return an empty array", async () => {
		const allUser = await User.find();

		expect(allUser).toEqual([]);
	});

	//nr 11
	test("If Lesson collection is empty, it should return an empty array", async () => {
		const allLessons = await Lesson.find();

		expect(allLessons).toEqual([]);
	});

		//nr 12
	test("If Quote collection is empty, it should return an empty array", async () => {
		const allQuotes = await Quote.find();

		expect(allQuotes).toEqual([]);
	});

	//nr 13
	test(`If I save two quotes in the collection, it should return an array with length of 2`, async () => {
		await fillQuote();
		const allQuotes = await Quote.find();
		console.log(allQuotes);
		expect(allQuotes.length).toBe(2);
	});

	//nr 14
		test(`Test if the lesson progress array is changing at the next query if i update is using the setprogress endpoint`, async () => {
			await fillUser();
			const data = {
				email: "barney@stinson.cool",
			};
			const progress = await request.post("/api/progress").send(data);
			expect(progress.body[0]).toBe("our class");

			const change = {
				email: "barney@stinson.cool",
				progress: "Barney is already cool, he does not needs any class"
			};
			const update = await request.post("/api/setprogress").send(change);
			expect(update.status).toBe(200);
 			expect(update.body.data).toBe("Progress Set");

			const final = {
				email: "barney@stinson.cool",
			};
			const newdata = await request.post("/api/progress").send(data);
			expect(newdata.body[0]).toBe("Barney is already cool, he does not needs any class");
	});

	test(`If i try to delete an existing user`, async () => {
		await fillUser();
		let token = jwt.sign({google_id: 1}, "thisisasecrettoken")

		const response = await request.delete("/api/deleteuser").set({token: token });
		
		expect(response.status).toBe(200);
		expect(response.body.message).toBe("User deleted");

		const allUsers = await User.find();
		expect(allUsers.length).toBe(0);
	});	
	
 	test(`If i try to delete a user with wrong token`, async () => {
		await fillUser();
		let token = jwt.sign({google_id: 1}, "thisisaBADsecret")

		const response = await request.delete("/api/deleteuser").set({token: token });
		
		expect(response.status).toBe(401);
		expect(response.body.error).toBe("Wrong or not existing token");
	});

	test(`If i try to delete a non existing user`, async () => {
		await fillUser();
		let token = jwt.sign({google_id: 2}, "thisisasecrettoken")

		const response = await request.delete("/api/deleteuser").set({token: token });
		
		expect(response.status).toBe(404);
		expect(response.body.error).toBe("Something went wrong");
	});

	test(`If i try to login without a code`, async () => {
		const response = await request.post("/api/login").send({code: ""});
		
		expect(response.status).toBe(401);
		expect(response.body.error).toBe("Code missing");
	});

	afterEach(async () => {
		await Quote.deleteMany();
		await User.deleteMany();
		await Lesson.deleteMany();
		});

	afterAll(async () => {
		await mongoose.connection.close();
		await mongoose.disconnect();
		if (mongoServer) {
			await mongoServer.stop();
		}
	});


/* 	test("Testing the API, it should return a non-empty array", async () => {
		const response = await request.get("/movie/avengers");

		expect(response.status).toBe(200);
		expect(typeof response).toBe('object');
		expect(response.body).not.toEqual([]);
		expect(response.body).toHaveProperty('results');
		expect(typeof response.body.results).toBe('object');
		expect(response.body.results.length).toBeGreaterThan(0);
	});
  */
}); 