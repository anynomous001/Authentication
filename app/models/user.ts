import { Schema, ObjectId, models, model } from 'mongoose';

interface BaseUser {
    _id?: ObjectId;
    name: string;
    email: string;
    password?: string;
    provider: "credentials" | "google";
    avatar?: {
        _id?: string;
        url: string;
    };
    verified: boolean;
}

export interface CredentialUser extends BaseUser {
    provider: "credentials";
    password: string;
}

export interface GoogleUser extends BaseUser {
    provider: "google";
    password?: never;
}

export type User = CredentialUser | GoogleUser;



interface Methods {
    compare(password: string): boolean;
}

const schema = new Schema<BaseUser>(
    {


        name: { type: String, trim: true, required: true },
        email: { type: String, trim: true, required: true, unique: true },
        password: { type: String },
        provider: {
            type: String,
            enum: ["credentials", "google"],
            required: true
        },
        avatar: {
            type: Object,
            _id: { type: String },
            url: { type: String }
        },
        verified: { type: Boolean, default: false }

    },
    {
        timestamps: true,
    }
);


export const createNewUser = async (userinfo: User) => {
    try {
        const user = await UserModel.create(userinfo)
        return user
    } catch (error) {
        throw new Error("Error creating new user" + error)
    }
}

const UserModel = models.User || model('User', schema);

export default UserModel