import mongoose, { Document, Schema, model } from 'mongoose';

interface ISchedule extends Document {
    scheduleDate: Date;
    scheduleHourStart: Date;
    scheduleHourEnd: Date;
    clientId: object;
    userId: object;
    unitId: object;
    instituteId: object;
    description: string;
    amount: any;
    transactionId: string;
    createdAt: Date;
    active: string;
    deleted: string;
    
}

const ScheduleSchema = new Schema<ISchedule>({
    scheduleDate: {type: Date, required: true},
    scheduleHourStart: {type: Date, required: true},
    scheduleHourEnd: {type: Date, required: true},
    clientId: {type: mongoose.Types.ObjectId, ref: 'Clients', required: true},
    userId: {type: mongoose.Types.ObjectId, ref: 'Users', required: true},
    unitId: {type: mongoose.Types.ObjectId, ref: 'Units', required: true},
    instituteId: {type: mongoose.Types.ObjectId, ref: 'Institutes', required: true},
    description: { type: String },
    amount: {type: Number, required: true},
    transactionId: {type: String, required: true},
    createdAt: { type: Date, default: Date.now},
    active: { type: String, enum: ['Y', 'N'], default: 'Y'},
    deleted: { type: String, enum: ['Y', 'N'], default: 'N'}
});

export default model<ISchedule>('Schedules', ScheduleSchema);
