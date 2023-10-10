<?php
include "db.php";
header("Access-Control-Allow-Origin: http://localhost:3000");
header('Content-Type: application/json');

class DataHandler extends Database {
    private $rawData;

    public function __construct() {
        parent::__construct();
        $this->rawData = file_get_contents('php://input');
    }

    public function processData() {
        $decodedData = json_decode($this->rawData, true);

        if ($decodedData !== null && isset($decodedData['title'], $decodedData['description'], $decodedData['date'])) {
            $title = $decodedData['title'];
            $description = $decodedData['description'];
            $date = $decodedData['date'];


            $sql = "INSERT INTO `tasks` (`title`, `description`, `due_date`, `status`) VALUES ('$title','$description','$date','no')";

            $result = $this->conn->query($sql);

            if ($result === true) {
                echo json_encode(["message" => "Record inserted successfully"]);
            } else {
                echo json_encode(["message" => "Error: " . $this->conn->error]);
            }
        } else {
            echo json_encode(["message" => "Record inserted successfully"]);
        }
    }
}

$dataHandler = new DataHandler();

$dataHandler->processData();
?>