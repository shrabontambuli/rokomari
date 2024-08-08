import { Link } from "react-router-dom";


const View_Details = () => {
    return (
        <>
            <div className="flex w-full">
                <div className="bg-white flex gap-10 p-6 w-full">
                    <div>
                        <div className="border w-80 h-[400px] flex-col p-10">
                            <img className="w-60 h-80" src="/images/Akhorpotro.jpg" alt="" />
                            <p className="text-right mt-1 font-mediums">2nd Edition, 2024</p>
                        </div>
                        <div className="flex items-center justify-center gap-1 mt-6">
                            <button className="bg-[#EBEBEB] w-40 py-2 font-medium">Want to read</button>

                            <button className="bg-[#EBEBEB] w-10 py-3 font-medium" onClick={() => document.getElementById('my_modal_3').showModal()}>
                                <img className="w-4 h-4 mx-auto" src="/icon/down-arrow.png" alt="" />
                            </button>
                            <dialog id="my_modal_3" className="modal">
                                <div className="modal-box">
                                    <form method="dialog">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                    </form>
                                    <h3 className="font-bold text-lg">Hello!</h3>
                                    <p className="py-4">Press ESC key or click on ✕ button to close</p>
                                </div>
                            </dialog>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h1 className="text-3xl font-light">ফিন্যান্স, ব্যাংকিং ও বিমা দ্বিতীয় পত্র (একাদশ-দ্বাদশ শ্রেণি) (পেপারব্যাক)</h1>
                            <p className="text-base text-blue-500 font-light mt-4"><span className="font-medium text-black">by</span> গুলশান আরা ,  শাহাদাত হোসেন ,  শিরীন আক্তার ,  ফারহানা জেসমিন</p>
                            <p className="text-base text-blue-500 font-light mt-4"><span className="font-medium text-black">Category:</span> এইচএসসি ২য় বর্ষ: ফিন্যান্স, ব্যাংকিং ও বিমা পাঠ্য বই</p>
                            <h1 className="text-2xl font-medium mt-4">TK. 460</h1>
                            <div className="text-base mt-4">
                                <div className="flex items-center gap-2">
                                    <img src="/icon/tik.svg" alt="" />
                                    <p>In Stock
                                        (only 2 copies left)</p>
                                </div>
                                <p className="mt-2">* স্টক আউট হওয়ার আগেই অর্ডার করুন</p>
                            </div>
                            <div className="flex items-center gap-2 mt-6 bg-[#f1fff1] border border-[#33c24d] w-6/12 p-4 rounded-xl font-medium">
                                <img src="/icon/bass.svg" alt="" />
                                <p>InApp extra 3% off, use promocode: APPUSER </p>
                            </div>
                            <div>
                                <div className="mt-6 flex items-center gap-16">
                                    <div className="text-center">
                                        <div className="stat-title text-black ">Book Length</div>
                                        <img className="mx-auto mt-3" src="/icon/page.svg" alt="" />
                                        <div className="stat-desc mt-3 text-black font-medium">768 Pages</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="stat-title text-black">Edition</div>
                                        <img className="mx-auto mt-3" src="/icon/edit.svg" alt="" />
                                        <div className="stat-desc mt-3 text-black font-medium">2023</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="stat-title text-black">Publication</div>
                                        <img className="mx-auto mt-3" src="/icon/publication.svg" alt="" />
                                        <div className="stat-desc mt-3 text-black font-medium text-base">অক্ষরপত্র প্রকাশনী</div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-base mt-8 bg-[#f1fff1] border border-[#33c24d] w-8/12 p-4 rounded-xl">
                                <div className="flex items-center gap-2">
                                    <img src="/icon/tag-icon.png" alt="" />
                                    <p>ইংরেজি শেখার বইয়ে ৫% অতিরিক্ত ছাড়! FLUENT5 কোড ব্যবহারে</p>
                                </div>
                                <div tabIndex={0} role="button" className="flex items-center gap-2 m-1 text-sm text-blue-500">আরো দেখুন<img className="w-4 h-4" src="/icon/down-arrow.png" alt="" /></div>
                            </div>
                            <div className="flex items-center gap-8 mt-10">
                                <div className="flex items-center gap-3">
                                    <img src="/icon/money-hand.png" alt="" />
                                    <p className="text-sm">বই হাতে পেয়ে মূল্য পরিশোধের সুযোগ</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <img src="/icon/happy-return-new.png" alt="" />
                                    <p className="text-sm">৭ দিনের মধ্যে পরিবর্তনের সুযোগ</p>
                                </div>
                            </div>
                            <div className="mt-10 flex items-center gap-4">
                                {/* <button className="border border-[#33c24d] hover:bg-[#33c24d] hover:text-white transition-all text-[#33c24d] text-sm px-8 py-4"> একটু পড়ে দেখুন</button> */}

                                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                                <button className="border border-[#33c24d] hover:bg-[#33c24d] hover:text-white transition-all text-[#33c24d] text-sm px-8 py-4" onClick={() => document.getElementById('my_modal_4').showModal()}>একটু পড়ে দেখুন</button>
                                <dialog id="my_modal_4" className="modal">
                                    <div className="modal-box w-11/12 max-w-5xl">
                                        <h3 className="font-bold text-lg">Hello!</h3>
                                        <p className="py-4">Click the button below to close</p>
                                        <div className="modal-action">
                                            <form method="dialog">
                                                {/* if there is a button, it will close the modal */}
                                                <button className="btn">Close</button>
                                            </form>
                                        </div>
                                    </div>
                                </dialog>

                                <Link to="/addCart">
                                    <button className="bg-blue-500 text-white px-8 py-4 flex items-center gap-3">
                                        <img src="/icon/cart-mini.svg" alt="" />
                                        Add To Cart</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-[#f6f6f6] w-96 p-6">
                    <div>
                        <h1 className="text-xl">Related Products</h1>
                    </div>
                    <div className="card card-side rounded-none border-b-2 pb-4 mt-6 gap-2">
                        <figure>
                            <img
                                className="w-44 h-36"
                                src="/images/Finance_Banking.jpg"
                                alt="Movie" />
                        </figure>
                        <div className="">
                            <h2 className="text-xs"> ফিল্যান্স, ব্যাংকিং ও বিমা - দ্বিতীয় পত্র ( ব্যাংকিং ও বিমা )</h2>
                            <h2 className="text-sm mt-2">মুহাম্মদ আসলাম খালেদ</h2>
                            <div className="rating items-center gap-1 rating-sm mt-4">
                                <input type="radio" name="rating-6" className="mask mask-star bg-yellow-400" />
                                <input
                                    type="radio"
                                    name="rating-6"
                                    className="mask mask-star bg-yellow-400"
                                />
                                <input type="radio" name="rating-6" className="mask mask-star bg-yellow-400" />
                                <input type="radio" name="rating-6" className="mask mask-star bg-yellow-400" />
                                <input type="radio" name="rating-6" className="mask mask-star bg-yellow-400" />
                            </div>
                            <h1 className="text-xl font-medium">TK.38</h1>
                        </div>
                    </div>
                    <div className="card card-side rounded-none border-b-2 pb-4 mt-6 gap-2">
                        <figure>
                            <img
                                className="w-44 h-36"
                                src="/images/Finance_Banking.jpg"
                                alt="Movie" />
                        </figure>
                        <div className="">
                            <h2 className="text-xs"> ফিল্যান্স, ব্যাংকিং ও বিমা - দ্বিতীয় পত্র ( ব্যাংকিং ও বিমা )</h2>
                            <h2 className="text-sm mt-2">মুহাম্মদ আসলাম খালেদ</h2>
                            <div className="rating items-center gap-1 rating-sm mt-4">
                                <input type="radio" name="rating-6" className="mask mask-star bg-yellow-400" />
                                <input
                                    type="radio"
                                    name="rating-6"
                                    className="mask mask-star bg-yellow-400"
                                />
                                <input type="radio" name="rating-6" className="mask mask-star bg-yellow-400" />
                                <input type="radio" name="rating-6" className="mask mask-star bg-yellow-400" />
                                <input type="radio" name="rating-6" className="mask mask-star bg-yellow-400" />
                            </div>
                            <h1 className="text-xl font-medium">TK.38</h1>
                        </div>
                    </div>
                    <div className="card card-side rounded-none border-b-2 pb-4 mt-6 gap-2">
                        <figure>
                            <img
                                className="w-44 h-36"
                                src="/images/Finance_Banking.jpg"
                                alt="Movie" />
                        </figure>
                        <div className="">
                            <h2 className="text-xs"> ফিল্যান্স, ব্যাংকিং ও বিমা - দ্বিতীয় পত্র ( ব্যাংকিং ও বিমা )</h2>
                            <h2 className="text-sm mt-2">মুহাম্মদ আসলাম খালেদ</h2>
                            <div className="rating items-center gap-1 rating-sm mt-4">
                                <input type="radio" name="rating-6" className="mask mask-star bg-yellow-400" />
                                <input
                                    type="radio"
                                    name="rating-6"
                                    className="mask mask-star bg-yellow-400"
                                />
                                <input type="radio" name="rating-6" className="mask mask-star bg-yellow-400" />
                                <input type="radio" name="rating-6" className="mask mask-star bg-yellow-400" />
                                <input type="radio" name="rating-6" className="mask mask-star bg-yellow-400" />
                            </div>
                            <h1 className="text-xl font-medium">TK.38</h1>
                        </div>
                    </div>
                    <div className="card card-side rounded-none border-b-2 pb-4 mt-6 gap-2">
                        <figure>
                            <img
                                className="w-44 h-36"
                                src="/images/Finance_Banking.jpg"
                                alt="Movie" />
                        </figure>
                        <div className="">
                            <h2 className="text-xs"> ফিল্যান্স, ব্যাংকিং ও বিমা - দ্বিতীয় পত্র ( ব্যাংকিং ও বিমা )</h2>
                            <h2 className="text-sm mt-2">মুহাম্মদ আসলাম খালেদ</h2>
                            <div className="rating items-center gap-1 rating-sm mt-4">
                                <input type="radio" name="rating-6" className="mask mask-star bg-yellow-400" />
                                <input
                                    type="radio"
                                    name="rating-6"
                                    className="mask mask-star bg-yellow-400"
                                />
                                <input type="radio" name="rating-6" className="mask mask-star bg-yellow-400" />
                                <input type="radio" name="rating-6" className="mask mask-star bg-yellow-400" />
                                <input type="radio" name="rating-6" className="mask mask-star bg-yellow-400" />
                            </div>
                            <h1 className="text-xl font-medium">TK.38</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default View_Details;