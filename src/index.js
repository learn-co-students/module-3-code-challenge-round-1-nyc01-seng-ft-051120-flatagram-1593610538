// write your code here
const BASE_URL = "http://localhost:3000"
const IMGES_URL = `${BASE_URL}/images/1`
const COMMENTS_URL = `${BASE_URL}/comments`

document.addEventListener("DOMContentLoaded",()=>{
  fetcher(IMGES_URL,displayDog,console.log)
})

function fetcher (url,successCallback,errorCallback,data = {},method="GET"){
  fetch(url,createServerData(data,method))
  .then(resp => resp.json())
  .then (data => successCallback(data))
  .catch(err => errorCallback(err))
}

function createServerData(data,method){
  const serverData = {
    method: method,
    headers:{
      'Content-Type' : 'application/json',
      'Accept':'application/json'
    }
  }

  if (!isEmptyObject(data)){
    serverData['body'] = JSON.stringify(data)
  }
  return serverData
}

function isEmptyObject(data){
  return Object.keys(data).length === 0;
}

function displayDog(dog){
  const imageCard =  document.querySelector(".image-card")
  console.log(imageCard);
  
}