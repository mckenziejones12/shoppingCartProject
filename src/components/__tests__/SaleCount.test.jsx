import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import { SaleCount } from "../SaleCount";

describe("<SaleCount />", () => {
  it("sets item in cart to count 4", () => {
    render(<SaleCount count={4} />);

    expect(screen.getByText("4")).toBeInTheDocument();
  });
  it("sets item in cart to 9+ when 10 or more item in cart", () => {
    render(<SaleCount count={10} />);

    expect(screen.getByText("9+")).toBeInTheDocument();
  });
  it("sets item in cart to 0 when null", () => {
    render(<SaleCount count={null} />);

    expect(screen.getByText("0")).toBeInTheDocument();
  });

  // snapshot
  it("renders correctly", () => {
    const { asFragment } = render(<SaleCount count={3} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
