import { NextResponse } from "next/server";
import {connectToDatabase} from "@/lib/mongodb";
import Enquiry from "@/models/Enquiry";

const ALLOWED_HOTEL_CATEGORIES =["Standard", "Deluxe", "Luxury"];
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateEnquiry(body){
    const errors = {};
    const fullName = typeof body.fullName === "string" ? body.fullName.trim() : "";
    if (!fullName) {
        errors.fullName = "Full Name is required";
    }
    const countryCode = typeof body.countryCode === "string" ? body.countryCode.trim() : "";
    if (!countryCode) {
        errors.countryCode = "Country Code is required";
    }

    const contactNumber = typeof body.contactNumber === "string" ? body.contactNumber.trim() : "";
    if (!contactNumber) {
        errors.contactNumber = "Contact Number is required";
    }else if (!/^\d+$/.test(contactNumber)) {
        errors.contactNumber = "Contact Number must be numeric";
    }
    const email = typeof body.email === "string" ? body.email.trim() : "";
    if (!email){
        errors.email = "Email is required";
    }else if (!EMAIL_REGEX.test(email)) {
        errors.email = "Email is invalid";
    }
    let dateOfTravel = null;
    if (!body.dateOfTravel) {
        errors.dateOfTravel = "Date of Travel is required";
    } else {
        dateOfTravel = new Date(body.dateOfTravel);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        if (Number.isNaN(dateOfTravel.getTime())){
            errors.dateOfTravel = "Date of Travel is invalid";
        }else if(dateOfTravel < today){
            errors.dateOfTravel = "Date of Travel cannot be in the past";
        }
    }

    const numberOfPeople = Number(body.numberOfPeople);
    if (Number.isNaN(numberOfPeople) || numberOfPeople < 1) {
        errors.numberOfPeople = "Number of People must be at least 1";
    }

    const numberOfChildren = Number(body.numberOfChildren ?? 0);
    if (!Number.isFinite(numberOfChildren) || numberOfChildren < 0) {
        errors.numberOfChildren = "Number of Children cannot be negative";
    }

    const hotelCategory = typeof body.hotelCategory === "string" ? body.hotelCategory.trim() : "";
    if (!ALLOWED_HOTEL_CATEGORIES.includes(hotelCategory)) {
        errors.hotelCategory = "Hotel Category must be one of: " + ALLOWED_HOTEL_CATEGORIES.join(", ");
    }
    return {errors,
        normalized:{
            fullName,
            countryCode,
            contactNumber,
            email:email.toLowerCase(),
            dateOfTravel,
            numberOfPeople,
            numberOfChildren,
            hotelCategory,
        }
    };
}
export async function POST(request){
    let body;
    try{
        body = await request.json();
    }catch{
        return NextResponse.json(
            {success:false, message:'Invalid request body'},
            {status:400}
        )
    }
    const {errors, normalized} = validateEnquiry(body);
    if (Object.keys(errors).length >0){
        return NextResponse.json(
            {success:false, message:'Invalid enquiry data.', errors},
            {status:400}
        );
    }

    try{
        await connectToDatabase();
        await Enquiry.create(normalized);

        return NextResponse.json(
            {success:true, message:'Enquiry saved successfully.'},
            {status:201}
        );
    } catch (error) {
        console.log("Failed to save enquiry:", error);
        return NextResponse.json(
            {success:false, message:'Something went wrong while saving your enquiry.'},
            {status:500}
        );
    }
}