<?php

include('./db.php');

// SQL lekérdezés a szolgáltatások adatainak lekéréséhez
$sql = "SELECT * FROM services";
$result = $conn->query($sql);

$services = array();

// Ha van találat
if ($result->num_rows > 0) {
    // Adatok lekérése és JSON formátumban való visszaadása
    while($row = $result->fetch_assoc()) {
        $services[] = $row;
    }
    echo json_encode($services);
} else {
    echo json_encode([]);
}

// Kapcsolat lezárása
$conn->close();
?>