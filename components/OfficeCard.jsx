export default function OfficeCard({ office }) {
    return(
        <div className="office-card">
            <h3 className="office-city">{office.city}</h3>
            <p className="office-address">{office.address}</p>
        </div>
    );
}