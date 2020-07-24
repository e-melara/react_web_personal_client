import Configuration from "./configuration";

class User extends Configuration {
 signUp = async data => {
  try {
   const result = await this.axios("sign-up", {
    method: "POST",
    body: JSON.stringify(data)
   });
   if (result.user) {
    return { ok: true };
   } else {
    return { ok: false, message: result.message };
   }
  } catch (error) {
   return { ok: false, message: error.message };
  }
 };
}

export default Object.freeze(new User());
