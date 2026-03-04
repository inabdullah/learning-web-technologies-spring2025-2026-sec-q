const form = document.createElement("form");

form.innerHTML = `
    <fieldset>
        <legend><h3>Date of Birth</h3></legend>
        <table>
            <tr>
                <td style="text-align:center;">dd</td>
                <td></td>
                <td style="text-align:center;">mm</td>
                <td></td>
                <td style="text-align:center;">yyyy</td>
            </tr>
            <tr>
                <td><input type="number" size="2" maxlength="2" min="0" max="31" required></td>
                <td>/</td>
                <td><input type="number" size="2" maxlength="2" min="1" max="12" required></td>
                <td>/</td>
                <td><input type="number" size="4" maxlength="4" min="1900" max="2016" required></td>
            </tr>
            <tr>
                <td colspan="5"><hr></td>
            </tr>
            <tr>
                <td colspan="3">
                    <input type="submit" value="Submit">
                </td>
            </tr>
        </table>
    </fieldset>
`;

document.body.appendChild(form);

form.addEventListener("submit", function(e){

    const inputs = form.querySelectorAll("input[type='number']");
    
    const dd = parseInt(inputs[0].value);
    const mm = parseInt(inputs[1].value);
    const yyyy = parseInt(inputs[2].value);

    if(isNaN(dd) || isNaN(mm) || isNaN(yyyy)){
        alert("Date fields cannot be empty");
        e.preventDefault();
        return;
    }

    if(dd < 1 || dd > 31){
        alert("Day must be between 1 and 31");
        e.preventDefault();
        return;
    }

    if(mm < 1 || mm > 12){
        alert("Month must be between 1 and 12");
        e.preventDefault();
        return;
    }

    if(yyyy < 1900 || yyyy > 2016){
        alert("Year must be between 1900 and 2016");
        e.preventDefault();
        return;
    }

});