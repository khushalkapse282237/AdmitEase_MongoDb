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
    $College_name = $_POST['College_name'];
    $Branch = $_POST['Branch'];
    $Full_name = $_POST['Full_name'];
    $Fathers_name = $_POST['Fathers_name'];
    $Mothers_name = $_POST['Mothers_name'];
    $Date_of_birth = $_POST['Date_of_birth'];
    $Candidate_type = $_POST['Candidate_type'];
    $Home_university = $_POST['Home_university'];
    $Category = $_POST['Category'];
    $Category_for_admission = $_POST['Category_for_admission'];
    $Applied_for_EWS = $_POST['Applied_for_EWS'];
    $Person_with_disability = $_POST['Person_with_disability'];
    $Applied_tfws_seat = $_POST['Applied_tfws_seat'];
    $Defence_type = $_POST['Defence_type'];
    $Is_orphan_candidate = $_POST['Is_orphan_candidate'];
    $Minority_candidate_type = $_POST['Minority_candidate_type'];
    $Gender = $_POST['Gender'];
    $sql_query = "insert into registration_main(College_name,Branch,Full_name,Fathers_name,Mothers_name,Date_of_birth,Candidate_type,Home_university,Category,Category_for_admission,Applied_for_EWS,Person_with_disability,Applied_tfws_seat,Defence_type,Is_orphan_candidate,Minority_candidate_type,Gender) values ('$College_name' , '$Branch' , '$Full_name' , '$Fathers_name' , '$Mothers_name' , '$Date_of_birth' , '$Candidate_type' , '$Home_university' , '$Category' , '$Category_for_admission' , '$Applied_for_EWS' , '$Person_with_disability' , '$Applied_tfws_seat' , '$Defence_type' , '$Is_orphan_candidate' , '$Minority_candidate_type' , '$Gender')";
    if(mysqli_query($conn , $sql_query)){
        echo "Newdetails entry is successful";
    }else{
        echo "error " . $sql ."" . mysqli_error($conn);
    }
    mysqli_close($conn);
}
?>