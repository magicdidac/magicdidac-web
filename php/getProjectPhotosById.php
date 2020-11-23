<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Header: Origin, Content-Type, Accept");

$servername = "localhost:3306";
$username = "new_user";
$password = "Est0EsUn4Contr4Segura*";
$dbname = "magicdiac_web";

$conn = mysqli_connect($servername,$username,$password,$dbname);
$conn->set_charset("utf8");

if($conn->connect_error){
	die("Connection failed" . $conn->connect_error);
}
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

$project_id = $_POST["id"];

$sql = "SELECT image FROM Pictures WHERE projectid='$project_id' ORDER BY imagekey";

$result = mysqli_query($conn, $sql);

if(mysqli_num_rows($result) > 0){
	$output = array();
	$output = $result->fetch_all(MYSQLI_ASSOC);
	echo json_encode($output);
}else{
	echo json_encode("0 result");
}

$conn->close();

?>