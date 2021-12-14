var passhash=CryptoJS.MD5("admin").toString();

fetch('http://localhost:3000/InsertUserWeb?uid=9-852e9d2b-f980-42cd-89cc-84b9a883cff3&bNev=G%C3%A9za&jelszo=Jelsz%C3%B3&fNev=D%C3%A1vid%20menne%20a%20boltba%20de%20nagyon&jog=0&aktiv=0',{method: 'POST'})
    .then(response => response.json())
    .then(data =>console.log(data));   	


