import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div>
            <div className="flex justify-center">
                <img src="/icon/404-error-page.gif" alt="" />
            </div>
            <div className="text-center bg-blue-500 p-2">
                <h1 className="text-white text-2xl font-bold">Page update is in progress.....</h1>
            </div>
            <div className="flex justify-center mt-16">
                <Link to="/"
                    className="text-center font-medium text-xl bg-yellow-300 w-60 py-4 rounded-full">
                    Go Back
                </Link>
            </div>
        </div>
    );
};

export default Error;