import Configuration from "./configuration";

class User extends Configuration {
 signUp = async data => {
  const result = await this.fetch("sign-up", {
   method: "POST",
   body: JSON.stringify(data)
  });

  console.log(result);
 };
}

export default Object.freeze(new User());
