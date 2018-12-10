import * as actions from "./index";

describe("actions test", () => {
  it("increment should create INCREMENT action", () => {
    expect(actions.increment()).toEqual({ type: "INCREMENT" });
  });
  it("decrement should create DECREMENT action", () => {
    expect(actions.decrement()).toEqual({ type: "DECREMENT" });
  });
});
