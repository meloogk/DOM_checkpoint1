document.addEventListener("DOMContentLoaded", () => {
    // Sélection des éléments HTML
    const cartItems = document.querySelectorAll(".cart-item");
    const totalPriceElement = document.getElementById("total-price");

    // Fonction pour mettre à jour le prix total
    const updateTotalPrice = () => {
        let total = 0;
        cartItems.forEach(item => {
            const price = parseFloat(item.querySelector(".item-price").textContent);
            const quantity = parseInt(item.querySelector(".quantity-value").textContent);
            total += price * quantity;
        });
        totalPriceElement.textContent = total.toFixed(2);
    };

    // Événements pour ajuster la quantité
    cartItems.forEach(item => {
        const plusButton = item.querySelector(".plus-button");
        const minusButton = item.querySelector(".minus-button");
        const quantityElement = item.querySelector(".quantity-value");

        plusButton.addEventListener("click", () => {
            let quantity = parseInt(quantityElement.textContent);
            quantityElement.textContent = ++quantity;
            updateTotalPrice();
        });

        minusButton.addEventListener("click", () => {
            let quantity = parseInt(quantityElement.textContent);
            if (quantity > 1) {
                quantityElement.textContent = --quantity;
                updateTotalPrice();
            }
        });

        // Événement pour supprimer un article
        const deleteButton = item.querySelector(".delete-button");
        deleteButton.addEventListener("click", () => {
            item.remove();
            updateTotalPrice();
        });

        // Événement pour aimer un article
        const likeButton = item.querySelector(".like-button");
        likeButton.addEventListener("click", () => {
            likeButton.classList.toggle("liked"); // Change la couleur lorsqu'il est cliqué
        });
    });

    // Mise à jour initiale du prix total
    updateTotalPrice();
});
