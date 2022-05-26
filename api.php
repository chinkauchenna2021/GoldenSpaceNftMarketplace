<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Headers:*");
header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
// error_reporting(0);
$request=$_SERVER['REQUEST_URI'];

$coll = explode("/",$request);

$con = mysqli_connect("localhost","avaxkejj","Bei1paTxkhVg","avaxkejj_elephantinvestment");

if(($coll[2] == "getallsales")  && ($_SERVER['REQUEST_METHOD'] == 'GET')){

$sql_query=mysqli_query($con,"SELECT * FROM `nftofsales`");
    // $fetch_arr=array();

while($row = mysqli_fetch_array($sql_query)){

    $fetch_arr[]  = $row;
   
}

if(count($fetch_arr) != 0){



    echo json_encode(array("result"=>$fetch_arr));



}else{

    echo json_encode(array("msg"=>"Database is Empty"));

}


}else if(($coll[2] == "postsales")){

$getTokenId= $_REQUEST['gettoken']; 
$wei_convert= $_REQUEST['weiconvert']; 
$signedorder= urldecode($_REQUEST['signedmaker']); 
$imageholder= $_REQUEST['imageholder']; 


$sql_query=mysqli_query($con,"INSERT INTO `nftofsales`(`id`,`nft_token`,`maker_signed`,`nft_amount`,`sold`,`image`) VALUES ('','$getTokenId','$signedorder','$wei_convert','false','$imageholder')");

if($sql_query){

echo json_encode(array("msg"=>"sent successfully"));


}else{

    echo json_encode(array("error"=>"Not Sent"));

}


}else if(($coll[2] == "getsomesales")  && ($coll[3])){

    $id = $coll[3];
$sql_query = mysqli_query($con,"SELECT * FROM `nftofsales` WHERE `nft_token`='$id' ");

$rows= mysqli_fetch_array($sql_query);

if(count($rows) != 0){

    echo json_encode(array("result"=>$rows));
    
    
    }else{
    
        echo json_encode(array("error"=>"no single item found"));
    
    }
    

}else if(($coll[2] == "deletenft")){

    $id= $coll[3];

    $sql_query = mysqli_query($con,"DELETE FROM `nftofsales` WHERE `nft_token`='$id' ");
    if($sql_query){

        echo json_encode(array("msg"=>"Deleted successfully ".$id));
        
        
        }else{
        
            echo json_encode(array("error"=>"Not deleted ".$id));
        
        }
        


}






else{


 echo  json_encode(array("errormsg"=>"couldnt be found"));
}







?>