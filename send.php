<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$email = $_POST['email'];

// Формирование самого письма
$title = "Новое обращение Best Tour-Plan";
$body = "
<h2>Новое письмо</h2>
<b>Имя:</b> $name<br>
<b>Телефон:</b> $phone<br>
<b>Почтовый адрес:</b> $email<br><br>
<b>Сообщение:</b><br>$message 

";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    //$mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
    $mail->Username   = 'jeyjey070703@gmail.com'; // Логин на почте
    $mail->Password   = '4086103mir'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('jeyjey070703@gmail.com', 'Мирзохид Рахматуллаев'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('mirzohid.rahmatullaev@gmail.com'); // Ещё один, если нужен

		// Отправка сообщения
		$mail->isHTML(true);
		$mail->Subject = $title;
		$mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
header('Location: thankyou.html');