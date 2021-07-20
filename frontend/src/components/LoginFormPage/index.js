import { useSelector } from "react-redux";

const LoginFormPage = () => {
    return (
        <form>
            <imput>Username</imput>
            <input>Password</input>
            <button type='submit'>Login</button>
        </form>
    )
}

export default LoginFormPage;