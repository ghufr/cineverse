import { renderHook } from "@testing-library/react";
import { useInfiniteScroll } from "../useInfiniteScroll";

describe("useInfiniteScroll", () => {
  it("calls the callback when scrolled to the bottom", () => {
    const callback = jest.fn();
    renderHook(() => useInfiniteScroll(callback));

    Object.defineProperty(document.documentElement, "scrollTop", {
      writable: true,
      value: 1000,
    });
    Object.defineProperty(document.documentElement, "offsetHeight", {
      writable: true,
      value: 1000,
    });
    Object.defineProperty(window, "innerHeight", {
      writable: true,
      value: 1000,
    });

    window.dispatchEvent(new Event("scroll"));

    expect(callback).toHaveBeenCalled();
  });
});
