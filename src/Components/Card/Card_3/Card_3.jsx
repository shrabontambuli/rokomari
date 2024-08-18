import { Link } from "react-router-dom";


const Card_3 = () => {
    return (
        <div className="card card-body relative w-52 h-[345px] rounded-sm border bg-white card3">
            <figure className="w-32 h-44 mx-auto bg-[#F5F5F5] relative">
                <img className="w-full h-full" src='/images/book_av.png' alt="Album" />
                <img className="absolute top-0 left-0" src="../../../../public/icon/e4de84e757d790ef4415.svg" alt="" />
                <p className="absolute top-1 left-2 text-white font-medium">25</p>
                <img className="absolute bottom-0 right-0 tag" src="/icon/poredakhun.png" alt="" />
                <div className="bg-orange-400 absolute top-16 w-full addC">
                    <Link to="/">
                        <h1 className="text-center text-white font-medium p-2">Add to Cart</h1>
                    </Link>
                </div>
            </figure>
            <div className="text-center mt-2">
                <p className="text-sm">New Finis Ant Insect Powder100gm TIN</p>
                <div className="rating items-center gap-1 rating-sm">
                    <input type="radio" name="rating-6" className="mask mask-star bg-yellow-400" />
                    <input
                        type="radio"
                        name="rating-6"
                        className="mask mask-star bg-yellow-400"
                    />
                    <input type="radio" name="rating-6" className="mask mask-star bg-yellow-400" />
                    <input type="radio" name="rating-6" className="mask mask-star bg-yellow-400" />
                    <input type="radio" name="rating-6" className="mask mask-star bg-yellow-400" />
                    <p>(1)</p>
                </div>
                <div className="flex justify-center items-center gap-2 font-medium">
                    <h1 className="line-through">TK.40</h1>
                    <h1>TK.38</h1>
                </div>
            </div>
            <div className="absolute bottom-0 w-full left-0 right-0 btnC">
                <Link to="/details">
                    <button className="bgC w-full text-blue-500 font-medium p-4">View Details</button>
                </Link>
            </div>
        </div>
    );
};

export default Card_3;