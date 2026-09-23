const studentForm = document.getElementById("student-form");
const studentList = document.getElementById("student-list");

studentForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("Name").value;
    const program = document.getElementById("insert-program").value;

    const studentCard = document.createElement("div");
    studentCard.classList.add("student-card");

    studentCard.innerHTML = `
        <h3>${name}</h3>
        <p>Program: ${program}</p>
        <button class="remove-button">Remove</button>
    `;

    studentList.appendChild(studentCard);

    studentCard.querySelector(".remove-button").addEventListener("click", function() {
        studentCard.remove();
    });

    studentForm.reset();
});