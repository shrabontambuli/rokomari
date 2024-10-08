import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Navber = () => {
    const { user, logOut } = useContext(AuthContext);
    const [search, setSearch] = useState(1);
    const [tabs, setTAbs] = useState(1);
    const [cartData, setCartData] = useState([]);

    const url = ('https://rokomari-server.vercel.app/selects')
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setCartData(data))
    }, [cartData])

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => (error))
    }

    const handleSearch = (e) => {
        setSearch(e);
    }
    const handleTab = (e) => {
        setTAbs(e);
    }
    return (
        <div className="bg-white border-b-2">
            <div className="container mx-auto">
                <div className="navbar bg-white fixed max-w-screen-2xl z-10 py-4">
                    <div className="flex-1 items-center gap-10">
                        <a>
                            <img className="w-32 h-11 ms-2"
                                alt="Tailwind CSS Navbar component"
                                src="/icon/rokomari_logo.png" />
                        </a>
                        <label className="input input-bordered border-blue-600 rounded-full flex items-center gap-2 w-10/12">
                            <div role="tablist" className="tabs tabs-boxed rounded-xl">
                                <a onClick={() => handleSearch(1)} role="tab" className={search === 1 ? 'tab bg-blue-600 text-white' : 'tab'}>Books</a>
                                <a onClick={() => handleSearch(2)} role="tab" className={search === 2 ? 'tab bg-blue-600 text-white' : 'tab'}>Superstore</a>
                            </div>
                            <input type="text" className="grow ms-3" placeholder="Search by books and others" />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    fillRule="evenodd"
                                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                    clipRule="evenodd" />
                            </svg>
                        </label>
                    </div>
                    <div className="flex-none items-center gap-6">

                        <div className="flex items-center gap-4 border-e-2 pe-4">

                            {
                                user ? <button onClick={handleLogOut} className="btn shadow-none hover:bg-blue-500 hover:text-white text-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
                                    </svg>
                                </button> :
                                    <Link to="/signIn">
                                        <button className="btn bg-transparent border-none shadow-none hover:bg-blue-500 hover:text-white transition text-lg">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                            </svg>
                                            Sign in
                                        </button>
                                    </Link>
                            }


                            <div>
                                {
                                    user ?
                                        <Link to='/dashboard'>
                                            <div className="flex items-center gap-2 hover:text-blue-500" rel="stylesheet" href="" >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 37 37" fill="none">
                                                    <path d="M18.5003 34.8876C17.4674 34.8876 16.419 34.6564 15.602 34.1784L7.12284 29.2914C3.66951 26.9634 3.45367 26.6089 3.45367 22.9551V14.0443C3.45367 10.3905 3.65409 10.0359 7.04576 7.73887L15.5865 2.80553C17.2053 1.86512 19.749 1.86512 21.3678 2.80553L29.8778 7.70803C33.3311 10.0359 33.547 10.3905 33.547 14.0443V22.9397C33.547 26.5934 33.3465 26.948 29.9549 29.2451L21.414 34.1784C20.5815 34.6564 19.5332 34.8876 18.5003 34.8876ZM18.5003 4.42428C17.8528 4.42428 17.2207 4.54762 16.7736 4.8097L8.29451 9.7122C5.78159 11.408 5.78159 11.408 5.78159 14.0443V22.9397C5.78159 25.5759 5.78159 25.5759 8.35617 27.318L16.7736 32.1743C17.6832 32.6984 19.3328 32.6984 20.2424 32.1743L28.7215 27.2718C31.219 25.5759 31.219 25.5759 31.219 22.9397V14.0443C31.219 11.408 31.219 11.408 28.6445 9.66595L20.227 4.8097C19.7799 4.54762 19.1478 4.42428 18.5003 4.42428Z" fill="black" />
                                                    <path d="M18.5 24.2812C15.3088 24.2812 12.7188 21.6912 12.7188 18.5C12.7188 15.3088 15.3088 12.7188 18.5 12.7188C21.6912 12.7188 24.2812 15.3088 24.2812 18.5C24.2812 21.6912 21.6912 24.2812 18.5 24.2812ZM18.5 15.0312C16.5883 15.0312 15.0312 16.5883 15.0312 18.5C15.0312 20.4117 16.5883 21.9688 18.5 21.9688C20.4117 21.9688 21.9688 20.4117 21.9688 18.5C21.9688 16.5883 20.4117 15.0312 18.5 15.0312Z" fill="black" />
                                                </svg>
                                                Dashboard
                                            </div>
                                        </Link>
                                        :
                                        <div className="flex items-center gap-2 hover:text-blue-500" rel="stylesheet" href="" >
                                            <img src="/icon/become-seller-.svg" alt="" />
                                            Become A Saller
                                        </div>
                                }
                            </div>
                            {
                                user ? <div className="w-10 rounded-full">
                                    <img
                                        className="w-10 rounded-full"
                                        alt="img"
                                        src={user?.photoURL} />
                                </div>: <></>
                            }
                        </div>

                        <div className="dropdown dropdown-end">
                            <NavLink to="/addCart">
                                <div className="relative tooltip tooltip-bottom me-10" data-tip="Cart">
                                    <div className="absolute -top-3 badge badge-secondary">+{cartData?.length}</div>
                                    <img src="/icon/cartv2.svg" alt="" />
                                </div>
                            </NavLink>

                        </div>
                    </div>
                </div>

                <div className="pt-24">
                    <div role="tablist" className="tabs tabs-lifted">
                        <Link to="/" onClick={() => handleTab(1)} role="tab" className={tabs === 1 ? 'tab tab-active text-lg' : 'tab text-lg'}>বই</Link>
                        <Link to="/electronic" onClick={() => handleTab(2)} role="tab" className={tabs === 2 ? 'tab tab-active text-lg' : 'tab text-lg'}>ইলেক্ট্রনিক্স</Link>
                        <Link to="/super" onClick={() => handleTab(3)} role="tab" className={tabs === 3 ? 'tab tab-active text-lg' : 'tab text-lg'}>সুপার স্টোর</Link>
                        <Link to="/kids" onClick={() => handleTab(4)} role="tab" className={tabs === 4 ? 'tab tab-active text-lg' : 'tab text-lg'}>কিডস জোন</Link>
                        <Link to="/gift" onClick={() => handleTab(5)} role="tab" className={tabs === 5 ? 'tab tab-active text-lg' : 'tab text-lg'}>গিফট ফাইন্ডার</Link>
                        <Link to="/income" onClick={() => handleTab(6)} role="tab" className={tabs === 6 ? 'tab tab-active text-lg' : 'tab text-lg'}>ঘরে বসে আয় করুন</Link>
                        <Link to="/offers" onClick={() => handleTab(7)} role="tab" className={tabs === 7 ? 'tab tab-active text-lg' : 'tab text-lg'}>অফার সমূহ</Link>
                        <Link to="/academic" onClick={() => handleTab(8)} role="tab" className={tabs === 8 ? 'tab tab-active text-lg' : 'tab text-lg'}>প্রাতিষ্ঠানিক অর্ডার</Link>
                        <Link to="/quiz" onClick={() => handleTab(9)} role="tab" className={tabs === 9 ? 'tab tab-active text-lg' : 'tab text-lg'}>রকমারি কুইজ</Link>
                    </div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-10 justify-items-center items-center gap-3 my-7">
                    <div className="dropdown dropdown-hover">
                        <div tabIndex={0} role="button" className="flex items-center gap-2 m-1 text-sm">লেখক <img className="w-4 h-4 hover:rotate-180" src="/icon/down-arrow.png" alt="" /></div>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow mt-3">
                            <li><a>Item 1</a></li>
                            <li><a>Item 2</a></li>
                        </ul>
                    </div>
                    <div className="dropdown dropdown-hover">
                        <div tabIndex={0} role="button" className="flex items-center gap-2 m-1 text-sm">বিষয় <img className="w-4 h-4 hover:rotate-180" src="/icon/down-arrow.png" alt="" /></div>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow mt-3">
                            <li><a>Item 1</a></li>
                            <li><a>Item 2</a></li>
                        </ul>
                    </div>
                    <div className="dropdown dropdown-hover">
                        <div tabIndex={0} role="button" className="flex items-center gap-2 m-1 text-sm">প্রকাশনী <img className="w-4 h-4 hover:rotate-180" src="/icon/down-arrow.png" alt="" /></div>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow mt-3">
                            <li><a>Item 1</a></li>
                            <li><a>Item 2</a></li>
                        </ul>
                    </div>
                    <div className="dropdown dropdown-hover">
                        <div tabIndex={0} role="button" className="flex items-center gap-2 m-1 text-sm">বইমেলা ২০২৪</div>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow mt-3">
                            <li><a>Item 1</a></li>
                            <li><a>Item 2</a></li>
                        </ul>
                    </div>
                    <div className="dropdown dropdown-hover">
                        <div tabIndex={0} role="button" className="flex items-center gap-2 m-1 text-sm">ই-বুক</div>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow mt-3">
                            <li><a>Item 1</a></li>
                            <li><a>Item 2</a></li>
                        </ul>
                    </div>
                    <div className="dropdown dropdown-hover">
                        <div tabIndex={0} role="button" className="flex items-center gap-2 m-1 text-sm">HSC ও ভর্তি প্রস্তুতি <img className="w-4 h-4 hover:rotate-180" src="/icon/down-arrow.png" alt="" /></div>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow mt-3">
                            <li><a>Item 1</a></li>
                            <li><a>Item 2</a></li>
                        </ul>
                    </div>
                    <div className="dropdown dropdown-hover">
                        <div tabIndex={0} role="button" className="flex items-center gap-2 m-1 text-sm">ধর্মীয় বই</div>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow mt-3">
                            <li><a>Item 1</a></li>
                            <li><a>Item 2</a></li>
                        </ul>
                    </div>
                    <div className="dropdown dropdown-hover">
                        <div tabIndex={0} role="button" className="flex items-center gap-2 m-1 text-sm">ইংরেজি ভাষার বই</div>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow mt-3">
                            <li><a>Item 1</a></li>
                            <li><a>Item 2</a></li>
                        </ul>
                    </div>
                    <div className="dropdown dropdown-hover">
                        <div tabIndex={0} role="button" className="flex items-center gap-2 m-1 text-sm">পশ্চিমবঙ্গের বই</div>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow mt-3">
                            <li><a>Item 1</a></li>
                            <li><a>Item 2</a></li>
                        </ul>
                    </div>
                    <div className="dropdown dropdown-hover">
                        <div tabIndex={0} role="button" className="flex items-center gap-2 m-1 text-sm">অতিরিক্ত ছাড়ের বই</div>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow mt-3">
                            <li><a>Item 1</a></li>
                            <li><a>Item 2</a></li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Navber;