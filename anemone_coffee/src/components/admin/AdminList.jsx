import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminList = () => {
  const [admins, setAdmins] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAdmins = async () => {
      try {
        const response = await axios.get('/admin/admins');
        setAdmins(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des administrateurs :', error);
        setError('Une erreur s\'est produite lors de la récupération des administrateurs.');
      }
    };
    fetchAdmins();
  }, []);

  return (
    <div>
      <h2>Liste des administrateurs</h2>
      {error && <p>{error}</p>}
      {admins.length === 0 && <p>Aucun administrateur trouvé.</p>}
      <ul>
        {admins.map((admin) => (
          <li key={admin._id}>{admin.username}</li>
        ))}
      </ul>
    </div>
  );
};

export default AdminList;
