const app = require("../app");
const supertest = require("supertest");
const request = supertest(app);
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

const User = require('../models/user.model');
const Quote = require('../models/quote.model');

//Some basic tests
test("Testing to see if Jest works", () => {
	expect(1).toBe(1);
});

test(`Testing the endpoint '/', and wants to get {"title": "Express"} response`, async () => {
	const response = await request.get("/");

	expect(response.status).toBe(200);
	expect(response.status).not.toBe(304);
	expect(response.body).toStrictEqual({"title": "Express"});
});

/* 
test(`Testing the endpoint '/api/quote', works and return a JSON as a response`, async () => {
	const response = await request.get("/api/quote");

	expect(response.status).toBe(200);
});
 */

/*  
test(`Testing the endpoint '/api/login', and wants to get  response`, async () => {
	const response = await request.get("/");

	expect(response.status).toBe(200);
	expect(response.status).not.toBe(304);
	expect(response.body).toStrictEqual({"title": "Express"});
}); */

describe("testing some easy case", () => {
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

    });
  }

  test(`Testing the endpoint '/api/quote', should return status 404, because the db is still empty`, async () => {
    const response = await request.get("/api/quote");
    expect(response.status).toBe(404);
  });

  test(`Testing the endpoint '/api/quote', works`, async () => {
    await fillQuote();
    const response = await request.get("/api/quote");
    console.log(response.body);
    expect(response.status).toBe(200);
  });

  test(`Testing the endpoint '/api/quote', returns a quote`, async () => {
    await fillQuote();
    const response = await request.get("/api/quote");
    console.log(response.body);
    expect(response.body).toBe("Bigger is always better")
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