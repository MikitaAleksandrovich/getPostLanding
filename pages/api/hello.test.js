import handler from "./hello";

const createMockRes = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};

describe("hello API handler", () => {
  it("responds with a 200 status code", () => {
    const req = {};
    const res = createMockRes();

    handler(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
  });

  it("returns the expected payload", () => {
    const req = {};
    const res = createMockRes();

    handler(req, res);

    expect(res.json).toHaveBeenCalledWith({ name: "John Doe" });
  });
})