import { expect, test } from "vitest";
import type { Todo, PrismaClient } from "@prisma/client";
import { appRouter } from "../root"
import { mockDeep } from "jest-mock-extended";
import type { Session } from "next-auth";

test("getAllTodos retreives todos", async () => {
    const prismaMock = mockDeep<PrismaClient>();

    const mockSession: Session = {
      expires: new Date().toISOString(),
      user: { id: "test-user-id", name: "Test User" },
    };

    const mockOutput: Todo[] = [
      {
        id: "test-todo-id",
        content: "mock content",
        done: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: '1'
      },
    ];
  
    prismaMock.todo.findMany.mockResolvedValue(mockOutput);

    const caller = appRouter.createCaller(
        { session: mockSession, prisma: prismaMock }
      );

      const result = await caller.todo.getAllTodos();

      expect(result).toHaveLength(mockOutput.length);
      expect(result).toStrictEqual(mockOutput);
})