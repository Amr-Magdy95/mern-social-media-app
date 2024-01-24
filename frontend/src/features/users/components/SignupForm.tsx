
const SignupForm = () => {
    return (
        <div className="form-container">
            <h1 className="form-heading">Create an Account</h1>
            <form className="form">
                <label htmlFor="firstname">Firstname
                </label>
                <input type="text" id="firstname" className="form-input" placeholder=" John" />

                <label htmlFor="lastname"  >Lastname
                </label>
                <input type="text" id="lastname" className="form-input" placeholder="Doe" />
                <label htmlFor="email">Email
                </label>
                <input type="email" id="email" className="form-input" placeholder="johndoe@email.com" />
                <label htmlFor="password">Password
                </label>
                <input type="password" name="" id="password" className="form-input" placeholder="Password" />
                <button className="form-button">Sign Up</button>
            </form>
            <hr className="my-4 font-bold" />
            <p>Have an account?! <span>Signin</span></p>
        </div>
    )
}

export default SignupForm