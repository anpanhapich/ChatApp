<?php
    $conn=mysqli_connect("localhost", "root", "", "chatapp");
    if(!$conn){
        echo "Database connected". msqli_connect_error();
    }
?>
