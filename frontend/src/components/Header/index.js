import { Header } from "./Header";
import LoginSignup from "./LoginSignup";


const Navigation = ({isLoaded}) => {
    return(
        <>
        <Header/>
        <LoginSignup isLoaded={isLoaded}/>
        </>
    )
}

export default Navigation;