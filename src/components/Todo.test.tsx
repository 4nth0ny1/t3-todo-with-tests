import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Todo from "./Todo";
import "@testing-library/jest-dom";

test("Todo displays the correct content", () => {
  render(
    <Todo
      todo={{
        id: "1",
        content: "test content",
        done: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: "2345",
      }}
    />
  );

  //content
  expect(
    screen.getByRole("content", { name: "test content" })
  ).toBeInTheDocument();
});
