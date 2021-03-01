const request = new Request();
const ui =new UI();

let loader= false;
const loaderEvent = document.getElementById("loader-page")


eventListener=()=>{
    window.addEventListener("scroll",()=>scrollScrenn())
    document.addEventListener("DOMContentLoaded",()=>getPhotosFromApi())
    
    
}
eventListener()



getPhotosFromApi=()=>{
    request.get()
    .then(res => ui.showPhotosOnTheScreen(res))
    
    setTimeout(() => {
        loader=true  
    }, 3000);
   
   
 
}

scrollScrenn=()=>{
    if(window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && loader===true){
        loaderEvent.style.display="block"
        setTimeout(() => {
             loaderEvent.style.display="none"
        },1000);
        getPhotosFromApi()
        loader=false
    }
}

