<?php
    class DbConnect {
        private $server = 'localhost';
        private $dbname = 'databaze_knih';
        private $user = 'user';
        private $password = 'user';
        public function connect() {
            try {
                $conn = new PDO('mysql:host=' .$this->server .';dbname=' . $this->dbname, $this->user, $this->password);
                $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                return $conn;
            } catch (\Exception $e) {
                echo "Database error: " . $e->getMessage();
            }           
        }
    }
?>