const form = document.createElement('form');
form.innerHTML = `
<fieldset>
    <legend>Profile Picture</legend>
    User Id <input type="text" name="" value=""/> <br><br>
    Picture <input type="file">
    <br>
    <hr>
    <input type="submit" name="" value="Submit"/>
</fieldset>
`;

document.body.appendChild(form);

form.addEventListener("submit", function(e){

    const inputs = form.querySelectorAll("input");
    const userId = inputs[0].value.trim();
    const picture = inputs[1].value;

    if(userId === "" || isNaN(userId) || Number(userId) <= 0)
       {
        alert("User Id cannot be empty and must be a positive number");
        e.preventDefault();
        return;
       }

    if(picture === "")
       {
        alert("Please select a picture");
        e.preventDefault();
        return;
       }

});