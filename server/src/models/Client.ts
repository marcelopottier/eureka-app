import mongoose, { Document, Schema, model } from 'mongoose';

interface IClient extends Document {
    clientName: string;
    parentName: string;
    photo: string;
    birthDate: Date;
    email: string;
    phone: number;
    address: {
        city: string;
        uf: string;
        cep: string;
        number: string;
        country: string;
    };
    school: string;
    institute: string;
    unitId: object;
    createdAt: any;
    active: string;
    deleted: string;
}

const ClientSchema = new Schema<IClient>({
    clientName: { type: String, required: true },
    parentName: { type: String },
    photo: { type: String },
    birthDate: { type: Date, required: true },
    email: { type: String},
    phone: { type: Number },
    address: {
        city: { type: String, required: true },
        uf: { type: String, required: true },
        cep: { type: String, required: true },
        number: { type: String, required: true },
        country: { type: String, required: true }
    },
    school: { type: String },
    institute: { type: String},
    unitId: { type: mongoose.Types.ObjectId, ref: 'Units', required: true },
    createdAt: { type: Date, default: Date.now},
    active: { type: String,  enum: ['Y', 'N'], default: 'Y'},
    deleted: { type: String, enum: ['Y', 'N'], default: 'N'}
});

export default model<IClient>('Clients', ClientSchema);
