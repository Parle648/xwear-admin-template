import { render } from "@testing-library/react";
import App from "./App";

describe("test", () => {
  beforeEach(() => {
    render(<App />);
  });

  it("test-case", () => {
    expect(2).toBe(2);
  });
});
