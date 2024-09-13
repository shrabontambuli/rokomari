import axios from 'axios';
import React, { useContext, useEffect, useState, useRef } from 'react';
import { Form, Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const DashBoardHome = () => {
    const { user, logOut } = useContext(AuthContext);
    // const [bestData, setBestData] = useState([]);
    const [usersData, setUsersData] = useState([]);
    const [purchaseData, setPurchaseData] = useState([]);
    const [upData, setUpData] = useState([]);
    const [smsData, setSmsData] = useState([]);

    const remainingPur = purchaseData.filter(data => data.status === "Success");
    const remainingAll = upData.filter(data => data.status === "approve");
    const remaining = upData.filter(data => data.status === "pending");
    const remainingAllData = remainingAll.slice(0, 3);
    const remainingData = remaining.slice(0, 3);
    const remainingUsers = usersData.slice(0, 3);

    useEffect(() => {
        axios.get('https://rokomari-server.vercel.app/users')
            .then(res => {
                setUsersData(res.data);
            });
    }, []);

    useEffect(() => {
        axios.get('https://rokomari-server.vercel.app/products')
            .then(res => {
                setUpData(res.data);
            });
    }, []);

    useEffect(() => {
        axios.get('https://rokomari-server.vercel.app/payments')
            .then(res => {
                setPurchaseData(res.data);
            });
    }, []);

    useEffect(() => {
        fetch('https://rokomari-server.vercel.app/sms')
            .then(res => res.json())
            .then((data) => setSmsData(data))
    }, [smsData]);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => (error))
    };

    const handleSubmitSms = event => {
        event.preventDefault();
        const form = event.target;
        const smsData = form?.sms?.value;
        const reset = form.reset();

        const addSms = {
            smsText: smsData,
            senderName: user?.displayName,
            senderEmail: user?.email,
            senderPhoto: user?.photoURL,
            status: "user"
        }

        axios.post('https://rokomari-server.vercel.app/sms', addSms)
            .then(data => {
                if (data?.data?.insertedId) {
                    reset;
                }
            })
    }

    // sms //

    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const chatBoxRef = useRef(null);

    const handleSendMessage = () => {
        if (input.trim()) {
            setMessages([...messages, { text: input, sender: 'user' }]);
            setInput('');
            setTimeout(() => {
                setMessages((prevMessages) => [
                    ...prevMessages,
                    { text: 'Bot response to: ' + input, sender: 'bot' },
                ]);
            }, 1000);
        }
    };

    // Scroll to the bottom when a new message is added
    useEffect(() => {
        chatBoxRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

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
                        <div className='col-span-2 bg-white shadow-xl rounded-xl p-4 h-[454px] overflow-hidden'>
                            <div className='flex justify-between items-center'>
                                <h1 className='text-2xl font-serif'>Upcoming Products :--- ({remaining?.length})</h1>
                                <Link to='/manageProduct'>
                                    <h1 className='border-2 py-1 px-6 rounded-md'>SEE MORE</h1>
                                </Link>
                            </div>
                            <div className="overflow-x-auto mt-10">
                                <table className="table">
                                    <tbody>
                                        {/* row 1 */}
                                        {
                                            remainingData?.map(d =>
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
                                                                <h2 className="text-base w-96">{d?.name}</h2>
                                                                <h2 className="text-sm mt-2">{d?.by}</h2>
                                                                {
                                                                    user ? <img className="disabled mt-4 w-4 h-4" src="/icon/icon_trash.png" alt="" /> :
                                                                        <img className="mt-4 w-4 h-4" src="/icon/icon_trash.png" alt="" />
                                                                }
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
                                <div className="stat-value text-primary">{remainingPur?.length}.3 K</div>
                                <div className="stat-desc text-lg text-black font-medium">Our Achievement</div>
                            </div>
                            <div className="stat bg-white shadow-xl rounded-xl mt-6 h-[300px]">
                                <div className='flex justify-between items-center'>
                                    <h1 className='text-2xl font-serif'>Members :---</h1>
                                    <Link to='/users'>
                                        <h1 className='border-2 py-1 px-6 rounded-md'>SEE MORE</h1>
                                    </Link>
                                </div>
                                <div className="overflow-x-hidden mt-10">
                                    <table className="table">
                                        <tbody>
                                            {/* row 1 */}
                                            {
                                                remainingUsers?.map(d =>
                                                    <tr key={d?._id} className="border-b border-[#d8d9dd]">
                                                        <td>
                                                            <div className="card card-side rounded-none gap-3">
                                                                <figure>
                                                                    <img
                                                                        className="w-9 h-9 rounded-full"
                                                                        src={d?.picture}
                                                                        alt="Movie" />
                                                                </figure>
                                                                <div>
                                                                    <h2 className="text-base w-96">{d?.name}</h2>
                                                                    <h2 className="text-sm mt-2">{d?.by}</h2>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                )
                                            }
                                        </tbody>
                                    </table>
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
                                        <th>Writer</th>
                                        <th>Publication</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {remainingAllData?.map((d, index) =>
                                        <tr key={d?._id} >
                                            <th>{index + 1}</th>
                                            <td>{d?.name}</td>
                                            <td>{d?.by}</td>
                                            <td>{d?.publication}</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className='h-[745px]'>
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

                    <div className='rounded-t-3xl mt-6'>
                        <div className='bg-blue-500 rounded-t-3xl h-9 pt-1 z-10'>
                            <h1 className='text-center text-white text-lg'>Chat with all members</h1>
                        </div>

                        {/* <div className='absolute bottom-96 h-[40%]'>
                            <div className='py-4 px-6'>
                                {
                                    smsData?.map(data => <div className='mt-2'>
                                        <h1 className='ms-4 text-xs'>{data?.senderName}</h1>
                                        <div className='flex items-center gap-2 w-72 mx-auto'>
                                            <img className='w-8 h-8 rounded-full' src={data?.senderPhoto} alt="" />
                                            <h1 className='bg-blue-500 mt-3 py-2 px-3 rounded-lg'>{data?.smsText}</h1>
                                        </div>
                                    </div>)
                                }
                            </div>
                        </div> */}
                        
                        <div className="flex flex-col h-[420px] rounded-b-3xl bg-gray-100 p-6">
                            <div className="flex-grow bg-white rounded-lg shadow-lg p-4 overflow-y-auto space-y-4">
                                {messages.map((message, index) => (
                                    <div
                                        key={index}
                                        className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'
                                            }`}
                                    >
                                        <div
                                            className={`max-w-xs p-2 rounded-lg text-white ${message.sender === 'user'
                                                ? 'bg-blue-500'
                                                : 'bg-gray-400'
                                                }`}
                                        >
                                            {message.text}
                                        </div>
                                    </div>
                                ))}
                                <div ref={chatBoxRef}></div>
                            </div>
                            <div className="mt-4 flex">
                                <input
                                    type="text"
                                    className="flex-grow border border-gray-300 rounded-lg p-2 mr-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    placeholder="Type a message..."
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                                />
                                <button
                                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    onClick={handleSendMessage}
                                >
                                    Send
                                </button>
                            </div>
                        </div>



                        {/* <div className='bg-blue-500 rounded-b-3xl h-20 absolute w-full -bottom-16'>
                            <div className='w-full h-full flex justify-center items-center gap-3'>
                                <button onClick={() => document.getElementById('my_modal_1').showModal()}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                                </button>

                                <Form onSubmit={handleSubmitSms}>
                                    <div className="join px-2">
                                        <input
                                            type="text"
                                            name='sms'
                                            required
                                            placeholder="message........."
                                            className="input input-bordered w-[100%] join-item" />
                                        <button className="btn btn-primary border-none join-item">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                                            </svg>
                                        </button>
                                    </div>
                                </Form>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DashBoardHome;