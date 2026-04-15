<!DOCTYPE html>
<html lang="en">
<head>
    <title>Public Home</title>
    <style>
        .container{
            width: 800px;
            margin: auto;
            border: 1px solid black;
        }
         .header {
            padding: 15px;
            border-bottom: 1px solid black;
        }
        .nav {
            float: right;
        }
        .footer{
            text-align:center;
        }
        .content{
            padding: auto;
            border-bottom: 1px solid black;
        }
        
    </style>
    
</head>
<body>
    <div class="container">
    <div class="header">
        <img src="logo.png" alt="XCompany Logo">
        
        <div class="nav">
            <a href="publicHome.php">Home</a> |
            <a href="login.php">Login</a> |
            <a href="registration.php">Registration</a>
        </div>
    </div>

    
    <div class="content">
        <form action="post" enctype="multipart/form-data">
            <fieldset>
                <legend>REGISTRATION</legend>
                Name: <input type="text" name="name"><hr>
                Email: <input type="email" name="email"><hr>
                Username: <input type="text" name="username"><hr>
                Password: <input type="password" name="password"><hr>
                Confirm Password: <input type="password" name="cpassword"><hr>
                <fieldset>
                    <legend>Gender</legend>
                    <input type="radio" name="gender" value="Male">Male
                <input type="radio" name="gender" value="Female">Female<hr>
                </fieldset>
                
                <fieldset>
                    <legend>DOB</legend>
                    <input type="text" size="2" maxlength="2" name="" value=""/> / 
                <input type="text" size="2" maxlength="2" name="" value=""/> / 
                <input type="text" size="4" maxlength="4" name="" value=""/> 
                (dd/mm/yyyy)  
                </fieldset>

                

                <input type="submit" name="submit" value="Submit">
                <input type="reset" name="reset" value="Reset">

            </fieldset>

        </form>
    </div>

    <div class="footer">
        Copyright © 2017
    </div>

</div>
</body>
</html>