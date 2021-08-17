// Add your code here
function submitData(usersName, usersEmail){
    const formData = {
        name: usersName,
        email: usersEmail
      };

    const configurationObject = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      };
      
    return fetch("http://localhost:3000/users", configurationObject)
    .then(function(response) {
        return response.json();
    })
    .then(function(object) {
        let p = document.createElement('p');
        p.textContent = object.id;
        document.querySelector('body').appendChild(p);
    })
    .catch(function(error) {
        let p = document.createElement('p');
        p.textContent = error.message;
        document.querySelector('body').appendChild(p);
    })
}
