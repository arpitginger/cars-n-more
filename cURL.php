<?php
// Initialize a new cURL session
$ch = curl_init();

// Set the URL and other options
curl_setopt($ch, CURLOPT_URL, "http://google.com");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

// Execute the cURL session
$response = curl_exec($ch);

// Check for errors
if(curl_error($ch)) {
    echo 'Error: ' . curl_error($ch);
}

// Close the cURL session
curl_close($ch);

// Output the response
echo $response;
?>