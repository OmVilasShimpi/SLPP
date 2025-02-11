// Fetch and display all petitions
function fetchPetitions() {
    fetch('/admin/view_petitions', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((response) => response.json())
        .then((data) => {
            const tableBody = document.getElementById("petitionsTableBody");
            tableBody.innerHTML = ""; // Clear existing rows
            data.petitions.forEach((petition) => {
                const row = `<tr>
                    <td>${petition.id}</td>
                    <td>${petition.title}</td>
                    <td>${petition.content}</td>
                    <td>${petition.status}</td>
                    <td>${petition.signatures}</td>
                    <td>
                        ${petition.status === "open"
                            ? `<button class="btn btn-sm btn-danger" onclick="closePetition(${petition.id})">Close</button>`
                            : "Closed"}
                    </td>
                </tr>`;
                tableBody.innerHTML += row;
            });
        })
        .catch((error) => console.error('Error fetching petitions:', error));
}

// Handle form submission for setting the signature threshold
document.getElementById("setThresholdForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const threshold = document.getElementById("threshold").value;

    fetch('/admin/set_threshold', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ threshold }),
    })
        .then((response) => response.json())
        .then((data) => {
            if (data.error) {
                alert(`Error: ${data.error}`);
            } else {
                alert(data.message);
            }
        })
        .catch((error) => console.error('Error setting threshold:', error));
});

// Close a petition
function closePetition(petitionId) {
    const response = prompt("Enter a response for this petition:");

    if (response) {
        fetch(`/admin/close_petition/${petitionId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ response }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.error) {
                    alert(`Error: ${data.error}`);
                } else {
                    alert(data.message);
                    fetchPetitions(); // Refresh petitions after closing
                }
            })
            .catch((error) => console.error('Error closing petition:', error));
    }
}

// Fetch petitions when the page loads
fetchPetitions();
