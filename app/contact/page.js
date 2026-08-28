import BookingForm from "@/components/BookingForm"

export const metadata = {
    title:'Plan Your Trip | Travel Unbounded',
    description:'share your travel enquiry with Travel unbounded and our experts will get back to you within 24 hours',
}


export default function ContactPage(){
    return(
    <main className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="text-center">

        <h1>Plan Your Trip</h1>
        <p>Tell us about your next adventure</p>
        </div>
        <div className='mt-10'><BookingForm /></div>
    </main>
    )
}