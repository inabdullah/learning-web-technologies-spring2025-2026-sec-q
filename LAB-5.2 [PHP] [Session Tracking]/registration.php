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
                <label for="">Name</label>
                <input type="text" name="username"><hr>
                <label for="">Email</label>
                <input type="email" name="email"><hr>
            </fieldset>

        </form>
    </div>

    <div class="footer">
        Copyright © 2017
    </div>

</div>
</body>
</html>