<?php
require_once 'db.php';
header("Access-Control-Allow-Origin: http://localhost:3000");
header('Content-Type: application/json');
$database = new Database();
$db = $database->getConnection();

class TaskAPI {
    private $conn;

    public function __construct($db) {
        $this->conn = $db;
    }

    public function getTaskById($id) {
        $query = "SELECT * FROM tasks WHERE id = :id";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':id', $id);
        $stmt->execute();
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    public function createTask($data) {
        $query = "INSERT INTO tasks (title, description, due_date, status) VALUES (:title, :description, :due_date, :status)";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':title', $data['title']);
        $stmt->bindParam(':description', $data['description']);
        $stmt->bindParam(':due_date', $data['due_date']);
        $stmt->bindParam(':status', $data['status']);
        return $stmt->execute();
    }

    public function updateTask($id, $data) {
        $query = "UPDATE tasks SET title = :title, description = :description, due_date = :due_date, status = :status WHERE id = :id";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':title', $data['title']);
        $stmt->bindParam(':description', $data['description']);
        $stmt->bindParam(':due_date', $data['due_date']);
        $stmt->bindParam(':status', $data['status']);
        $stmt->bindParam(':id', $id);
        return $stmt->execute();
    }

    public function deleteTask($id) {
        $query = "DELETE FROM tasks WHERE id = :id";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':id', $id);
        return $stmt->execute();
    }
}

$api = new TaskAPI($db);

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if (isset($_GET['id'])) {
        $task = $api->getTaskById($_GET['id']);
        echo json_encode($task);
    } else {
        $tasks = $api->getAllTasks();
        echo json_encode($tasks);
    }
} elseif ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);
    if ($api->createTask($data)) {
        echo json_encode(array("message" => "Task created."));
    } else {
        echo json_encode(array("message" => "Unable to create task."));
    }
} elseif ($_SERVER['REQUEST_METHOD'] === 'PUT') {
    $data = json_decode(file_get_contents("php://input"), true);
    $id = $_GET['id'];
    if ($api->updateTask($id, $data)) {
        echo json_encode(array("message" => "Task updated."));
    } else {
        echo json_encode(array("message" => "Unable to update task."));
    }
} elseif ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    $id = $_GET['id'];
    if ($api->deleteTask($id)) {
        echo json_encode(array("message" => "Task deleted."));
    } else {
        echo json_encode(array("message" => "Unable to delete task."));
    }
}
?>
