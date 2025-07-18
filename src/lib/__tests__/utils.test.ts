import { formatRuntime } from "../utils";

describe("utils", () => {
  describe("formatRuntime", () => {
    it("formats minutes into hours and minutes", () => {
      expect(formatRuntime(125)).toBe("2h 5m");
      expect(formatRuntime(60)).toBe("1h 0m");
      expect(formatRuntime(59)).toBe("0h 59m");
    });
  });
});
