<?php
if (isset($_POST['submit'])) {
  $name = $_POST['name'];
  $subject = $_POST['subject'];
  $mailFrom = $_POST['mail'];
  $message = $_POST['message'];

  $mailTo = "josephscoth@gmail.com";
  $headers =  "From: ".$mailFrom;
  $txt = "You have recieved an email from".$name.".\n\n".$message;

  $secretKey = "6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe";

  //tst 6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe
  //real 6LdkLbMZAAAAAFIlY4mSuGgGxxcycjsAhEpeIqJo
  $responseKey = $_POST['g-recaptcha-response'];
  $UserIP = $_SERVER['REOMTE_ADDR'];
  $url = "https://www.google.com/recaptcha/api/siteverify?
  secret=$secretKey&response=$responseKey&remoteip=$UserIP";

  $response = file_get_contents($url);
  $response = json_decode($response);

  if ($response -> sucess) {
    mail($mailTo, $subject, $txt, $headers);
    header("Location: index.php?mailsend");

    echo '<script language="javascript">';
    echo 'alert("message successfully sent")';
    echo '</script>';
  }
  else {
    echo '<script language="javascript">';
    echo 'alert("Invalid Recaptcha - Please Try Again")';
    echo '</script>';
  }
}
