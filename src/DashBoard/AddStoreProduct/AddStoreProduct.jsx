import React, { useState } from 'react';
import { Form } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import axios from 'axios';

const AddStoreProduct = () => {

    const [productImg, setProductImg] = useState();
    const [productName, setProductName] = useState("Product name");
    const { register, handleSubmit, reset } = useForm();

    const proImg = (e) => {
        const pImg = e.target.value;
        setProductImg(pImg);
        console.log(pImg);
    }
    const proName = (e) => {
        const pName = e.target.value;
        setProductName(pName);
        console.log(pName);
    }

    const onSubmit = data => {
        const addProduct = { name: data.name, by: data.by, category: data.category, price: data.price, stock: data.stock, page: data.page, print: data.print, edition: data.edition, publication: data.publication, product: data.product, picture: data.picture, sale_category: data.sale_category }

        axios.post('https://rokomari-server.vercel.app/products', addProduct)
            .then(data => {
                if (data?.data?.insertedId) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Added New Product',
                        showConfirmButton: true,
                        timer: 1500
                    })
                    reset();
                }
            })
    }

    return (
        <div className="w-11/12 mx-auto">
            <div className="hero min-h-screen">
                <div className="w-full">
                    <div className="font-serif font-semibold text-2xl px-8">
                        <h1 className="text-3xl font-serif font-bold text-white"> Add To Super Store Product : ---</h1>
                    </div>
                    <div className='flex justify-center items-start gap-10 mt-6'>
                        <Form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Product Image</span>
                                </label>

                                {/* <div className='flex items-center gap-4'>
                                    <input onChange={proImg} placeholder="product image url" type="file" {...register("image", { required: true })} className="file-input file-input-bordered file-input-primary bg-transparent w-full " />
                                    <button className='btn btn-outline btn-primary' onClick={() => handleImg()}>Ok</button>
                                </div> */}

                                <input type="text" {...register("picture", { required: true })} onChange={proImg} placeholder="product image url"
                                    className="input input-bordered dashC2" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Product Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} onChange={proName} placeholder="product name"
                                    name="name" className="input input-bordered dashC2" />
                            </div>
                            <div className='flex justify-between items-center gap-8'>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text text-white">By / Brand Name</span>
                                    </label>
                                    <input type="text" {...register("by", { required: true })} placeholder="by / brand name"
                                        className="input input-bordered dashC2" />
                                    {/* defaultValue={user?.displayName} */}
                                </div>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text text-white">Category</span>
                                    </label>
                                    <input type="text" {...register("category", { required: true })} placeholder="category"
                                        className="input input-bordered dashC2" />
                                    {/* defaultValue={user?.email} */}
                                </div>
                            </div>
                            <div className='flex justify-between items-center gap-8'>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text text-white">Price</span>
                                    </label>
                                    <input type="text" {...register("price", { required: true })} placeholder="price"
                                        className="input input-bordered dashC2" />
                                    {/* defaultValue={user?.displayName} */}
                                </div>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text text-white">Stock</span>
                                    </label>
                                    <input type="text" {...register("stock", { required: true })} placeholder="stock"
                                        className="input input-bordered dashC2" />
                                    {/* defaultValue={user?.email} */}
                                </div>
                            </div>
                            <div className='flex justify-between items-center gap-8'>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text text-white">Page</span>
                                    </label>
                                    <input type="text" {...register("page", { required: true })} placeholder="page"
                                        className="input input-bordered dashC2" />
                                    {/* defaultValue={user?.displayName} */}
                                </div>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text text-white">Print</span>
                                    </label>
                                    <input type="text" {...register("print", { required: true })} placeholder="print"
                                        className="input input-bordered dashC2" />
                                    {/* defaultValue={user?.email} */}
                                </div>
                            </div>
                            <div className='flex justify-between items-center gap-8'>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text text-white">Edition</span>
                                    </label>
                                    <input type="text" {...register("edition", { required: true })} placeholder="edition"
                                        className="input input-bordered dashC2" />
                                    {/* defaultValue={user?.displayName} */}
                                </div>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text text-white">Publication</span>
                                    </label>
                                    <input type="text" {...register("publication", { required: true })} placeholder="publication"
                                        className="input input-bordered dashC2" />
                                    {/* defaultValue={user?.email} */}
                                </div>
                            </div>
                            <div className='flex justify-between items-center gap-8'>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text text-white">Sale Category</span>
                                    </label>
                                    <select
                                        {...register("sale_category", { required: true })}
                                        className="select select-bordered dashC2 w-full">
                                        <option disabled selected>select one</option>
                                        <option>best_sale</option>
                                        <option>super_store</option>
                                    </select>
                                </div>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text text-white">Product</span>
                                    </label>
                                    <input type="text" {...register("product", { required: true })} placeholder="product"
                                        className="input input-bordered dashC2" />
                                    {/* defaultValue={user?.email} */}
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-outline bg-[#4d19bd] hover:bg-[#4d19bd]  text-white w-full">Add New Book</button>
                            </div>
                        </Form>
                        <div>
                            <div className='mt-16 rounded-sm border bg-white dashC p-6'>
                                <img className='w-56 h-80' src={productImg} alt="product image" />
                            </div>
                            <div className='text-center mt-4 py-2 rounded-3xl border bg-white dashC2'>
                                <h1 className='font-medium text-lg'>{productName}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddStoreProduct;