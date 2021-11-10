const formElement = document.querySelector("form");
const tbodyElement = document.querySelector("tbody");
const tableElement = document.querySelector("table");

const add_data = (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const size = document.getElementById("size").value;
    const desc = document.getElementById("desc").value;

    tbodyElement.innerHTML += `
        <tr>
            <td>${name}</td>
            <td>${size}</td>
            <td>${desc}</td>
            <td><button class="deleteBtn">Delete</button></td>
        </tr>
    `;
}

const delete_data = (e) => {
    if(!e.target.classList.contains("deleteBtn")){
        return;
    }

    const btn = e.target;
    btn.closest("tr").remove();
    // alert("Are you sure you want to delete?")
}

formElement.addEventListener("submit", add_data);
tableElement.addEventListener("click", delete_data);