import PropTypes from 'prop-types';
import Feature from '../feature/Feature';
const PriceOption = ({ option }) => {
    const {name, price, features} = option;
    return (
        <div className='flex flex-col bg-white shadow-md rounded-md border p-4 space-y-3'>
            <h2>
                <span className='text-4xl font-bold'>{price}</span>
                <span>/month</span>
            </h2>
            <h3 className='text-2xl font-medium'>{name}</h3>
            <div className='flex-grow'>
                {
                    features.map((feature, index) => <Feature key={index} feature={feature} />)
                }
            </div>
            <button className='btn w-full bg-green-600 hover:bg-green-500 text-white text-xl'>Buy Now</button>
        </div>
    );
};

PriceOption.propTypes = {
    priceOption: PropTypes.object
}

export default PriceOption;