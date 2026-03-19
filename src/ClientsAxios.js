import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ClientsAxios() {
  // State declarations for clients data, loading status and errors
  const [clients, setClients] = useState([]);
  const [indicateurChargement, setIndicateurChargement] = useState(true);
  const [erreurServeur, setErreurServeur] = useState('');

  // useEffect hook runs when component mounts,,,,,,
  useEffect(() => {
    // Simulate API call with setTimeout......
    setTimeout(() => {
      // Custom user data array......
      const mesUtilisateurs = [
        { id: 1, name: 'Hafsa Ajab', email: 'hafsa.ajab@email.com', city: 'Casablanca', company: 'Maroc Telecom' },
        { id: 2, name: 'Youssef Esabihi', email: 'youssef.esabihi@email.com', city: 'Marrakech', company: 'Attijariwafa Bank' },
        { id: 3, name: 'Fatima Zahra Hassou', email: 'fatima.zahrahassou@email.com', city: 'Fès', company: 'ONCF' },
        { id: 4, name: 'Karim Hardizi', email: 'karim.hardizi@email.com', city: 'Tanger', company: 'Royal Air Maroc' },
        { id: 5, name: 'Assmae Mansouri', email: 'assmae.mansouri@email.com', city: 'Rabat', company: 'BMCE Bank' },
        { id: 6, name: 'Hicham Benali', email: 'hicham.benali@email.com', city: 'Agadir', company: 'OCP' },
        { id: 7, name: 'Amira Naksi', email: 'amira.naksi@email.com', city: 'Meknès', company: 'Marsa Maroc' },
        { id: 8, name: 'Omar Nazi', email: 'omar.nazi@email.com', city: 'Oujda', company: 'CDG' },
        { id: 9, name: 'Leila Alaoui', email: 'leila.alaoui@email.com', city: 'Tétouan', company: 'LafargeHolcim' },
        { id: 10, name: 'Mohamed El Khayar', email: 'mohamed.elkhayar@email.com', city: 'Safi', company: 'Managem' }
      ];
      
      // Update state with custom data
      setClients(mesUtilisateurs);
      // Loading finished
      setIndicateurChargement(false);
    }, 1000); // 1 second delay to simulate loading
  }, []); // Empty dependency array = runs once

  // Display loading message
  if (indicateurChargement) {
    return <div>Chargement des utilisateurs...</div>;
  }

  // Display error message if any
  if (erreurServeur) {
    return <div>Erreur: {erreurServeur}</div>;
  }

  // Main component render
  return (
    <div style={{ border: '2px solid blue', padding: '15px', margin: '10px' }}>
      <h2>Annuaire des utilisateurs (Bibliothèque Axios)</h2>
      <table border="1" cellPadding="8" style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Email</th>
            <th>Ville</th>
            <th>Entreprise</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((personne) => (
            <tr key={personne.id}>
              <td><strong>{personne.name}</strong></td>
              <td>{personne.email}</td>
              <td>{personne.city}</td>
              <td>{personne.company}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ClientsAxios;