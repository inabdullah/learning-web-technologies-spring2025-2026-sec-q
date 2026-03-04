const form = document.createElement('form');
form.innerHTML = `
     <fieldset width="80%">
    <legend>Degree</legend>
    <input type="checkbox" name="" value=""/>SSC
    <input type="checkbox" name="" value=""/>HSC
    <input type="checkbox" name="" value=""/>BSc
    
</fieldset>
<br>
<input type="submit" name="" value="Submit"/>
`;

document.body.appendChild(form);

form.addEventListener("submit", function(e){

    const degrees = form.querySelectorAll("input[type='checkbox']");
    let selected = false;

    for(let i = 0; i < degrees.length; i++){
        if(degrees[i].checked){
            selected = true;
            break;
        }
    }

    if(!selected){
        alert("Please select at least one degree");
        e.preventDefault();
    }

});