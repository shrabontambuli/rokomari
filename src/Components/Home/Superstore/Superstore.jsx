import Card_2 from "../../Card/Card_2/Card_2";



const Superstore = () => {
    return (
        <div className="bg-white mt-6 py-5 px-10 rounded-md shadow-md">
            <h1 className="text-2xl">Superstore</h1>
            <div className="grid grid-cols-1 lg:grid-cols-6 justify-items-center items-center gap-8 px-14 mt-6">
                <div>
                    <Card_2/>
                </div>
                <div>
                    <Card_2/>
                </div>
                <div>
                    <Card_2/>
                </div>
                <div>
                    <Card_2/>
                </div>
                <div>
                    <Card_2/>
                </div>
                <div>
                    <Card_2/>
                </div>
            </div>
        </div>
    );
};

export default Superstore;