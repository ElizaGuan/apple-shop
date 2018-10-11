<?php
    // 获取用户名
    header("Content-Type: application/json");
    header("Access-Control-Allow-Origin:*");
    // 引用另外一个文件
    include "connect_db.php";
    $email = $_GET["email"];
    // 链接数据库
    $coon = new db();
    $sql = "select * from user WHERE email='$email'";
    $rows = $coon -> Query($sql, 2);
    // var_dump($rows);
    if($rows) {
      $arr = array("code" => "1000", "msg"=>"已存在,无法使用此电子邮件地址,请选择其他电子邮件地址");
    } else {
      $arr = array("code" => "200", "msg" => "");
    }
    echo json_encode($arr);

    // 1124077632@qq.com
  ?>