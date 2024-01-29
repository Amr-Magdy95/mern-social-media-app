import { useForm, SubmitHandler } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { instance as axios } from "../../../axios/axios";
import { registerUser } from "../userSlice";

export type RegisterFormTypes = {
    firstName: string,
    lastName: string,
    email: string,
    password: string
}
const SignupForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormTypes>();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const onSubmit: SubmitHandler<RegisterFormTypes> = async (data) => {
        try {
            dispatch(registerUser(data));
            navigate("/signin");
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div className="form-container">
            <h1 className="form-heading">Create an Account</h1>
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                {/* First Name  */}
                <label htmlFor="firstname">Firstname
                </label>
                <input
                    type="text"
                    id="firstname"
                    {...register("firstName", {
                        required: "This field is required",
                        minLength: { value: 3, message: "must be 3 chars or more " },
                        maxLength: { value: 20, message: "must be 20 chars or less" }
                    })}
                    className="form-input"
                    placeholder=" John" />
                <p className="text-red-700">{errors.firstName?.message}</p>

                {/* Last Name  */}
                <label htmlFor="lastname"  >Lastname
                </label>
                <input
                    type="text"
                    id="lastname"
                    {...register("lastName", {
                        required: "This field is required",
                        minLength: { value: 3, message: "must be 3 chars or more " },
                        maxLength: { value: 20, message: "must be 20 chars or less" }
                    })}
                    className="form-input"
                    placeholder="Doe" />

                {/* Email  */}
                <p className="text-red-700">{errors.lastName?.message}</p>
                <label htmlFor="email">Email
                </label>
                <input
                    type="email"
                    id="email"
                    className="form-input"
                    {...register("email", {
                        required: "This field is required",
                    })}
                    placeholder="johndoe@email.com" />
                <p className="text-red-700">{errors.email?.message}</p>

                {/* Password  */}
                <label htmlFor="password">Password
                </label>
                <input
                    type="password"
                    id="password"
                    className="form-input"
                    {...register("password", {
                        required: "This field is required",
                        minLength: { value: 8, message: "must be 3 chars or more " },
                        maxLength: { value: 20, message: "must be 20 chars or less" }
                    })}
                    placeholder="Password" />
                <p className="text-red-700">{errors.password?.message}</p>


                <button className="form-button">Sign Up</button>
            </form>
            <hr className="my-4 font-bold" />
            <p>Have an account?! <Link to="/signin" className="text-blue-700">Signin</Link></p>
        </div>
    )
}

export default SignupForm