const form = document.createElement("form");

form.innerHTML = `
<table cellspacing="0" border="1" width="80%">
    <tr>
        <th colspan="3"><h2>PERSONAL PROFILE</h2></th>
    </tr>

    <tr>
        <td>&nbsp;Name</td>
        <td>&nbsp;<input type="text" id="name"></td>
        <td></td>
    </tr>

    <tr>
        <td>&nbsp;Email</td>
        <td>&nbsp;<input type="text" id="email"></td>
        <td></td>
    </tr>

    <tr>
        <td>&nbsp;Gender</td>
        <td>
            &nbsp;
            <label><input type="radio" name="gender" value="Male"> Male</label>
            <label><input type="radio" name="gender" value="Female"> Female</label>
            <label><input type="radio" name="gender" value="Others"> Others</label>
        </td>
        <td></td>
    </tr>

   <tr>
    <td style="padding-left:8px;">Date of Birth</td>
    <td>
        <input type="text" size="2" maxlength="2" >
        /
        <input type="text" size="2" maxlength="2" >
        /
        <input type="text" size="4" maxlength="4" >
        <span style="margin-left:8px; font-style:italic;">(dd/mm/yyyy)</span>
    </td>
    <td></td>
</tr>

    <tr>
        <td>&nbsp;Blood Group</td>
        <td>
            &nbsp;
            <select id="blood">
                <option>A+</option><option>A-</option>
                <option>B+</option><option>B-</option>
                <option>AB+</option><option>AB-</option>
                <option>O+</option><option>O-</option>
            </select>
        </td>
        <td></td>
    </tr>

    <tr>
        <td>&nbsp;Degree</td>
        <td>
            &nbsp;
            <label><input type="checkbox" value="SSC"> SSC</label>
            <label><input type="checkbox" value="HSC"> HSC</label>
            <label><input type="checkbox" value="BSc"> BSc.</label>
            <label><input type="checkbox" value="MSc"> MSc.</label>
        </td>
        <td></td>
    </tr>

    <tr>
        <td>&nbsp;Photo</td>
        <td colspan="2">&nbsp;<input type="file" id="photo"></td>
    </tr>

    <tr>
        <td colspan="3" align="right">
            <br>
            <input type="submit" value="Submit">
            <input type="reset" value="Reset">&nbsp;
        </td>
    </tr>
</table>
`;


document.body.appendChild(form);



form.addEventListener("submit", function(e){

const name = document.getElementById("name").value.trim();

if(name === ""){
    alert("Name cannot be empty");
    e.preventDefault();
    return;
}

const nameWords = name.split(/\s+/);
if(nameWords.length < 2){
    alert("Name must contain at least two words");
    e.preventDefault();
    return;
}

const namePattern = /^[A-Za-z][A-Za-z.\-\s]*$/;
if(!namePattern.test(name)){
    alert("Name must start with a letter and contain only letters, dot(.) or dash(-)");
    e.preventDefault();
    return;
}





const email = document.getElementById("email").value.trim();
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(email === "" || !emailPattern.test(email)){
    alert("Please enter a valid email");
    e.preventDefault();
    return;
}





const genders = document.getElementsByName("gender");
let genderSelected = false;

for(let i=0;i<genders.length;i++){
    if(genders[i].checked){
        genderSelected = true;
        break;
    }
}

if(!genderSelected){
    alert("Please select gender");
    e.preventDefault();
    return;
}




const dobInputs = form.querySelectorAll("input[type='text']");
const dd = parseInt(dobInputs[1].value);
const mm = parseInt(dobInputs[2].value);
const yyyy = parseInt(dobInputs[3].value);

if(isNaN(dd) || dd<1 || dd>31){
    alert("Day must be between 1 and 31");
    e.preventDefault();
    return;
}

if(isNaN(mm) || mm<1 || mm>12){
    alert("Month must be between 1 and 12");
    e.preventDefault();
    return;
}

if(isNaN(yyyy) || yyyy<1900 || yyyy>2016){
    alert("Year must be between 1900 and 2016");
    e.preventDefault();
    return;
}




const blood = document.getElementById("blood").value;

if(blood === ""){
    alert("Please select a blood group");
    e.preventDefault();
    return;
}




const degrees = form.querySelectorAll("input[type='checkbox']");
let degreeSelected = false;

for(let i=0;i<degrees.length;i++){
    if(degrees[i].checked){
        degreeSelected = true;
        break;
    }
}

if(!degreeSelected){
    alert("Please select at least one degree");
    e.preventDefault();
    return;
}





const photo = document.getElementById("photo").value;

if(photo === ""){
    alert("Please upload a photo");
    e.preventDefault();
    return;
}

});