function myFunction(){
    if(sessionStorage.getItem("color")){
        document.body.style.backgroundColor= sessionStorage.getItem("color")

    }else{
        document.body.style.backgroundColor="blue"
        sessionStorage.setItem("color","yellow")
    }
}
myFunction()
const line = document.getElementsByTagName("h1")
line.style.color="green"