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
     try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', { 
          method: 'post',
          body: JSON.stringify(obj), 
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
        const data = await response.json()
        console.log(obj)
     } catch(e) {
       console.error(e)
     }
    }, 1000);
  }

  sendData()
}

export default oneModule