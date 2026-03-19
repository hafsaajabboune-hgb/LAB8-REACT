import React from 'react';
import ProduitsFetch from './ProduitsFetch';
import ClientsAxios from './ClientsAxios';
import './App.css';

function App() {
  return (
    <div className="conteneur-principal">
      {/* FR: Titre principal de l'application */}
      {/* EN: Main title of the application */}
      <h1 style={{ textAlign: 'center', color: '#333' }}>
        Découverte des API en React
      </h1>
      
      {/* FR: Sous-titre expliquant le but du TP */}
      {/* EN: Subtitle explaining the TP purpose */}
      <p style={{ textAlign: 'center', fontSize: '18px' }}>
        Comparaison entre fetch() et axios
      </p>
      
      {/* FR: Conteneur flexible pour afficher les deux composants côte à côte */}
      {/* EN: Flexible container to display both components side by side */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {/* FR: Composant utilisant fetch() pour les pays */}
        {/* EN: Component using fetch() for countries */}
        <ProduitsFetch />
        
        {/* FR: Composant utilisant axios pour les utilisateurs */}
        {/* EN: Component using axios for users */}
        <ClientsAxios />
      </div>
      
      {/* FR: Pied de page avec l'année dynamique */}
      {/* EN: Footer with dynamic year */}
      <footer style={{ textAlign: 'center', marginTop: '30px', color: '#777' }}>
        TP Consommation d'API - {new Date().getFullYear()}
      </footer>
    </div>
  );
}

export default App;