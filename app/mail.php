<?php

$recepient = "zctr@yandex.ru";
$sitename = "cards";

$surname = trim($_POST["surname"]);
$name = trim($_POST["name"]);
$patronymic = trim($_POST["patronymic"]);
$phone = trim($_POST["phone"]);
$form_control = trim($_GET["form-control"]);

$message = "Фамилия: $surname \n Имя: $name \n Отчество: $patronymic \n Телефон: $phone \n Карта: $form_control" ;

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
?>