<?php
session_start();
?>
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
<img src="logo.png" height="40">
<div class="nav">
Logged in as <?=$_SESSION['user']['name']?> |
<a href="logout.php">Logout</a>
</div>
</div>

<div class="main">

<div class="sidebar">
<b>Account</b><hr>
<ul>
<li><a href="dashboard.php">Dashboard</a></li>
<li><a href="profile.php">View Profile</a></li>
<li><a href="edit_profile.php">Edit Profile</a></li>
<li><a href="change_password.php">Change Password</a></li>
<li><a href="logout.php">Logout</a></li>
</ul>
</div>

<div class="content">
<h3>Welcome <?=$_SESSION['user']['name']?></h3>
</div>

</div>

<div class="footer">Copyright © 2017</div>

</div>
</body>
</html>