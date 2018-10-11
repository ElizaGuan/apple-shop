<?php
    // 获取用户名
    header("Content-Type: application/json");
    header("Access-Control-Allow-Origin:*");
    // 引用另外一个文件
    include "connect_db.php";
    // 获取json数据, 请求主体的格式为json格式
    $json = json_decode(file_get_contents("php://input"));
    $email = $json -> email;
    $password = $json -> password;
    // 链接数据库
    $coon = new db();
    $sql = "select * from user WHERE email='$email'";
    $insert_sql = "INSERT INTO user (email, `password`) values ('$email','$password')";
    $rows = $coon -> Query($sql, 2);
    if($rows) {
      // 用户名称存在
      $arr = array("code" => "1000", "msg"=>"无法使用此电子邮件地址,请选择其他电子邮件地址");
    } else {
      // 用户名称不存在
      $result = $coon -> Query($insert_sql, 3);
      if($result) {
        $arr = array("code" => "200", "msg"=>"");
      } else {
        $arr = array("code" => "1000", "msg"=>"未知错误, 注册不成功");
      }
    }
    echo json_encode($arr);

   
  ?>