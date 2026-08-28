"use client";

import { useState } from "react";
import "./BookingForm.css";
const intialForm= {
    fullName:"",
    countryCode: "+91",
    contactNumber:"",
    email:"",
    dateOfTravel:"",
    numberOfPeople:1,
    hotelCategory:'Standard',
    numberOfChildren: 0,
}
function validate(form){
    const errors = {};
    if (!form.fullName.trim()) {
        errors.fullName = "Full Name is required";
    }
    if (!form.email.trim()){
        errors.email = "Email is required";
    }else if (!/\S+@\S+\.\S+/.test(form.email)){
        errors.email = "Email is invalid";
    }
    if (!form.contactNumber.trim()){
        errors.contactNumber = "Contact Number is required";
    }else if (!/^\d{10}$/.test(form.contactNumber)){
        errors.contactNumber = "Contact Number is invalid";
    }
    if (!form.dateOfTravel.trim()){
        errors.dateOfTravel = "Date of Travel is required";
    }
    if (form.numberOfPeople < 1){
        errors.numberOfPeople = "Number of People must be at least 1";
    }
    if (form.numberOfChildren < 0){
        errors.numberOfChildren = "Number of Children cannot be negative";
    }
    return errors;
}
export default function BookingForm() {
    const [form, setForm] = useState(intialForm);
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState("idle");
    const [serverMessage, setServerMessage] = useState("");

    function handleChange(e) {
        const {name, value} = e.target;
        setForm(prev => ({
            ...prev,
            [name]: value
        }));
    }
    async function handleSubmit(e) {
        e.preventDefault();
        const validationErrors = validate(form);
        setErrors(validationErrors);

        if(Object.keys(validationErrors).length >0){
            return;
        }

        setStatus("loading");
        setServerMessage("");
        try{
            const response = await fetch("/api/enquiry",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json" 
                },
                body: JSON.stringify(form),
            })
            const data = await response.json();
            if (!response.ok || !data.success){
                setStatus("error");
                setServerMessage(data.message || "Something went wrong");
                return;
            }

            setStatus("success");
            setForm(intialForm);
        }catch {

            setStatus('error');
            setServerMessage("Something went wrong while submitting your enquiry. Please try again later.");

        }
    }
    if (status === "success") {
        return (
            <div className="booking-success">
                <h3>
                    Your enquiry has been submitted successfully!
                </h3>
                <p>Our travel expert will contact you within 24 hours.</p>
            </div>
        );
    }
    return (
        <form className="booking-form" onSubmit={handleSubmit} noValidate>
            <div className="form-field">
                <label htmlFor="fullName">Full Name</label>
                <input 
                    
                    id="fullName"
                    name="fullName" 
                    value={form.fullName}
                    onChange={handleChange}
                />
                {errors.fullName && <span className="error">{errors.fullName}</span>}
            </div>
            <div className="form-row">
                <div className="form-field">
                    <label htmlFor="countryCode">Country Code</label>
                    <input
                        id="countryCode"
                        name="countryCode"
                        value={form.countryCode}
                        onChange={handleChange}
                    />
                </div>
                <div className='form-field'>
                    <label htmlFor="contactNumber">Contact Number</label>
                    <input
                        id="contactNumber"
                        name="contactNumber"
                        value={form.contactNumber}
                        onChange={handleChange}
                    />
                    {errors.contactNumber && <span className="error">{errors.contactNumber}</span>}
                </div>
            </div>
            <div className='form-field'>
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                />
                {errors.email && <span className="error">{errors.email}</span>}
            </div>
            <div className='form-field'>
                <label htmlFor="dateOfTravel">Date of Travel</label>
                <input
                    type="date"
                    id="dateOfTravel"
                    name="dateOfTravel"
                    value={form.dateOfTravel}
                    onChange={handleChange}
                />
                {errors.dateOfTravel && <span className="error">{errors.dateOfTravel}</span>}
            </div>
            <div className='form-row form-row-3'>
                <div className='form-field'>
                    <label htmlFor="numberOfPeople">Number of People</label>
                    <input
                        type="number"
                        id="numberOfPeople"
                        name="numberOfPeople"
                        value={form.numberOfPeople}
                        onChange={handleChange}
                        min="1"
                    />
                    {errors.numberOfPeople && <span className="error">{errors.numberOfPeople}</span>}
                </div>
                <div className='form-field'>
                    <label htmlFor="numberOfChildren">Number of Children</label>
                    <input
                        type="number"
                        id="numberOfChildren"
                        name="numberOfChildren"
                        value={form.numberOfChildren}
                        onChange={handleChange}
                        min="0"
                    />
                    {errors.numberOfChildren && <span className="error">{errors.numberOfChildren}</span>}
                </div>
                <div className='form-field'>
                    <label htmlFor="hotelCategory">Hotel Category</label>
                    <select
                        id="hotelCategory"
                        name="hotelCategory"
                        value={form.hotelCategory}
                        onChange={handleChange}
                    >
                        <option value="Standard">Standard</option>
                        <option value="Deluxe">Deluxe</option>
                        <option value="Luxury">Luxury</option>
                    </select>
                </div>
            </div>
            <div className="form-field">
                <button type="submit" disabled={status === "loading"}>
                    {status === "loading" ? "Submitting..." : "Submit Enquiry"}
                </button>
                {status === "error" && <span className="error">{serverMessage}</span>}
            </div>
        </form>
    );
}
