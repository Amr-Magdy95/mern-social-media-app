import { useForm, SubmitHandler } from "react-hook-form"
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../../app/hooks";
import { userSignin } from "../userSlice";
import { displayToast } from "../../toast/toastSlice";

export type SigninFormTypes = {
    email: string,
    password: string
}
const SigninForm = () => {
    const dispatch = useAppDispatch();
    const { register, handleSubmit, watch, formState: { errors } } = useForm<SigninFormTypes>();
    const onSubmit: SubmitHandler<SigninFormTypes> = async (data) => {
        try {
            const response = await dispatch(userSignin(data)).unwrap();
            dispatch(displayToast({ show: true, message: `User ${response.email} signed in!`, success: response.success }));
        } catch (err: any) {
            dispatch(displayToast({ show: true, message: err.message, success: false }));
        }
    }
    return (
        <div className="form-container ">
            <h1 className="form-heading">Create an Account</h1>
            <form className="form" onSubmit={handleSubmit(onSubmit)}>

                {/* Email  */}
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


                <button className="form-button">Sign In</button>
            </form>
            <hr className="my-4 font-bold" />
            <p>Need an account?! <Link to="/register" className="text-blue-700">Signup</Link></p>
        </div>
    )
}

export default SigninForm