<?php
require 'db.php';
require 'TaskAPI.php';

$db = new Database();

$taskAPI = new TaskAPI($db);

if ($_SERVER['REQUEST_METHOD'] === 'GET' && empty($_GET['id'])) {
    $tasks = $taskAPI->getAllTasks();
    header('Content-Type: application/json');
    echo json_encode($tasks);
}

if ($_SERVER['REQUEST_METHOD'] === 'GET' && !empty($_GET['id'])) {
    $id = $_GET['id'];
    $task = $taskAPI->getTaskById($id);
    if ($task) {
        header('Content-Type: application/json');
        echo json_encode($task);
    } else {
        header("HTTP/1.0 404 Not Found");
        echo json_encode(["message" => "Uzdevums nav atrasts"]);
    }
}


?>
