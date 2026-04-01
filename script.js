let tousLesProduits = [];
let genreActif = "";
const myUrl = "https://makerslab.em-lyon.com/dww/data/products.json";

// Fonction pour récupérer les données depuis l'URL, avec gestion des erreurs
const getData = async (doStuffs) => {
    try {
        const response = await fetch(myUrl);
        if (!response.ok) {
            throw new Error("Network response not ok :" + response.statusText);
        }
        const data = await response.json();
        doStuffs(data);
    } catch (error) {
        console.error("Problem occurend while getting your data" + error);
    }
};

// On récupère les données et on initialise l'affichage et les filtres
getData((data) => {
    // On parcourt chaque nom de marque (chaque clé) dans notre objet
    for (let nomMarque in data.items) {
        // On récupère le tableau des produits qui correspond à cette marque
        let listeProduits = data.items[nomMarque];
        // On passe sur chaque produit de cette liste un par un
        listeProduits.forEach((produit) => {
            // On lui ajoute une étiquette avec le nom de sa marque
            produit.brandKey = nomMarque;
            // On l'ajoute à notre tableau global qui regroupe tout
            tousLesProduits.push(produit);
        });
    }
    // Affiche tous les produits au chargement de la page
    afficherProduits(tousLesProduits);

    // On prépare un tableau vide pour stocker nos tailles
    let toutesLesTailles = [];
    // On parcourt tous les produits un par un
    tousLesProduits.forEach((produit) => {

        // On vérifie que le produit a bien des disponibilités renseignées
        if (produit.availability) {

            // On parcourt les disponibilités de ce produit en particulier
            produit.availability.forEach((dispo) => {
                let taille = dispo.size;

                // Si notre tableau final ne contient pas encore cette taille, on l'ajoute
                if (!toutesLesTailles.includes(taille)) {
                    toutesLesTailles.push(taille);
                }
            });
        }
    });

    // On trie notre tableau de tailles par ordre croissant
    toutesLesTailles.sort((a, b) => a - b);
    
    // On crée les éléments HTML pour chaque taille et on les remplit
    const sizesGrid = document.querySelector(".sizes-grid");

    toutesLesTailles.forEach((taille) => {
        // On crée l'élément label
        const label = document.createElement("label");
        label.className = "filter-option size-option";
        label.innerHTML = `<input type="checkbox" value="${taille}"> ${taille}`;
        
        // On ajoute ce label à la grille des tailles
        sizesGrid.appendChild(label);

        // On ajoute un écouteur sur la case à cocher de ce label pour appliquer les filtres à chaque changement
        const caseACocher = label.querySelector("input");
        caseACocher.addEventListener("change", appliquerFiltres);
    });

    // Ajout des écouteurs sur les filtres
    document.querySelectorAll(".brands-filter input").forEach(cb => {
        cb.addEventListener("change", appliquerFiltres);
    });
    // Ajout des écouteurs sur les options de tri
    document.querySelectorAll('input[name="sort"]').forEach(radio => {
        radio.addEventListener("change", appliquerFiltres);
    });
    // Ajout des écouteurs sur les liens de navigation
    document.querySelectorAll(".nav-links li").forEach(lien => {
        lien.addEventListener("click", () => {
            document.querySelectorAll(".nav-links li").forEach(l => l.classList.remove("active"));
            lien.classList.add("active");
            // On met à jour le genre actif en fonction du lien cliqué
            const texte = lien.textContent;
            if (texte === "Men") genreActif = "MEN";
            else if (texte === "Women") genreActif = "WOMEN";
            else genreActif = ""; // On a rien pour Kids ni pour Deals, donc on affiche tout
            // On applique les filtres à chaque clic sur un lien de navigation
            appliquerFiltres();
        });
    });

});

// Fonction pour afficher une liste de produits dans la grille, et mettre à jour le compteur de résultats
const afficherProduits = (liste) => {
    const grille = document.querySelector(".product-grid");
    const compteur = document.getElementById("results-count");
    // On vide la grille avant d'afficher les produits (sinon on les empile à chaque fois)
    grille.innerHTML = "";
    // On crée une carte pour chaque produit et on l'ajoute à la grille
    liste.forEach((produit) => {
        const carte = document.createElement("div");
        carte.className = "product-card";
        const taillesDisponibles = produit.availability
            ? produit.availability
                .filter(a => a.quantity > 0)
                .map(a => `<span class="size-badge">${a.size}</span>`)
                .join('')
            : '';
        carte.innerHTML = `
            <div class="product-image-container">
                <img src="${produit.image}" alt="${produit.name}" class="product-image">
                <button class="wishlist-btn">
                    <i data-lucide="heart"></i>
                </button>
            </div>
            <div class="product-info">
                <span class="product-brand">${produit.brand}</span>
                <h3 class="product-name">${produit.name}</h3>
                <span class="product-price">${produit.price.toFixed(2)} €</span>
                ${taillesDisponibles ? `<div class="product-sizes">${taillesDisponibles}</div>` : ''}
            </div>
        `;
        grille.appendChild(carte);
    });
    // Mise à jour du compteur de résultats
    compteur.textContent = `${liste.length} résultats`;
    lucide.createIcons();
};

// Fonction pour appliquer les filtres sélectionnés et afficher les produits correspondants
const appliquerFiltres = () => {
    let resultat = tousLesProduits;

    // Filtre par genre (Men / Women) si c'est Kids ou Deals on affiche tout, donc genreActif = "")
    if (genreActif !== "") {
        resultat = resultat.filter(p => p.gender === genreActif);
    }

    // Filtre par marques cochées (si aucune cochée on affiche tout)
    const marquesChoisies = Array.from(document.querySelectorAll(".brands-filter input:checked"))
        .map(cb => cb.value);
    // Si au moins une marque est cochée, on filtre pour n'afficher que les produits de ces marques
    if (marquesChoisies.length > 0) {
        resultat = resultat.filter(p => marquesChoisies.includes(p.brandKey));
    }

    // Filtre par tailles cochées (si aucune cochée on affiche tout)
    const taillesChoisies = Array.from(document.querySelectorAll(".sizes-filter input:checked"))
        .map(cb => Number(cb.value));
    // Si au moins une taille est cochée, on filtre pour n'afficher que les produits disponibles dans ces tailles
    if (taillesChoisies.length > 0) {
        resultat = resultat.filter(p =>
            p.availability && p.availability.some(a => taillesChoisies.includes(a.size) && a.quantity > 0)
        );
    }

    // Tri par prix selon l'option choisie (si aucune option choisie, on garde l'ordre d'origine)
    const triSelectionne = document.querySelector('input[name="sort"]:checked').value;
    if (triSelectionne === "low-high") {
        resultat = [...resultat].sort((a, b) => a.price - b.price);
    } else if (triSelectionne === "high-low") {
        resultat = [...resultat].sort((a, b) => b.price - a.price);
    }
    // On affiche les produits résultants
    afficherProduits(resultat);
};