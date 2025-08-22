// Ajout dynamique d'un groupe article/quantité
document.getElementById('ajouter_produit').addEventListener('click', function() {
    const container = document.getElementById('produit-container');
    const group = document.createElement('div');
    group.className = 'produit-group';
    group.innerHTML = `
        <input type="text" name="produit[]" placeholder="Produit">
        <input type="text" name="quantite[]" placeholder="Quantité / Prix">
    `;
    container.appendChild(group);
});