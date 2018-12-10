import count from "./count";

describe("count reducer", () => {
  it("handle initial state", () => {
    expect(count(undefined, {})).toEqual({ value: 0 });
  });
  it("should handle INCREMENT", () => {
    expect(count({ value: 0 }, { type: "INCREMENT" })).toEqual({ value: 1 });
    expect(count({ value: 1 }, { type: "INCREMENT" })).toEqual({ value: 2 });
    expect(count({ value: 2 }, { type: "INCREMENT" })).toEqual({ value: 3 });
  });
  it("should handle DECREMENT", () => {
    expect(count({ value: 2 }, { type: "DECREMENT" })).toEqual({ value: 1 });
    expect(count({ value: 1 }, { type: "DECREMENT" })).toEqual({ value: 0 });
    expect(count({ value: 0 }, { type: "DECREMENT" })).toEqual({ value: 0 });
  });
});
