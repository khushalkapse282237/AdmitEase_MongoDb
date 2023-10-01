<?php

$servername="localhost";
$username="root";
$password="";
$database_name="admitease";
$conn = mysqli_connect($servername,$username,$password,$database_name);
if(!$conn){
    die("connection failed" . mysqli_connect_error());
}
if(True){
    $Email = $_POST['Email'];
    $Password = $_POST['Password'];
    $sql_query = "insert into login123(Email,Password) values ('$Email' , '$Password')";
    if(mysqli_query($conn , $sql_query)){
        echo "Newdetails entry is successful";
    }else{
        echo "error " . $sql ."" . mysqli_error($conn);
    }
    mysqli_close($conn);
}
?>