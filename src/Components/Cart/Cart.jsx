import { Link } from "react-router-dom";


const Cart = () => {
    return (
        <div>
            <div>
                <img className="w-full" src="/images/desktop-cart-page-banner.webp" alt="" />
            </div>
            <div className="grid grid-cols-3 gap-14 mt-6">
                <div className="col-span-2">
                    <div className="bg-white border-2 flex justify-between items-center p-5">
                        <div className="flex items-center gap-2">
                            <label className="cursor-pointer label">
                                <input type="checkbox" className="checkbox checkbox-info" />
                            </label>
                            <h1 className="font-medium">Select All (4 Items)</h1>
                        </div>
                        <div className="flex items-center gap-3">
                            <h1 className="font-medium">Your Total:</h1>
                            <p className="text-red-500 line-through">3,400TK.</p>
                            <p className="text-green-500 font-medium">3,177TK.</p>
                        </div>
                    </div>
                    <div className="bg-[#FF981F0D] mt-6 border-2">
                        <div className="overflow-x-auto mt-4">
                            <table className="table">
                                <tbody>
                                    {/* row 1 */}
                                    <tr className="border-b border-[#d8d9dd]">
                                        <th>
                                            <label className="cursor-pointer label">
                                                <input type="checkbox" className="checkbox checkbox-info" />
                                            </label>
                                        </th>
                                        <td>
                                            <div className="card card-side rounded-none gap-3">
                                                <figure>
                                                    <img
                                                        className="w-28 h-40"
                                                        src="/images/Finance_Banking.jpg"
                                                        alt="Movie" />
                                                </figure>
                                                <div>
                                                    <h2 className="text-lg w-72"> ফিল্যান্স, ব্যাংকিং ও বিমা - দ্বিতীয় পত্র ( ব্যাংকিং ও বিমা )</h2>
                                                    <h2 className="text-sm mt-2">মুহাম্মদ আসলাম খালেদ</h2>
                                                    <Link to="/delete">
                                                        <img className="mt-4 w-6 h-7" src="/icon/icon_trash.png" alt="" />
                                                    </Link>
                                                    <h1 className="text-base text-red-500 mt-2">Only 16 copies available</h1>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="join items-center">
                                                <button className="px-4 py-1 bg-base-300 text-2xl">-</button>
                                                <h1 className="join-item bg-white px-5 py-2 text-base">22</h1>
                                                <button className="px-5 py-1 bg-base-300 text-2xl">+</button>
                                            </div>
                                        </td>
                                        <td className="text-xl font-medium">920 Tk.</td>
                                    </tr>
                                    <tr className="border-b border-[#d8d9dd]">
                                        <th>
                                            <label className="cursor-pointer label">
                                                <input type="checkbox" className="checkbox checkbox-info" />
                                            </label>
                                        </th>
                                        <td>
                                            <div className="card card-side rounded-none gap-3">
                                                <figure>
                                                    <img
                                                        className="w-28 h-40"
                                                        src="/images/Finance_Banking.jpg"
                                                        alt="Movie" />
                                                </figure>
                                                <div>
                                                    <h2 className="text-lg w-72"> ফিল্যান্স, ব্যাংকিং ও বিমা - দ্বিতীয় পত্র ( ব্যাংকিং ও বিমা )</h2>
                                                    <h2 className="text-sm mt-2">মুহাম্মদ আসলাম খালেদ</h2>
                                                    <Link to="/delete">
                                                        <img className="mt-4 w-6 h-7" src="/icon/icon_trash.png" alt="" />
                                                    </Link>
                                                    <h1 className="text-base text-red-500 mt-2">Only 16 copies available</h1>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="join items-center">
                                                <button className="px-4 py-1 bg-base-300 text-2xl">-</button>
                                                <h1 className="join-item bg-white px-5 py-2 text-base">22</h1>
                                                <button className="px-5 py-1 bg-base-300 text-2xl">+</button>
                                            </div>
                                        </td>
                                        <td className="text-xl font-medium">920 Tk.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="bg-white flex justify-center items-center gap-2 p-5 mt-6 border-2">
                        <img className="w-10" src="/icon/icons8-gift-48.png" alt="" />
                        <h1>আপনার প্রিয়জনকে উপহার দিতে <span className="text-[#87298F]">Order as a Gift</span> বাটনে ক্লিক করুন</h1>
                    </div>
                    <div className="bg-white text-center p-5 mt-6 border-2">
                        <p>Apply <span className="font-medium">Promo Code or Voucher Code</span> on the Shipping Page</p>
                        <div className="flex items-center justify-center gap-6 mt-4">
                            <Link to="/order">
                                <button className="border border-[#87298F] hover:bg-[#87298F] hover:text-white transition-all text-[#87298F] text-lg font-medium px-8 py-3">
                                    Order as a Gift
                                </button>
                            </Link>
                            <Link to="/checkOut">
                                <button className="bg-blue-500 border border-blue-600 text-white px-8 py-3 flex items-center text-lg gap-3 font-medium">
                                    Check Out
                                    <img className="w-6" src="/icon/icons8-right-arrow-60.png" alt="" />
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="bg-white border-2 py-6 px-8">
                        <div className="border-b-2">
                            <h1 className="text-2xl font-medium pb-3">Checkout Summary</h1>
                        </div>
                        <div className="mt-4 flex items-center justify-between border-b-2 border-dashed pb-2">
                            <p className="text-lg">Subtotal</p>
                            <p className="text-lg">3177Tk.</p>
                        </div>
                        <div className="mt-4 flex items-center justify-between border-b-2 border-dashed pb-2">
                            <p className="text-lg">Shipping</p>
                            <p className="text-lg">140Tk.</p>
                        </div>
                        <div className="mt-4 flex items-center justify-between border-b-2 border-dashed pb-2">
                            <p className="text-lg">Total</p>
                            <p className="text-lg">3317 Tk.</p>
                        </div>
                        <div className="mt-4 flex items-center justify-between border-b-2 border-dashed pb-2">
                            <h4 className="text-xl font-medium">Payable Total</h4>
                            <p className="text-xl font-medium">3317 Tk.</p>
                        </div>
                    </div>
                    <div className="bg-white border-2 py-6 px-8 mt-6">
                        <div className="flex items-center gap-4">
                            <img className="w-6 h-6" src="/icon/rok-icon-cod.svg" alt="" />
                            <h3 className="font-semibold">ক্যাশ অন ডেলিভারি</h3>
                        </div>
                        <div className="flex items-center gap-4 mt-6">
                            <img className="w-6 h-6" src="/icon/rok-icon-replacement.svg" alt="" />
                            <h3 className="font-semibold">৭ দিনের মধ্যে পণ্য ফেরত সুবিধা</h3>
                        </div>
                        <div className="flex items-center gap-4 mt-6">
                            <img className="w-6 h-6" src="/icon/rok-icon-purchase.svg" alt="" />
                            <h3 className="font-semibold">১০০% টাকা ফেরত গ্যারান্টি</h3>
                        </div>
                        <div className="flex items-center gap-4 mt-6">
                            <img className="w-6 h-6" src="/icon/rok-icon-moneyback.svg" alt="" />
                            <h3 className="font-semibold">অর্ডার করে পয়েন্টস জিতুন</h3>
                        </div>
                        <div className="flex items-center gap-4 mt-6">
                            <img className="w-6 h-6" src="/icon/rok-icon-original-product.svg" alt="" />
                            <h3 className="font-semibold">১০০% অরিজিনাল প্রোডাক্ট</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;