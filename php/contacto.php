<?php
    $data = json_decode(file_get_contents('php://input'), true);
    $nombre = $data['nombre'];
    $email = $data['email'];
    $mensaje = $data['mensaje'];
    
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;
    
    require 'vendor/autoload.php';
    
    $mail = new PHPMailer(true);
    
    try {                                    
        $mail->isSMTP();                                            
        $mail->Host = 'smtp.gmail.com;';                    
        $mail->SMTPAuth = true;                             
        $mail->Username = 'spierrerg@gmail.com';                 
        $mail->Password = 'chino321';                        
        $mail->SMTPSecure = 'tls';                              
        $mail->Port = 587;  

        $mail->setFrom($email, $nombre);
        $mail->addAddress('spierrerg@gmail.com');
        $mail->Subject = $email;
        $mail->Body = $mensaje;
        $mail->send();

        echo json_encode(true);
    } catch (Exception $e) {
        echo json_encode(false);
    }
?>