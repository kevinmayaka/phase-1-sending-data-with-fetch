function submitData(name, email) {
    const formData = {
      name: name,
      email: email
    };
  
    const configObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(formData)
    };
  
    return fetch('http://localhost:3000/users', configObj)
      .then(response => response.json())
      .then(data => {
        // Append the new id to the DOM
        document.body.innerHTML += `<p>ID: ${data.id}</p>`;
        return data; // Return data for potential further chaining
      })
      .catch(error => {
        // Append error message to the DOM
        document.body.innerHTML += `<p>Error: ${error.message}</p>`;
      });
  }
  