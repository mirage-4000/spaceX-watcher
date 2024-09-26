// Fonction pour récupérer la liste des fusées depuis l'API SpaceX
async function fetchRockets() {
    const response = await fetch('https://api.spacexdata.com/v4/rockets');
    const rockets = await response.json();

    const rocketList = document.getElementById('rocket-list');
    rocketList.innerHTML = ""; // On vide la liste avant d'ajouter les nouvelles données

    rockets.forEach(rocket => {
        const rocketElement = document.createElement('div');
        rocketElement.className = 'rocket-item';
        rocketElement.innerHTML = `
            <h3>${rocket.name}</h3>
            <p>Hauteur : ${rocket.height.meters} mètres</p>
            <p>Diamètre : ${rocket.diameter.meters} mètres</p>
            <p>Poussée : ${rocket.first_stage.thrust_sea_level.kN} kN</p>
            <p>Description : ${rocket.description}</p>
        `;
        rocketList.appendChild(rocketElement);
    });
}

// Appel de la fonction au chargement de la page des fusées
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('rocket-list')) {
        fetchRockets();
    }
});
