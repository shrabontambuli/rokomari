import Card_3 from "../../Card/Card_3/Card_3";

const SoldProduct = () => {
    return (
        <div className="mt-6 py-5 px-10 rounded-md shadow-md bg">
            <h1 className="text-2xl">Recently Sold Products</h1>
            <div className="grid grid-cols-1 lg:grid-cols-6 justify-items-center items-center gap-8 px-14 mt-6">
                <div>
                    <Card_3 />
                </div>
                <div>
                    <Card_3 />
                </div>
                <div>
                    <Card_3 />
                </div>
                <div>
                    <Card_3 />
                </div>
                <div>
                    <Card_3 />
                </div>
                <div>
                    <Card_3 />
                </div>
            </div>
        </div>
    );
};

export default SoldProduct;