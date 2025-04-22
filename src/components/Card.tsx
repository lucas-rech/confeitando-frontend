interface CardProps {
    title: string;
    description: string;
    price: number;
    imageUrl: string;
}


function Card( { title, description, price, imageUrl }: CardProps) {
    return (
        <div className="card bg-primary mb-3" style={{ width: '18rem' }}>
            <img className="card-img-top" src={imageUrl} alt="Card image cap" /> 
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-price text-2xl"><strong>R$ {price}</strong></p>
                <a href="#" className="btn btn-secondary">Go somewhere</a>
            </div>
        </div>
    );
}

export default Card