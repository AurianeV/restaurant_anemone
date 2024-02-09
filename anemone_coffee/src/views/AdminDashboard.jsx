// AdminDashboard.jsx

import ReservationsList from '../components/admin/ReservationsList'
import AdminProfile from '../components/admin/AdminProfile'

const AdminDashboard = () => {
  

  return (
    <div>
      <h2>Réservations</h2>
      <ReservationsList/>
      <AdminProfile/>
    </div>
  );
};

export default AdminDashboard;
