import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Card = () => {
    const [bestData, setBestData] = useState([]);
    console.log(bestData);

    const url = ('/data.json')
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBestData(data))
    }, [])
    return (
        <>
            {
                bestData?.map(d =>
                    <Link key={d._id} to="/">
                        <div className="card card1 card-body p-0 bg-white h-52 border rounded-sm shadow">
                            <figure className="w-48 h-40 bg-[#F5F5F5]">
                                <img className="w-full h-full" src={d?.picture} alt="Album" />
                            </figure>
                            <div>
                                <h2 className="card-title text-center justify-center text-base pb-1 font-normal mt-1">{d?.category}</h2>
                            </div>
                        </div>
                    </Link>
                )
            }
        </>
    );
};

export default Card;