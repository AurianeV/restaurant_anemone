import MentionsLegales from '../components/MentionsLegales'
import NavBar from '../components/header/Navbar'


function MentionLegale ({ navbarProps }) {

    return (
        <>
            <NavBar {...navbarProps}/>

            <MentionsLegales />
        </>
    )
}

export default MentionLegale