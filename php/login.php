<?php
    header("Content-type:application/json");
    header("Access-Control-Allow-Origin:*");
    include "connect_db.php";
    $json = json_decode(file_get_contents("php://input"));
    $email = $json -> email;
    $password = $json -> password;
    // 链接数据库
    $coon = new db();
    $sql = "select * from user WHERE email='$email' and  password='$password'";
    $rows = $coon -> Query($sql, 2);
    if($rows) {
      // 用户输入正确
      $arr = array("code" => "200", "msg"=>"", "data"=>array("id"=>$rows["id"], "token"=>"1234567899", "atavar"=> "http://www.aaa.com/path/a.png"));
    } else {
      // 输入错误(出于安全问题,此Apple ID已被锁定,请访问以下'忘记密码?'重新设置账户)
      $arr = array("code" => "1000", "msg1" => "您的 AppleConnect 账号或密码输入有误","msg2" => "该账号不在激活状态");
    }
    echo json_encode($arr);
?>