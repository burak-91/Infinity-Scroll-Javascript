class UI{
    constructor(){
        this.image= document.getElementById("image-container")
    }
    showPhotosOnTheScreen(photos){
        photos.forEach(photo => {

        const img=document.createElement("img");
        img.setAttribute("src",photo.urls.regular,"alt",photo.urls.description,"class","image")
        
        this.image.appendChild(img)
        });

    }
}