

export default function Card({ name, superpowers, url, info }) {
    return (
        <div className="container-card">
            <h2>{name}</h2>
            <h4>{superpowers}</h4>
            <img src={url} alt="hero" />
            <p>{info}</p>
        </div>
    )
}
