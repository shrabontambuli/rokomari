import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Form, Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import axios from "axios";


const LogIn = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signIn, googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [showPassword, setShowPassword] = useState(false);

    const from = location.state?.from?.pathname || '/';

    const onSubmit = data => {
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                navigate(from, { replace: true })
                console.log(user);
            })
            .catch(err => console.log(err))
        console.log(data);
    }

    // googleSignIn //

    const handleGoogle = () => {
        googleSignIn()
            .then(result => {
                const loggedInUser = result.user;
                const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email }
                axios.post('http://localhost:5000/users', saveUser)
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
                <div className="card w-5/12 shadow-2xl shadow-black">
                    <img className="h-36 w-36 mx-auto rounded-3xl mt-6" src="/images/male.png" alt="" />

                    <Form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Email</span>
                            </label>
                            <input type="text" {...register("email", { required: true })} placeholder="email"
                                name="email" className="input input-bordered border-2 bg-transparent" />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text text-white">Password</span>
                            </label>
                            <input type={showPassword ? 'text' : 'password'} {...register("password", {
                                required: true,
                                minLength: 6,
                                maxLength: 20,
                                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/
                            })} placeholder="password"
                                name="password" className="input input-bordered bg-transparent" />
                            <span
                                className="absolute top-2/4 right-3 transform -translate-y-1/2 cursor-pointer"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {
                                    showPassword ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                        < path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                                    </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    </svg>
                                }
                            </span>
                            {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                            {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase and one special character </p>}
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover text-white mt-2">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-accent text-lg">Sign In</button>
                        </div>
                        <p className="mt-4 text-white text-center"><Link className="underline text-accent font-semibold" to='/signUp'>Sign Up</Link> ! for new account</p>
                        <hr className="mt-6" />

                        <button onClick={handleGoogle} className=" mt-6 btn btn-outline btn-accent mx-auto text-base">Continue with Google</button>
                    </Form>
                </div>
            </div >
        </div >
    );
};

export default LogIn;