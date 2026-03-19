import React, { useState, useEffect } from 'react';

function ProduitsFetch() {
  // Déclaration des états pour gérer les données, le chargement et les erreurs
  const [produits, setProduits] = useState([]);
  const [enChargement, setEnChargement] = useState(true);
  const [messageErreur, setMessageErreur] = useState('');

  // useEffect s'exécute automatiquement au chargement du composant
  useEffect(() => {
    // Requête vers l'API des pays francophones avec fetch()
    fetch('https://restcountries.com/v3.1/lang/french')
      .then((reponse) => {
        // Vérification que la réponse est valide
        if (!reponse.ok) {
          throw new Error('Problème de connexion');
        }
        return reponse.json();
      })
      .then((donnees) => {
        // Sauvegarde des données dans l'état produits.......
        setProduits(donnees);
        // Fin du chargement
        setEnChargement(false);
      })
      .catch((erreur) => {
        // Capture et affichage de l'erreur
        setMessageErreur(erreur.message);
        setEnChargement(false);
      });
  }, []); // Le tableau vide garantit une seule exécution,,,,,,,,

  // Affichage pendant le chargement
  if (enChargement) {
    return <div>Patientez, chargement des données...</div>;
  }

  // Affichage en cas d'erreur
  if (messageErreur) {
    return <div>Désolé, une erreur est survenue: {messageErreur}</div>;
  }

  // Rendu principal du composant
  return (
    <div style={{ border: '2px solid green', padding: '15px', margin: '10px' }}>
      <h2>Liste des pays francophones (Méthode Fetch)</h2>
      <ul>
        {produits.slice(0, 8).map((pays) => (
          <li key={pays.cca2}>
            <strong>{pays.name.common}</strong> - Capitale: {pays.capital ? pays.capital[0] : 'Non spécifiée'} 
            (Population: {pays.population.toLocaleString()} habitants)
          </li>
        ))}
      </ul>
      <p>Total des pays francophones: {produits.length}</p>
    </div>
  );
}

export default ProduitsFetch;