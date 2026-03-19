import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ArticlesControles() {
  const [articles, setArticles] = useState([]);
  const [enCours, setEnCours] = useState(false);
  const [erreur, setErreur] = useState('');

  const chargerDonnees = () => {
    setEnCours(true);
    setErreur('');
    
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((reponse) => {
        setArticles(reponse.data);
        setEnCours(false);
      })
      .catch((err) => {
        setErreur('Échec du chargement');
        setEnCours(false);
      });
  };

  useEffect(() => {
    chargerDonnees();
  }, []);

  return (
    <div style={{ border: '2px solid orange', padding: '15px', margin: '10px' }}>
      <h2>Gestion des articles</h2>
      <button 
        onClick={chargerDonnees}
        disabled={enCours}
        style={{ padding: '8px 15px', marginBottom: '15px' }}
      >
        {enCours ? 'Chargement...' : 'Recharger les données'}
      </button>
      
      {erreur && <p style={{ color: 'red' }}>{erreur}</p>}
      
      {articles.length > 0 && (
        <div>
          <p>Nombre d'articles: {articles.length}</p>
          <select size="5" style={{ width: '100%' }}>
            {articles.slice(0, 10).map((item) => (
              <option key={item.id} value={item.id}>
                {item.title}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
}

export default ArticlesControles;