const request = require("supertest");
const app = require("../src/app");

describe("GET /", () => {
  it("returns 200 with 'Hello World'", async () => {
    const res = await request(app).get("/");
    expect(res.status).toBe(200);
    expect(res.text).toBe("Hello World");
  });
});
