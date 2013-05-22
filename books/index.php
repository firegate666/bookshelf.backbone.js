<?php
session_start();

if (empty($_SESSION['books'])) {
	$_SESSION['books'] = array();
}

header('Content-Type: application/json; charset=UTF-8', true, 200);
$response = json_encode(array_values(array_filter($_SESSION['books'])), JSON_NUMERIC_CHECK);
header('Content-Length: ' . strlen($response));
print $response;
