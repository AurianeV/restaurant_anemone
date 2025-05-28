import './Event.scss'
import { useState } from 'react'

function EventCard({ imgSrc, titleH3, titleH4, description }) {
    const [showText, setShowText] = useState(false)

    const toggleText = () => {
        setShowText(prev => !prev)
    }

    return (
        <div className="eventCard image-wrapper">
            <img
                src={imgSrc}
                onClick={toggleText}
                style={{ cursor: 'pointer' }}
                alt={titleH3}
            />
            {showText && (
                <div className="eventDescription">
                    <h3>{titleH3}</h3>
                    <h4 dangerouslySetInnerHTML={{ __html: titleH4}} />
                    <p dangerouslySetInnerHTML={{ __html: description }} />
                </div>
            )}
        </div>
    )
}

export default function Event({ events }) {
    return (
        <div className="section_event">
            <div className="event_items">
                {events.map((e, i) => (
                    <EventCard
                        key={i}
                        imgSrc={e.imgSrc}
                        titleH3={e.titleH3}
                        titleH4={e.titleH4}
                        description={e.description}
                    />
                ))}
            </div>
        </div>
    )
}
