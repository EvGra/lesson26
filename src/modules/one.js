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

  const sendData = () => {
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/posts', { 
      method: 'post',
      body: JSON.stringify(obj), 
    })
    .then(response => response.json())
      .then(data => {
        console.log(obj);
      })
      .catch(error => {
        console.log(error);
      })
    }, 1000);
  }

  sendData()
}

export default oneModule