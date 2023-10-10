<?php
include 'db.php';
header("Access-Control-Allow-Origin: http://localhost:3000");
header('Content-Type: application/json');
header("Cache-Control: no-cache, must-revalidate");

class DeleteTasks extends Database {
    private $rawData;

    public function __construct() {
        parent::__construct();
        $this->rawData = file_get_contents('php://input');
    }

    public function deleteTask() {
        $id = isset($_GET['id']) ? intval($_GET['id']) : 0; // Sanitize and convert to integer
        if ($id < 0) {
            echo json_encode(["message" => "Invalid 'id' parameter"]);
            return;
        }
    
        $sql = "DELETE FROM tasks WHERE id = $id";
        $result = $this->conn->query($sql);
    
        if ($result === TRUE) {
            $this->conn->commit();
            echo json_encode(["message" => "Deleted successfully."]);
        } else {
            echo json_encode(["message" => "Error: " . $this->conn->error]);
        }
    }
} 

$DeleteTask = new DeleteTasks;
$DeleteTask->deleteTask();
    
?>
