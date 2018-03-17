export default class {
  constructor(fromUser) {
    this.name = fromUser.name;
    this.email = fromUser.email;
    this.website = fromUser.website;
    this.address = fromUser.address;
    this.bio = fromUser.bio;
    this.image = fromUser.image;
    this.last_login = fromUser.last_login;
    this.status = fromUser.status;
  }

  get ModelName() {
    return "User";
  }
}
