<?php
session_start();

if (empty($_SESSION['books'])) {
	$_SESSION['books'] = array();
}

$model = json_decode($_POST['model'], true);

if (empty($_GET['id'])) {
	$model['id'] = count($_SESSION['books']) + 1;
	$model['created_at'] = time();
} else {
	// copy changes
	$old_data = $_SESSION['books'][$_GET['id']];
	foreach ($model as $k => $v) {
		$old_data[$k] = $v;
	}

	$old_data['changed_at'] = time();

	$model = $old_data;
}

$_SESSION['books'][$model['id']] = $model;

header('Content-Type: application/json; charset=UTF-8', true, 200);
$response = json_encode($model, JSON_FORCE_OBJECT);
header('Content-Length: ' . strlen($response));
print $response;
