const form = document.createElement('form');
form.innerHTML = `
     <fieldset> 
     <legend>Gender</legend>

    <label>
        <input type="radio" name="gender" value="Male"> Male
    </label>

    <label>
        <input type="radio" name="gender" value="Female"> Female
    </label>

    <label>
        <input type="radio" name="gender" value="Others"> Others
    </label>    
   </fieldset>
<br>

<input type="submit" value="Submit">
`;

document.body.appendChild(form);


form.addEventListener("submit", function(e){

    const genders = document.getElementsByName("gender");
    let selected = false;

    for(let i = 0; i < genders.length; i++){
        if(genders[i].checked){
            selected = true;
            break;
        }
    }

    if(!selected){
        alert("Please select a gender option");
        e.preventDefault();
    }

});