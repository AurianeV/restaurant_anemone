import Navbar from "../../components/header/Navbar"
import CarteBrunch from "../../components/CarteBrunch"

function Brunch ({navbarProps}) {

    return (
        <>
        <Navbar {...navbarProps}/>
        <CarteBrunch/>

        </>
    )
}

export default Brunch