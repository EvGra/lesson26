const oneModule = () => {

  let obj 

  const getData = () => {
    fetch('db.json')
      .then(response => response.json())
      .then(data => {
        obj = data
        console.log(obj);
      })
      .catch(error => {
        console.log(error);
      })
  }

  getData()

  async function sendData() {
    setTimeout(() => {

      let xhr = new XMLHttpRequest();
      xhr.open("POST", "https://jsonplaceholder.typicode.com/posts");
      xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
      xhr.send(JSON.stringify(obj));

      xhr.onload = () => console.log(xhr.response);
    }, 1000);
  }

  sendData()
}

export default oneModule