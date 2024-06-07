const endPoint = "https://jsonplaceholder.typicode.com/users";

async function restAPI(){
    const api = await fetch(endPoint);
    const data = await api.json();
    for (let i = 0; i < data.length; i ++){
        console.log('name : '+(data[i].name))
    }
}
restAPI();