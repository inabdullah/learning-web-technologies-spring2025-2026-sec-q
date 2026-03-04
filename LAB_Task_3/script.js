const form = document.createElement('form');
form.innerHTML = `
    <legend><b>Name</b></legend>
    <input type="text" id="name" name="name" /><br><br>
    <input type="submit" value="Submit" />
`;

document.body.appendChild(form);

form.addEventListener("submit", function(e) {

    const name = document.getElementById("name").value.trim();

    if (name === "") {
        alert("Name cannot be empty");
        e.preventDefault();
        return;
    }

    const words = name.split(/\s+/);
    if (words.length < 2) {
        alert("Name must contain at least two words");
        e.preventDefault();
        return;
    }

    const pattern = /^[A-Za-z][A-Za-z.\-\s]*$/;

    if (!pattern.test(name)) {
        alert("Name must start with a letter and contain only letters, dot(.) or dash(-)");
        e.preventDefault();
        return;
    }

});