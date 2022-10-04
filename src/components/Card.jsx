import {
    cardImageDesktop,
    cardImageMobile,
    shoppingCartLogo,
} from '../constants'

const Card = ({ product }) => {
    const { productName, itemName, description, discountPrice, originalPrice } =
        product
    return (
        <div className="max-w-[375px] md:max-w-[650px] md:max-h-[450px] w-full flex flex-col md:flex-row rounded-lg overflow-hidden mx-5 my-7 md:mx-0">
            <div className="flex-1">
                <img
                    src={cardImageMobile}
                    alt={productName}
                    className="md:hidden block w-full h-full"
                />
                <img
                    src={cardImageDesktop}
                    alt={productName}
                    className="hidden md:block w-full h-full"
                />
            </div>
            <div className="flex-1 bg-white">
                <div className="flex flex-col gap-[1.15rem] justify-around p-8">
                    <h3 className="text-grayishBlue uppercase tracking-widest">
                        {itemName}
                    </h3>
                    <h1 className="font-fraunces text-darkBlue font-bold text-[36px] leading-9">
                        {productName}
                    </h1>
                    <p className="text-grayishBlue">{description}</p>
                    <div className="flex items-center gap-6">
                        <h2 className="font-fraunces text-[36px] text-darkCyan">
                            {discountPrice}
                        </h2>
                        <h3 className="text-grayishBlue line-through">
                            {originalPrice}
                        </h3>
                    </div>
                    <button className="w-full bg-darkCyan flex items-center justify-center gap-2.5 py-3 text-white rounded-md hover:bg-darkerCyan">
                        <img src={shoppingCartLogo} alt="" />
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card
