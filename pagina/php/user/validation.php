<?php

/* ------------------------ PHP VALIDATION FUNCTIONS ------------------------ */


function is_pass_valid($pass) {
    /* 
        Validate if a password recive as a parameter is in a valid format (1 upper case, 1 lower case, 1 number).

        Parameters: 
            $pass : The password to validate
        
        Return:
            If the $pass is empty return false.
            If the password is in correct format it returns true, and if not the returns false.
    */

    if (empty($pass)) {
        return false;
    }

    $uppercase = preg_match('/[A-Z]/', $pass);
    $lowercase = preg_match('/[a-z]/', $pass);
    $number = preg_match('/[0-9]/', $pass);
    $length = strlen($pass) > 8;

    return $uppercase && $lowercase && $number && $length;
}

?>