<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require './PHPMailer/src/Exception.php';
require './PHPMailer/src/PHPMailer.php';
require './PHPMailer/src/SMTP.php';


parse_str($_POST['data'], $data);


$mail = new PHPMailer(true);                              // Passing `true` enables exceptions
try {
    //Server settings
    $mail->SMTPDebug = 0;                                 // Enable verbose debug output
    $mail->isSMTP();                                      // Set mailer to use SMTP
    $mail->Host = 'mail.vukpetrovic.com';  // Specify main and backup SMTP servers
    $mail->SMTPAuth = true;                               // Enable SMTP authentication
    $mail->Username = 'web@vukpetrovic.com';                 // SMTP username
    $mail->Password = 'glorijagoga3105';                           // SMTP password
    $mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
    $mail->Port = 465;                                    // TCP port to connect to

    //Recipients
    $mail->setFrom($data['email'], $data['fullname']);
    $mail->addAddress('web@vukpetrovic.com');             // Name is optional
    $mail->addReplyTo($data['email'], $data['fullname']);

    //Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'New message from website from - '.$data['email'];
    $mail->Body    = '<div style="color:red"><div>Fullname: '.$data['fullname'].'</div><div>Phone: '.$data['phone'].'</div><div>Message: '.$data['message'].'</div></div>';
    $mail->AltBody = 'Fullname: '.$data['message'].' - Phone: '.$data['phone'].' - Message: '.$data['message'];

    $mail->send();
    echo 'ok';
} catch (Exception $e) {
    echo 'Message could not be sent. Mailer Error: ', $mail->ErrorInfo;
}