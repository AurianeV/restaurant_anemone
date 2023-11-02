import NavBar from '../components/header/NavBar'
import Sections from '../components/Sections'

export default function Home({ navbarProps }) {
    return (
        <div>
            <NavBar {...navbarProps} />
            <Sections
                text="Texte de la section 1."
                image="/coffee_shop.png"
                isTextOnLeft={true}
                linkPage="/page1" // Chemin de destination pour cette section
            />
            <Sections
                text="Texte de la section 2."
                image="/mug.png"
                isTextOnLeft={false}
                linkPage="/page2" // Chemin de destination pour cette section
            />
        </div>
    );
}

