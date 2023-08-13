<?php
    error_reporting(E_ALL);
    ini_set('display_errors', 1);
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: *");
    header("Access-Control-Allow-Methods: *");
    include("DbConnect.php");

    $conn = new DbConnect();
    $db = $conn->connect();
    $method = $_SERVER['REQUEST_METHOD'];
    switch ($method) {
        case'POST':
            $book = json_decode(file_get_contents('php://input'));
            $sql = "INSERT INTO books(book_id, title, author, genre, year, pages, image) VALUES (null, :title, :author, :genre, :year, :pages, :image)";
            $stmt = $db->prepare($sql);
            $stmt->bindParam(':title', $book->title);
            $stmt->bindParam(':author', $book->author);
            $stmt->bindParam(':genre', $book->genre);
            $stmt->bindParam(':year', $book->year);
            $stmt->bindParam(':pages', $book->pages);
            $stmt->bindParam(':image', $book->image);
            if($stmt->execute()) {
                $data = ['status' => 1, 'message' => "Record successfully created"];
            } else {
                $data = ['status' => 0, 'message' => "Failed to create record."];
            }
            echo json_encode($data);
            break;
        case 'GET':
            $sql = 'SELECT * from books';
            $path = explode('/', $_SERVER['REQUEST_URI']);
            if(isset($path[3]) && is_numeric($path[3])) {
                $sql .= " WHERE book_id = :id";
                $stmt = $db->prepare($sql);
                $stmt->bindParam(':id', $path[3]);
                $stmt->execute();
                $books = $stmt->fetch(PDO::FETCH_ASSOC);
            }else{
                $stmt = $db->prepare($sql);
                $stmt->execute();
                $books = $stmt->fetchAll(PDO::FETCH_ASSOC);
            }
            echo json_encode($books);
            break;
        case 'PUT':
            $book = json_decode( file_get_contents('php://input') );
            $sql = "UPDATE books SET title= :title, author= :author, genre= :genre, year= :year, pages= :pages, image= :image WHERE book_id = :id";
            $stmt = $db->prepare($sql);
            echo $book->book_id;
            $stmt->bindParam(':id', $book->book_id);
            $stmt->bindParam(':title', $book->title);
            $stmt->bindParam(':author', $book->author);
            $stmt->bindParam(':genre', $book->genre);
            $stmt->bindParam(':year', $book->year);
            $stmt->bindParam(':pages', $book->pages);
            $stmt->bindParam(':image', $book->image);

            if($stmt->execute()) {
                $response = ['status' => 1, 'message' => 'Record updated successfully.'];
            } else {
                $response = ['status' => 0, 'message' => 'Failed to update record.'];
            }
            echo json_encode($response);
            break;
        case 'DELETE': 
            $sql = "DELETE FROM books WHERE book_id = :id";
            $path = explode('/', $_SERVER['REQUEST_URI']);
        
            $stmt = $db->prepare($sql);
            $stmt->bindParam(':id', $path[3]);
            if($stmt->execute()) {
                $response = ['status' => 1, 'message' => 'Record deleted successfully.'];
            } else {
                $response = ['status' => 0, 'message' => 'Failed to delete record.'];
            }
            echo json_encode($response);
            break;
    }
?>