import { NextApiRequest, NextApiResponse } from "next";
import GuildRepository from "~/models/discord/GuildRepository";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "GET":
      const token = req.query["token"];

      if (!token || token instanceof Array) {
        res.status(403);
        return;
      }

      const repository = new GuildRepository(token);
      const channels = await repository.index();
      res.json(channels.data);
      break;

    default:
      res.status(404);
  }
};
