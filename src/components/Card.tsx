interface CardProps {
    title: string;
    description: string;
    price: number;
    imageUrl: string;
}


function Card( { title, description, price, imageUrl }: CardProps) {
    const formattedPrice = price.toFixed(2).replace('.', ',')


    return (
        <div className="card bg-primary mb-3 w-[18rem] max-h-[28rem]">
            <div className="h-[40%] ">
                <img className="card-img-top w-fit h-full object-cover" src={imageUrl} alt="Card image cap" /> 
            </div>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text h-[33%]">{description}</p>
                <p className="card-price text-2xl"><strong>R$ {formattedPrice}</strong> <span className="text-sm">Kg</span></p>
                <a href="#" className="btn btn-secondary">Encomendar</a>
            </div>
        </div>
    );
}

export default Card