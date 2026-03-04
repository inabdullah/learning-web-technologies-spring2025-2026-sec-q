const form = document.createElement('form');
form.innerHTML = `
   <legend>Email</legend>
    <input type="email" id="email" name="email" 
           placeholder="" required>

    <img src="info.png" 
         title="Hint: sample@example.com" 
         width="18" height="18" 
         alt="Email hint icon">

    <br><br>

    <input type="submit" value="Submit">
`;

document.body.appendChild(form);

form.addEventListener("submit", function(e){

    const email = document.getElementById("email").value.trim();

    if(email === ""){
        alert("Email cannot be empty");
        e.preventDefault();
        return;
    }

    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!pattern.test(email)){
        alert("Please enter a valid email address (example: sample@example.com)");
        e.preventDefault();
        return;
    }

});