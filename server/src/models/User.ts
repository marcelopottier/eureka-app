import { Document, Schema, model } from 'mongoose';

interface IUser extends Document {
    userName: string;
    password: string;
    userFirstName: string;
    birthDate: String;
    especialization: String;
    photo: string;
    email: string;
    phone: number;
    createdAt: any;
    active: string;
    deleted: string;
}

const UserSchema = new Schema<IUser>({
    userName: { type: String, required: true },
    password: { type: String, required: true},
    userFirstName: { type: String, required: true  },
    birthDate: { type: String, required: true },
    especialization: { type: String, required: true },
    photo: { type: String},
    email: { type: String},
    phone: { type: Number },
    createdAt: { type: Date, default: Date.now},
    active: { type: String,  enum: ['Y', 'N'], default: 'Y'},
    deleted: { type: String, enum: ['Y', 'N'], default: 'N'}
});

export default model<IUser>('Users', UserSchema);
