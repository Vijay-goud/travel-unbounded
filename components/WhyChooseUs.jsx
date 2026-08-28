const reasons = [
    {
        id: 1,
        title: 'Experiential Travel',
        description: 'Journeys designed around real culture, people, and local experiences',
    },
    {
        id: 2,
        title: 'Trusted Expertise',
        description: 'Years of on-ground experience across India and international destinations.',
    },
    {
        id: 3,
        title: 'Personalized Planning',
        description: 'Every trip is tailored to you pace, interests, and budget.'
    },
    {
        id: 4,
        title: "End-to-End Support",
        description: "From planning to return, our team is with you at every step.",
    },

]
export default function WhyChooseUs() {
    return (
        <section className='why-choose-us'>
            <h2 className='section-title'>Why Choose Us</h2>
            <div className='section-description'>
                {reasons.map(reason => (
                    <div key={reason.id} className='reason-card'>
                        <h3 className='reason-title'>{reason.title}</h3>
                        <p className='reason-description'>{reason.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}