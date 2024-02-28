import { Document, Schema, model } from 'mongoose';

interface IInstitute extends Document {
    instituteName: string;
    instituteCGC: string;
    photo: string;
    email: string;
    phone: Number;
    instituteDefault: string;
    createdAt: any;
    active: string;
    deleted: string;
    
}

const InstituteSchema = new Schema<IInstitute>({
    instituteName: { type: String, required: true },
    instituteCGC: { type: String, required: true},
    photo: { type: String},
    email: { type: String, required: true },
    phone: { type: Number },
    instituteDefault: { type: String, default: 'N'},
    createdAt: { type: Date, default: Date.now},
    active: { type: String,  enum: ['Y', 'N'], default: 'Y'},
    deleted: { type: String, enum: ['Y', 'N'], default: 'N'}
});

export default model<IInstitute>('Intitutes', InstituteSchema);
