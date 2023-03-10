import { Schema, model, InferSchemaType } from "mongoose";

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    bio: String,
    avatar: String,
    followers: [{ type: Schema.Types.ObjectId, ref: "users" }],
    followings: [{ type: Schema.Types.ObjectId, ref: "users" }],
    list: [
      {
        name: String,
        posts: [{ type: Schema.Types.ObjectId, ref: "posts" }],
      },
    ],
  },
  { timestamps: true }
);

type userSchemaInferType = InferSchemaType<typeof userSchema>;
export default model<userSchemaInferType>("users", userSchema);
