document.addEventListener("DOMContentLoaded", () => {
const contactForm = document.getElementById("contatos");
const contactTable = document.getElementById("tabela").getElementsByTagName("tbody")[0];
    
    contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const nameInput = document.getElementById("name");
    const phoneInput = document.getElementById("phone");
    
    const name = nameInput.value;
    const phone = phoneInput.value;
    
    if (name && phone) {
        const newRow = contactTable.insertRow();
        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
    
        cell1.textContent = name;
        cell2.textContent = phone;
    
        nameInput.value = "";
        phoneInput.value = "";
        }
    });
});
    