const body = document.getElementsByTagName("body")[0];

function submitData(name, email){
const configurationData = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
    },
    body: JSON.stringify({
        "name": name,
        "email": email,
    }),
}

    return fetch("http://localhost:3000/users", configurationData)
        .then(function (response) {
            return response.json();
        })
        .then(function (object) {
            addNewContact(object.id);
        })
        .catch(function (error) {
            alert("Unauthorized Access") 
            document.body.textContent = error
        })
}

function addNewContact(newId){
    document.getElementsByTagName("body")[0].textContent = newId
}

submitData();