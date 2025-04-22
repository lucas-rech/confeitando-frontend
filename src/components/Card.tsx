interface CardProps {
    title: string;
    description: string;
    price: number;
    imageUrl: string;
}


function Card( { title, description, price, imageUrl }: CardProps) {
    const formattedPrice = price.toFixed(2).replace('.', ',')

    const whatsappNumber = '5554992024464'
    const message = `Olá, gostaria de encomendar um bolo sabor ${title.toLowerCase()} no valor de R$ ${formattedPrice} kg`
    const buttonUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`


    return (
        <div className="card bg-primary mb-3 w-[18rem] max-h-[28rem] border-0 hover:scale-105 transition-transform duration-300 ease-in-out">
            <div className="h-[40%] ">
                <img className="card-img-top w-fit h-full object-cover" src={imageUrl} alt="Card image cap" /> 
            </div>
            <div className="card-body text-white">
                <h5 className="card-title fs-5">{title}</h5>
                <p className="card-text h-[33%]">{description}</p>
                <p className="card-price text-2xl"><strong>R$ {formattedPrice}</strong> <span className="text-sm">Kg</span></p>
                <a href={buttonUrl} target="_blank" className="btn btn-success hover:scale-105 font-semibold">Encomendar</a>
            </div>
        </div>
    );
}

export default Card