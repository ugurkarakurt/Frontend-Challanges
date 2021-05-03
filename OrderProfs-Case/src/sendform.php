<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Congratulations!</title>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@100;300;400;500;700;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@sweetalert2/theme-borderless@3/borderless.css">
    <link rel="stylesheet" href="../assets/css/senform/sendForm.css">
</head>
<style>

</style>

<body>
    <div id="clickOff"></div>

    <?php
    $company = $_POST['company'];
    $name = $_POST['name'];
    $surname = $_POST['surname'];
    $street = $_POST['street'];
    $houseNumber = $_POST['house-number'];
    $zip = $_POST['zip'];
    $city = $_POST['city'];
    $country = $_POST['country'];
    $state = $_POST['state'];
    $email = $_POST['email'];
    $tel = $_POST['tel'];
    $mobile = $_POST['mobile'];
    $fax = $_POST['fax'];
    $corporate = $_POST['corporate'];
    $contactPerson = $_POST['contact-person'];
    $vatID = $_POST['company'];
    ?>

    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@9/dist/sweetalert2.min.js"></script>
    <script src="../assets/js/formAlert.js"></script>
</body>

</html>