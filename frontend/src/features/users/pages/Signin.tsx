import SignHero from "../components/SignHero"
import SigninForm from "../components/SigninForm"
const Signin = () => {
    return (
        <section className="sign-section md:!flex-row-reverse">
            <SignHero />
            <SigninForm />
        </section>
    )
}

export default Signin