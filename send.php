<?php
$fio = $_POST['fio'];
$tel = $_POST['tel'];
$text = $_POST['text'];

$fio = htmlspecialchars($fio);
$tel = htmlspecialchars($tel);
$text = htmlspecialchars($text);

$fio = urldecode($fio);
$tel = urldecode($tel);
$text = urldecode($text);
// echo $fio;
// echo "<br>";
// echo $tel;
// echo "<br>";
// echo $text;
if (mail("kardani6e.zzz@mail.ru", "Заявка с сайта", "ФИО:".$fio.". E-mail: ".$tel ,"From: yakimtsev.konstantin@gmail.com \r\n"))
 {     echo "сообщение успешно отправлено";
} else {
    echo "при отправке сообщения возникли ошибки";
}
ini_set('display_errors','On');
error_reporting('E_ALL');?>