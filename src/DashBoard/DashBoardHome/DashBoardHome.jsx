import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const DashBoardHome = () => {
    const { user, logOut } = useContext(AuthContext);
    const [cartData, setCartData] = useState([]);
    console.log(user)
    useEffect(() => {
        axios.get('http://localhost:5000/selects')
            .then(res => {
                setCartData(res.data.slice(0, 3))
            });
    }, [])

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => (error))
    }

    return (
        <div className='w-11/12 mx-auto mt-10'>
            <div className='flex justify-between items-start'>
                <div className='text-white font-serif'>
                    <h1 className='text-4xl'>Welcome, {user?.displayName} !</h1>
                    <p className='text-xl mt-1'>Manage and check your project task information anytime</p>
                </div>
                <div className='flex justify-center items-center gap-4'>
                    <button className='flex justify-center items-center bg-white rounded-full shadow-xl p-1 w-10 h-10'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                    </svg>
                    </button>
                    <button onClick={handleLogOut} className='flex justify-center items-center bg-white rounded-full shadow-xl p-1 w-10 h-10'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
                    </svg>
                    </button>
                </div>
            </div>
            <div className='grid grid-cols-4 gap-6 mt-10'>
                <div className='col-span-3'>
                    <div className='grid grid-cols-3 gap-6'>
                        <div className='col-span-2 bg-white shadow-xl rounded-xl p-4'>
                            <h1 className='text-2xl font-serif'>Upcoming Products :---</h1>
                            <div className="mt-3">
                                <div className="overflow-x-auto mt-4">
                                    <table className="table">
                                        <tbody>
                                            {/* row 1 */}
                                            {
                                                cartData?.map(d =>
                                                    <tr key={d?._id} className="border-b border-[#d8d9dd]">
                                                        <td>
                                                            <div className="card card-side rounded-none gap-3">
                                                                <figure>
                                                                    <img
                                                                        className="w-14 h-20"
                                                                        src={d?.picture}
                                                                        alt="Movie" />
                                                                </figure>
                                                                <div>
                                                                    <h2 className="text-base w-72">{d?.name}</h2>
                                                                    <h2 className="text-sm mt-2">{d?.by}</h2>
                                                                    <img className="mt-4 w-4 h-4" src="/icon/icon_trash.png" alt="" />
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="text-xl font-medium">{d?.price} Tk.</td>
                                                    </tr>
                                                )
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className='flex justify-center mt-3'>
                                <Link to='/allProduct'>
                                    <h1 className='border-2 py-1 px-6 rounded-md'>SEE MORE</h1>
                                </Link>
                            </div>
                        </div>
                        <div>
                            <div className="stat bg-white shadow-xl rounded-xl">
                                <div className="stat-figure text-primary">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        className="inline-block h-8 w-8 stroke-current">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                                    </svg>
                                </div>
                                <div className="stat-title text-lg text-black font-medium">Total Sales Product</div>
                                <div className="stat-value text-primary">25.6K</div>
                                <div className="stat-desc text-lg text-black font-medium">Our Achievement</div>
                            </div>
                            <div className="stat bg-white shadow-xl rounded-xl mt-6">
                                <div className='flex justify-between items-center'>
                                    <h1 className='text-2xl font-serif'>Members :---</h1>
                                    <Link to='/allMember'>
                                        <h1 className='border-2 py-1 px-6 rounded-md'>SEE MORE</h1>
                                    </Link>
                                </div>
                                <div className=" mt-6">
                                    <div className="alert alert-info mt-3">
                                        <span>New mail arrived.</span>
                                    </div>
                                    <div className="alert alert-success mt-3">
                                        <span>Message sent successfully.</span>
                                    </div>
                                    <div className="alert alert-success mt-3">
                                        <span>Message sent successfully.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white rounded-xl mt-6 p-4 shadow-xl'>
                        <div className='flex justify-between items-center'>
                            <h1 className='text-2xl font-serif'>Total Active Products :---</h1>
                            <Link to='/allProduct'>
                                <h1 className='border-2 py-1 px-6 rounded-md'>SEE MORE</h1>
                            </Link>
                        </div>
                        <div className="overflow-x-auto mt-6">
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Name</th>
                                        <th>Job</th>
                                        <th>Favorite Color</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* row 1 */}
                                    <tr>
                                        <th>1</th>
                                        <td>Cy Ganderton</td>
                                        <td>Quality Control Specialist</td>
                                        <td>Blue</td>
                                    </tr>
                                    {/* row 2 */}
                                    <tr>
                                        <th>2</th>
                                        <td>Hart Hagerty</td>
                                        <td>Desktop Support Technician</td>
                                        <td>Purple</td>
                                    </tr>
                                    {/* row 3 */}
                                    <tr>
                                        <th>3</th>
                                        <td>Brice Swyre</td>
                                        <td>Tax Accountant</td>
                                        <td>Red</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div>
                    <div className=' rounded-xl border-t border-x border-rose-400 shadow-2xl shadow-rose-500 p-4 relative'>
                        <Link to="/edit">
                            <div className='flex items-center gap-1 absolute right-4 top-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                </svg>
                                Edit
                            </div>
                        </Link>
                        <img className='w-28 h-28 rounded-full mx-auto' src={user?.photoURL} alt="" />
                        <div className='mt-3 rounded-xl text-center'>
                            <h1 className='text-xl font-semibold'>Name : {user?.displayName}</h1>
                            <h2 className='text-sm text-gray-900'>Email : {user?.email}</h2>
                            <h2 className='text-sm text-gray-900'>Work : Web Developer</h2>
                            <h2 className='text-sm text-gray-900'>Status : Admin</h2>
                            <h2 className='text-sm text-gray-900'>Location : Dhaka, Bangladesh</h2>
                        </div>
                    </div>
                    <div className='bg-white rounded-3xl dashC relative h-[61.5%] mt-6'>
                        <div className='bg-blue-500 rounded-t-3xl h-9 pt-1'>
                            <h1 className='text-center text-white text-lg'>Chat with all members</h1>
                        </div>


                        <div className='p-4'>
                            <h1>Massage..........!!!!!!!!</h1>
                        </div>



                        <div className='bg-blue-500 rounded-b-3xl h-20 absolute w-full bottom-0'>
                            <div className='w-full h-full flex justify-center items-center'>
                                <div className="join px-2">
                                    <input
                                        type="text"
                                        placeholder="message........."
                                        className="input input-bordered w-[100%] join-item" />
                                    <button className="btn btn-primary border-none join-item">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashBoardHome;