<?php
//--- Файли phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

#--- перевірка, що помилки немає
if (!error_get_last()) {

    //--- Змінні, які надсилає користувач
    $name = $_POST['name'] ;
    $email = $_POST['email'];
    $text = $_POST['text'];
    $file = $_FILES['myfile'];


    //--- Формування самого листа
    $title = "Заголовок письма";
    $body = "
    <h2>Новое письмо</h2>
    <b>Имя:</b> $name<br>
    <b>Почта:</b> $email<br><br>
    <b>Сообщение:</b><br>$text
    ";

    //--- Налаштування PHPMailer
    $mail = new PHPMailer\PHPMailer\PHPMailer();

    $mail->isSMTP();
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    //$mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['data']['debug'][] = $str;};

    //--- Налаштування вашої пошти
    $mail->Host       = 'smtp.gmail.com'; //--- SMTP сервера пошти
    $mail->Username   = '235088@duan.edu.ua'; //--- Логін на пошті
    $mail->Password   = 'nsob mgjw mlap dtrz'; //--- Пароль на пошті
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('235088@duan.edu.ua', 'Name'); //--- Адреса самої пошти та ім'я відправника

    //--- Одержувач листа
    $mail->addAddress('235088@duan.edu.ua');

    //--- Прикріплення файлів до листа
    if (!empty($file['name'][0])) {
        for ($i = 0; $i < count($file['tmp_name']); $i++) {
            if ($file['error'][$i] === 0)
                $mail->addAttachment($file['tmp_name'][$i], $file['name'][$i]);
        }
    }
    //--- Надсилання повідомлення
    $mail->isHTML(true);
    $mail->Subject = $title;
    $mail->Body = $body;

    //--- Перевіряємо відправленість повідомлення
    if ($mail->send()) {
        $data['result'] = "success";
        $data['info'] = "Повідомлення успішно відправлено!";
    } else {
        $data['result'] = "error";
        $data['info'] = "Повідомлення не було відправлено. Помилка під час надсилання листа";
        $data['desc'] = "Причина помилки: {$mail->ErrorInfo}";
    }

} else {
    $data['result'] = "error";
    $data['info'] = "У коді присутня помилка";
    $data['desc'] = error_get_last();
}

//--- Надсилання результату
header('Content-Type: application/json');
echo json_encode($data);

?>
