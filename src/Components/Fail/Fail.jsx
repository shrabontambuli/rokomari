
import { Link } from 'react-router-dom';

const Fail = () => {
    return (
        <div className="bgC h-screen flex items-center justify-center">
            <div className="bg-white p-6 w-3/12 shadow-lg rounded-lg md:mx-auto">
                <div className='w-16 h-16 mx-auto'>
                    <img src="/icon/multiply.png" alt="" />
                </div>
                <div className="text-center mt-4">
                    <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">Your Online Payment Has Failed!</h3>
                    <p className="text-gray-600 my-2 text-xl">Please try again?</p>
                    <p> Have a great day!  </p>
                    <div className="py-10 text-center">
                        <Link to="/addCart" className="px-12 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3">
                            GO BACK
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Fail;