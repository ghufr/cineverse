import { fireEvent, render, screen } from "@testing-library/react";
import { useTheme } from "next-themes";
import { ModeToggle } from "../ModeToggle";

jest.mock("next-themes", () => ({
  useTheme: jest.fn(),
}));

describe("ModeToggle", () => {
  const setTheme = jest.fn();
  beforeEach(() => {
    (useTheme as jest.Mock).mockReturnValue({ setTheme });
  });

  it("renders and allows theme changes", () => {
    render(<ModeToggle />);
    const trigger = screen.getByRole("button", { name: /toggle theme/i });
    fireEvent.click(trigger);

    const lightButton = screen.getByText("Light");
    fireEvent.click(lightButton);
    expect(setTheme).toHaveBeenCalledWith("light");

    const darkButton = screen.getByText("Dark");
    fireEvent.click(darkButton);
    expect(setTheme).toHaveBeenCalledWith("dark");

    const systemButton = screen.getByText("System");
    fireEvent.click(systemButton);
    expect(setTheme).toHaveBeenCalledWith("system");
  });
});
