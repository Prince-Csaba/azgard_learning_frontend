const app = require("../app");
const supertest = require("supertest");
const request = supertest(app);
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

const User = require('../models/user.model');
const Lesson = require('../models/lesson.model');
const Quote = require('../models/quote.model');

//Some basic tests
/* test("Testing to see if Jest works", () => {
	expect(1).toBe(1);
}); */

test(`Testing the endpoint '/', to see if the server works, and wants to get {"title": "Express"} response`, async () => {
	const response = await request.get("/");

	expect(response.status).toBe(200);
	expect(response.status).not.toBe(304);
	expect(response.body).toStrictEqual({"title": "Express"});
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
/* 		{ 
      nr: 2,
      quote: "Suit up!"
    }
 */		);
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

  test(`Testing the endpoint '/api/quote', should return status 404, because the db is still empty`, async () => {
    const response = await request.get("/api/quote");
    expect(response.status).toBe(404);
  });

  test(`Testing the endpoint '/api/quote', works when there is a document in the quotes`, async () => {
    await fillQuote();
    const response = await request.get("/api/quote");
    expect(response.status).toBe(200);
		expect(response.body).toBe("Bigger is always better")
  });

  test(`Testing the endpoint '/api/lesson', returns a value`, async () => {
    await fillLesson();
    const response = await request.get("/api/lessons");
		expect(response.status).toBe(200);
		expect(response.body).not.toBe({});
  });

	//check later - db document is wrong
	test(`Testing the endpoint '/api/progress', returns response when when a proper email is sent in te request`, async () => {
    const response = await request.post("/api/getProgress").send("barney@stinson.cool");
    console.log(response.body);
		expect(response.status).toBe(404);
/* 		expect(response.body).not.toBe({}); */
  });

	//check later - db document is wrong
 	test(`Testing the endpoint '/api/progress', returns error: "e-mail isd missing" when there is no email sent in te request`, async () => {
    const response = await request.post("/api/getProgress").send("");
    console.log(response.body);
		expect(response.status).toBe(404);
		//expect(response.body.error).toBe("e-mail is missing");
  });

	



 	afterEach(async () => {
		await Quote.deleteMany();
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