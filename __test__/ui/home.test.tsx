import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { expect, test, describe } from "@jest/globals";
import Page from "@/app/(pages)/(website)/(home)/page";
import * as React from "react";

describe("Testing Home Page: Unit Testing", () => {
  test("should render home page", () => {
    // Arrange
    render(<Page />);

    // Act
    const heading = screen.getByRole("heading", { name: "home" });

    // Assert
    expect(heading).toBeDefined();
  });
});
