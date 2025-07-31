
        // Exemple de messages reçus (à remplacer par vos données réelles)
        const messages = [
            { nom: "Jean Dupont", email: "jean@example.com", message: "Bonjour, je souhaite réserver.", date: "2025-07-31" },
            { nom: "Marie Curie", email: "marie@example.com", message: "Avez-vous des disponibilités ?", date: "2025-07-30" }
        ];

        const tbody = document.querySelector('.messages-table tbody');
        messages.forEach(msg => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${msg.nom}</td>
                <td>${msg.email}</td>
                <td>${msg.message}</td>
                <td>${msg.date}</td>
            `;
            tbody.appendChild(tr);
        });