import Repository from "./Repository";

type Guild = {
  id: string;
  name: string;
  icon?: string;
};

export default class GuildRepository extends Repository {
  index() {
    return this.get<Guild[]>("/users/@me/guilds");
  }
}
