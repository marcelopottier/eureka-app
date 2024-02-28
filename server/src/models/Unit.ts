import { Document, Schema, model } from 'mongoose';

interface IUnit extends Document {
    unitName: string;
    unitCGC: string;
    photo: string;
    email: string;
    phone: Number;
    createdAt: Date;
    active: string;
    deleted: string;
    
}

const UnitSchema = new Schema<IUnit>({
    unitName: { type: String, required: true },
    unitCGC: { type: String, required: true},
    photo: { type: String},
    email: { type: String, required: true },
    phone: { type: Number },
    createdAt: { type: Date, default: Date.now},
    active: { type: String,  enum: ['Y', 'N'], default: 'Y'},
    deleted: { type: String, enum: ['Y', 'N'], default: 'N'}
});

export default model<IUnit>('Units', UnitSchema);
