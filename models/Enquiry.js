import mongoose from "mongoose";

const enquirySchema = new mongoose.Schema({
    fullName: { type: String, required: true, trim: true },
    countryCode: { type: String, required: true, trim: true },
    contactNumber: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    dateOfTravel:{type: Date, required: true},
    numberOfPeople: { type: Number, required: true ,min: 1},
    hotelCategory: { type: String, required:true, enum: ['Standard', 'Deluxe', 'Luxury'] },
    numberOfChildren: { type: Number, required: true , min: 0, default: 0},
    createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Enquiry || mongoose.model("Enquiry", enquirySchema);