import Navbar from "../../components/header/Navbar"
import CarteBoisson from "../../components/CarteBoisson"

function Boissons ({navbarProps}) {

    return (
        <>
        <Navbar {...navbarProps}/>
        <CarteBoisson/>

        </>
    )
}

export default Boissons