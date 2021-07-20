// import { useSelector } from "react-redux";

const LoginFormPage = () => {
    return (
        <form>
            <input type="text" name="userName"/>
            <input type="text" name="password"/>
            <button type='submit'>Login</button>
        </form>
    )
}

export default LoginFormPage;