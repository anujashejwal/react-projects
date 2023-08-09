export default function Card(props) {
    console.log(props)
    let badgeText
    if (props.openSpots === 0 ) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        
        <div className="airbnb-card">
            {badgeText && <div className="airbnb-card--badge">{badgeText}</div>}
            <img src={`../images/${props.coverImg}`} className="airbnb-card--image" />
            <div className="airbnb-card--stats">
                <img src="../images/star.png" className="airbnb-card-star"/>
                <span>{props.rating}</span>
                <span className="gray">({props.stats.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p className="airbnb-card--title">{props.title}</p>
            <p className="airbnb-card--price"> <b>From ${props.price} </b>/ person</p>
        </div>
        
    )
}