// AdminDashboard.jsx

import ReservationsList from '../components/admin/ReservationsList'
import AdminProfile from '../components/admin/AdminProfile'
import { useNavigate } from 'react-router-dom';


const AdminDashboard = ({isAuthenticated}) => {

  const navigate = useNavigate();

  if (!isAuthenticated) {
    // Si l'utilisateur n'est pas authentifié, redirigez-le vers la page de connexion ou une autre page
    navigate('/admin');
    return null;
  }

  return (
    <div>
      <h2>Réservations</h2>
      <ReservationsList/>
      {/*<AdminProfile/>*/}
    </div>
  );
};

export default AdminDashboard;
