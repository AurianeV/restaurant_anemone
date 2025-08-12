import NavBar from '../components/header/NavBar'
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n/i18n'
import '../components/CountDown.scss'; 
import Event from '../components/events/Event'

export default function Events({ navbarProps }) {
    const { t } = useTranslation();

    const events = [
        {
            imgSrc: '/image_events/post_30MAI.jpeg',
            titleH3: 'AFTERWORK - Jeux de société',
            titleH4: 'Vendredi 30 mai, on lance notre tout premier Afterwork chez Anémone Café 🌙',
            description: `Le concept ? Une soirée chill entre ami·e·s (ou parfaits inconnus 😌) autour de bons jeux… et de bonnes choses à grignoter.<br></br>
            Ramène ton jeu préféré, pioche dans ceux des autres ou découvre les nôtres (on en mettra quelques-uns à dispo)<br></br>

            <strong>🍷 Choisis ta formule directement sur place :</strong>

            <ul>
                <li>• Boisson fraîche + planche (mixte ou veggie) - 17€</li>
                <li>• Verre de vin ou bière + planche (mixte ou veggie) - 19€</li>
            </ul>

            📲 Réserve ta place sur notre site (via <a href="https://bookings.zenchef.com/results?rid=374145">Zenchef</a>)  — aucune avance à régler, juste l’envie de jouer !<br></br>
            <strong>Places limitées, premiers arrivé·e·s, premiers servis </strong>
            `
        },
        {
            imgSrc: '/image_events/post_20juin.jpeg',
            titleH3: '🎶 Afterwork en musique chez Anémone Café 🎶',
            titleH4: '📅 Vendredi 20 juin – de 19h30 à 21h',
            description: `Un moment suspendu dans la semaine avec <a href="https://www.instagram.com/acno_officiel?igsh=MWEwMHNzd2s4ZnZ3cQ==" >@acno</a> & <a href="https://www.instagram.com/_margo.music?igsh=amF5bzd6d3p0bTkw">@margo</a> : guitare, voix, et émotions partagées dans une ambiance chaleureuse. ✨<br></br>
            Le combo parfait pour bien commencer le week-end 🎤🎸
            <br></br>            

            <strong>🍽️ Deux formules au choix  :</strong/>
            <br></br>
            <ul>
            <li>• Boisson fraîche + planche (mixte ou veggie) – 17€</li>
            <li>• <i>Verre de vin ou bière*</i> + planche (mixte ou veggie) -19€</li>
            </ul>
            🪑 Réserve ta place sur notre site (via <a href="https://bookings.zenchef.com/results?rid=374145">Zenchef</a>)<br></br>
            On vous attend pour un vendredi soir en toute simplicité, musique et gourmandise 💛<br></br>

            <i>*Pour rappel nous ne servons de l’alcool qu’en accompagnement du repas, merci de votre compréhension*</i>`
        },
        {
            imgSrc: '/image_events/post_25juin.jpeg',
            titleH3: '🧵 Atelier couture & goûter',
            titleH4: `📅 Mercredi 25 juin avec <a href="https://www.instagram.com/isecouture?igsh=anhpemJzM2tpY2Fm" > @isecouture </a>`,
            description: `Envie de te lancer dans la couture ou juste de passer un bon moment ?<br></br>
            On t’a préparé un petit atelier trop chouette pour t’initier à la couture et repartir avec ta toute première pièce cousue par toi-même 💪 <br></br>
            Et comme on fait rien à moitié chez Anémone, le tout est accompagné d’un goûter maison : <strong>une boisson + une douceur 😋</strong><br></br>
            🗓 Mercredi 25 juin<br></br>
            📍 <a href="https://www.anemonecafe.fr/prestashop/"><button > Réservation</button></a><br></br>
            🎟 Places limitées, comme toujours<br></br>
            Viens coudre, papoter, grignoter et repartir fièr·e comme tout de ce que t’as créé 💛`
        }
    ];

    return (
        <div>
            <NavBar {...navbarProps} />
            <div className="eventPage">
                <h2>{t('event.title')}</h2>
                <br />
                <p dangerouslySetInnerHTML={{ __html: t('event.text') }}></p>
            </div>
        </div>
    );
}
