import { z } from "zod";
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure
} from "~/server/api/trpc";

export const todoRouter = createTRPCRouter({


  getAllTodos: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.todo.findMany();
  }),


});