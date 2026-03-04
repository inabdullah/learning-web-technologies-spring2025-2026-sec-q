const form = document.createElement('form');
form.innerHTML = `
          <fieldset>
    Blood Group  
    <select>
        <option>A+</option>
        <option>A-</option>
        <option>B+</option>
        <option>B-</option>
        <option>AB+</option>
        <option>AB-</option>
        <option>O+</option>
        <option>O-</option>
    </select>
    <br>
    <hr>
    <input type="submit" name="" value="Submit"/>
</fieldset>

`;

document.body.appendChild(form);

form.addEventListener("submit", function(e){

    const blood = form.querySelector("select").value;

    if(blood === ""){
        alert("Please select a blood group");
        e.preventDefault();
    }

});