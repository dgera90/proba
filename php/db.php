<?php
// Adatbázis kapcsolódás beállítások
$servername = "localhost";
$username = "root";   // Az adatbázis felhasználóneve
$password = "";       // Az adatbázis jelszava
$dbname = "elsoteszt"; // Az adatbázis neve

// Kapcsolódás létrehozása
$conn = new mysqli($servername, $username, $password, $dbname);

// Kapcsolat ellenőrzése
if ($conn->connect_error) {
    die("Kapcsolódási hiba: " . $conn->connect_error);
}
?>