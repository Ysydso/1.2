import { getAppWithMiddleware } from "src/app";
import request from "supertest";
import { describe, expect, it } from "vitest";
import { healthCheckRoute } from "./healthCheckRoute";

describe("healthCheckRoute", () => {
  it("is ok", async () => {
    const app = getAppWithMiddleware().use(healthCheckRoute);
    const response = await request(app).get("/healthcheck");

    expect(response.status).toEqual(200);
  });
});
