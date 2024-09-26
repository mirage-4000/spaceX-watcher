// Fichier : spacex-api.js

// Fonction pour récupérer les prochains lancements depuis l'API SpaceX
async function fetchUpcomingLaunches() {
    const response = await fetch('https://api.spacexdata.com/v4/launches/upcoming');
    const launches = await response.json();

    const launchList = document.getElementById('launch-list');
    launchList.innerHTML = ""; // On vide la liste avant d'ajouter les nouvelles données

    // Itération sur les lancements à venir pour créer des éléments HTML
    launches.forEach(launch => {
        const launchElement = document.createElement('div');
        launchElement.className = 'launch-item';
        launchElement.innerHTML = `
            <h3>${launch.name}</h3>
            <p>Date de lancement : ${new Date(launch.date_utc).toLocaleString()}</p>
            <p>Lieu : ${launch.launchpad}</p>
            <p>Fusée : ${launch.rocket}</p>
        `;
        launchList.appendChild(launchElement);
    });
}

// Appel de la fonction au chargement de la page
document.addEventListener('DOMContentLoaded', fetchUpcomingLaunches);
