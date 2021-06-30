<?php
    $message_sent = false;
    if(isset($_POST['email']) && $_POST['email'] != ''){
        
        if( filter_var($_POST['email'], FILTER_VALIDATE_EMAIL) ){
            // Submit the Form
            $userName = $_POST['name'];
            $userEmail = $_POST['email'];
            $messageSubject = $_POST['subject'];
            $messgae = $_POST['message'];
        
            $to = "leeap83@gmail.com";
            $body = "";
        
            $body .= "From: ".$userName. "\r\n";
            $body .= "Email: ".$userEmail. "\r\n";
            $body .= "Message: ".$messgae. "\r\n";
        
            mail($to,$messageSubject,$body);
            
            $message_sent = true;
        }
        

    }



?>