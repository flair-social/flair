import { AuthenticatedContext } from "../index.js";
import { validate } from "../middleware/validate.js";
import { z } from "zod";
import { GroupsRepository } from "../repositories/groups.repository.js";
import { ApplicativeResponse } from "../core/applicative/applicativeResponse.js";
import { ApplicativeError } from "#core/applicative/applicativeError.js";

export class GroupsController {
  constructor(private readonly groupsRepository: GroupsRepository) {}

  async create(ctx: AuthenticatedContext) {
    const inputs = await validate(
      await ctx.req.json(),
      z.object({
        name: z.string().trim(),
        description: z.string().trim(),
        lat: z.number(),
        long: z.number(),
        arrival: z.date(),
        departure: z.date()
      })
    );

    const { insertId } = await this.groupsRepository.insert({
      name: inputs.name,
      description: inputs.description,
      lat: inputs.lat,
      long: inputs.long,
      arrival: inputs.arrival.toISOString(),
      departure: inputs.departure.toISOString()
    });

    const group = await this.groupsRepository.getById(Number(insertId));

    if (!group) {
      throw ApplicativeError.Internal();
    }

    ctx.set(
      "response",
      ApplicativeResponse.Ok({
        message: "Group created",
        data: group
      })
    );
  }

  async update(ctx: AuthenticatedContext) {
    const inputs = await validate(
      await ctx.req.json(),
      z.object({
        name: z.string().trim().optional(),
        description: z.string().trim().optional(),
        lat: z.number().optional(),
        long: z.number().optional(),
        arrival: z.date().optional(),
        departure: z.date().optional()
      })
    );
  }
}
