$.ajax({
    url: 'your-backend-url',
    type: 'GET', // or 'POST', 'PUT', etc.
    timeout: 5000, // Set the timeout in milliseconds (e.g., 5 seconds)
    beforeSend: function() {
      // Show your loading GIF here while the request is in progress
      $('#loading-gif').show();
    },
    success: function(data) {
      // Handle the successful response from the backend
      // Hide the loading GIF here
      $('#loading-gif').hide();
      // Process the data returned by the server
    },
    error: function(xhr, status, error) {
      if (status === "timeout") {
        // Handle the timeout error here
        // You can show an error message to the user
      } else {
        // Handle other types of errors
      }
      // Hide the loading GIF here
      $('#loading-gif').hide();
    }
  });
  