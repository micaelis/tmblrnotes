<?php
if(isset($_POST['comment'])) {
     
    $email_to = "dannviero@gmail.com";
    $email_subject = "Tumblr suggestions";
     
     
    function died($error) {
        echo "We are very sorry, but there were error(s) found with the form you submitted. ";
        echo "These errors appear below.<br /><br />";
        echo $error."<br /><br />";
        echo "Please go back and fix these errors.<br /><br />";
        die();
    }
     
    $message = $_POST['comment']; // required

    function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
    }
     
    $email_message = "Comments: ".clean_string($message)."\n";
     
     
// create email headers
$headers = 'From: '.$email_to."\r\n".
'Reply-To: '.$email_to."\r\n" .
'X-Mailer: PHP/' . phpversion();
@mail($email_to, $email_subject, $email_message, $headers);  
?>
 
<!-- place your own success html below -->
 
<p id="yey">Thank you!</p>
 
<?php
}
die();
?>
