import { v2 as cloudinary } from "cloudinary";

import { my_env_var_val } from "./myEnv.js";

cloudinary.config({
  cloud_name: my_env_var_val.CLOUDINARY_CLOUD_NAME,
  api_key: my_env_var_val.CLOUDINARY_API_KEY,
  api_secret: my_env_var_val.CLOUDINARY_API_SECRET,
});

export default cloudinary;
