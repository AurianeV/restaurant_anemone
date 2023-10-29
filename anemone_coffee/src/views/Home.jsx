import NavBar from '../components/header/NavBar'

function Home({ navbarProps }) {
    return (
        <div>
            <NavBar {...navbarProps} />
        </div>
    );
}

export default Home;