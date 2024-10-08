import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Form, Link, useLocation, useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";
import axios from "axios";

const img_hosting_token = import.meta.env.VITE_Image_Upload_token;

const SignUp = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

    const onSubmit = data => {
        const formData = new FormData();
        console.log(formData);
        formData.append('image', data.image[0])
        axios.post(img_hosting_url, formData)
            .then(imgResponse => {
                console.log(imgResponse.data);
                if (imgResponse.data.success) {
                    const imgURL = imgResponse.data.display_url;
                    createUser(data.email, data.password)
                        .then((result) => {
                            const loggedUser = result.user;
                            navigate(from, { replace: true })
                            updateProfile(loggedUser, {
                                displayName: data.name, photoURL: imgURL
                            })
                            console.log(data)
                            const saveUser = { name: data.name, email: data.email }
                            axios.post('https://rokomari-server.vercel.app/users', saveUser)
                                .then(data => {
                                    if (data.data.insertedId) {
                                        reset();
                                        Swal.fire({
                                            position: 'center',
                                            icon: 'success',
                                            title: 'SignUp Success',
                                            showConfirmButton: false,
                                            timer: 1500
                                        })
                                    }
                                })

                        })
                        .catch((error) => {
                            return (error);

                        })
                }
            })

    }
    const handleGoogle = () => {
        googleSignIn()
            .then(result => {
                const loggedInUser = result.user;
                const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email }
                axios.post('https://rokomari-server.vercel.app/users', saveUser)
                    .then((data) => {
                        if (data.data.insertedId) {
                            navigate(from);
                        }
                    })
            })

    }

    return (
        <div className="hero min-h-screen dash">
            <div className="hero-content w-full">
                <div className="card w-6/12 shadow-2xl shadow-black">
                    <img className="h-36 w-36 mx-auto rounded-3xl mt-6" src="/images/male.png" alt="" />

                    <Form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Name</span>
                            </label>
                            <input type="text" {...register("name", { required: true })} placeholder="name"
                                name="name" className="input input-bordered bg-transparent" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Email</span>
                            </label>
                            <input type="text" {...register("email", { required: true })} placeholder="email"
                                name="email" className="input input-bordered bg-transparent" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Password</span>
                            </label>
                            <input type="password" {...register("password", {
                                required: true,
                                minLength: 6,
                                maxLength: 20,
                                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/
                            })}
                                placeholder="password"
                                name="password" className="input input-bordered bg-transparent" />
                            {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                            {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase and one special character </p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Confirm Password</span>
                            </label>
                            <input type="password" {...register("confirmPassword", {
                                required: true,
                                minLength: 6,
                                maxLength: 20,
                                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/
                            })}
                                placeholder="confirm password"
                                name="confirmPassword" className="input input-bordered bg-transparent" />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Photo Url</span>
                            </label>

                            <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered file-input-accent bg-transparent w-full " />

                            {/* <input
                                type="file"
                                name="photo"
                                className="file-input file-input-bordered file-input-accent w-full bg-transparent" /> */}

                            {/* <input type="text" {...register("photo", { required: true })} placeholder="photo"
                                name="photo" className="input input-bordered bg-transparent" /> */}
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-accent">SignUp</button>
                        </div>
                        <p className="mt-4 text-white text-center">Already have an account! <Link className="underline text-accent" to='/signIn'> Please Login</Link></p>
                        <button onClick={handleGoogle} className=" mt-2 btn btn-outline btn-accent mx-auto">Continue with Google</button>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;