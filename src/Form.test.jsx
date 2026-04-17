import { render, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Form from "./Form";

describe("Form Test", () => {
  it("should submit form", () => {
    const mockFn = vi.fn();

    const { getByText } = render(<Form onSubmit={mockFn} />);
    fireEvent.click(getByText("Submit"));

    expect(mockFn).toHaveBeenCalledWith("submitted");
  });
});