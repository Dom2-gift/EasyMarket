const messages = [
            { Nom, email: "jean@example.com", message: "Bonjour, je souhaite réserver.", date: "2025-07-31" },
            { nom: "Marie Curie", email: "marie@example.com", message: "Avez-vous des disponibilités ?", date: "2025-07-30" }
        ];

        const tbody = document.querySelector('.messages-table tbody');
        messages.forEach(msg => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${msg.Nom}</td>
                <td>${msg.email}</td>
                <td>${msg.message}</td>
                <td>${msg.date}</td>
            `;
            tbody.appendChild(tr);
        });


const Nom = document.getElementById("nom")
const Numero = document.getElementById("numero")
const Produit = document.getElementById("produit")
const Quantite = document.getElementById("quantite")
const Date = document.getElementById("date")
const Remarque = document.getElementById("message")


