document.getElementById("tut1-tf-1-1").addEventListener("click",changeStatus);
document.getElementById("tut2-tf-1-1").addEventListener("click",changeStatus);
document.getElementById("tut2-tf-1-2").addEventListener("click",changeStatus);
document.getElementById("tut2-tf-1-3").addEventListener("click",changeStatus);
document.getElementById("tut2-tf-1-4").addEventListener("click",changeStatus);
document.getElementById("tut2-tf-1-5").addEventListener("click",changeStatus);
document.getElementById("tut3-tf-1-1").addEventListener("click",changeStatus);
document.getElementById("tut3-tf-1-2").addEventListener("click",changeStatus);
document.getElementById("tut3-tf-1-3").addEventListener("click",changeStatus);
document.getElementById("tut3-tf-1-4").addEventListener("click",changeStatus);
document.getElementById("tut3-tf-1-5").addEventListener("click",changeStatus);
document.getElementById("tut3-tf-2-1").addEventListener("click",changeStatus);
document.getElementById("tut3-tf-2-2").addEventListener("click",changeStatus);
document.getElementById("tut3-tf-2-3").addEventListener("click",changeStatus);
document.getElementById("tut3-tf-2-4").addEventListener("click",changeStatus);
document.getElementById("tut3-tf-2-5").addEventListener("click",changeStatus);
document.getElementById("tut4-tf-1-1").addEventListener("click",changeStatus);
document.getElementById("tut4-tf-1-2").addEventListener("click",changeStatus);
document.getElementById("tut4-tf-1-3").addEventListener("click",changeStatus);
document.getElementById("tut4-tf-1-4").addEventListener("click",changeStatus);
document.getElementById("tut4-tf-1-5").addEventListener("click",changeStatus);
document.getElementById("tut4-tf-2-1").addEventListener("click",changeStatus);
document.getElementById("tut4-tf-2-2").addEventListener("click",changeStatus);
document.getElementById("tut4-tf-2-3").addEventListener("click",changeStatus);
document.getElementById("tut4-tf-2-4").addEventListener("click",changeStatus);
document.getElementById("tut4-tf-2-5").addEventListener("click",changeStatus);
document.getElementById("tut4-tf-3-1").addEventListener("click",changeStatus);
document.getElementById("tut4-tf-3-2").addEventListener("click",changeStatus);
document.getElementById("tut4-tf-3-3").addEventListener("click",changeStatus);
document.getElementById("tut4-tf-3-4").addEventListener("click",changeStatus);
document.getElementById("tut4-tf-3-5").addEventListener("click",changeStatus);
document.getElementById("tut4-tf-4-1").addEventListener("click",changeStatus);
document.getElementById("tut4-tf-4-2").addEventListener("click",changeStatus);
document.getElementById("tut4-tf-4-3").addEventListener("click",changeStatus);
document.getElementById("tut4-tf-4-4").addEventListener("click",changeStatus);
document.getElementById("tut4-tf-4-5").addEventListener("click",changeStatus);
document.getElementById("tut4-tf-5-1").addEventListener("click",changeStatus);
document.getElementById("tut4-tf-5-2").addEventListener("click",changeStatus);
document.getElementById("tut4-tf-5-3").addEventListener("click",changeStatus);
document.getElementById("tut4-tf-5-4").addEventListener("click",changeStatus);
document.getElementById("tut4-tf-5-5").addEventListener("click",changeStatus);

ist = 0

function changeStatus(){
    status = this.getAttribute("data-ist")
    soll = this.getAttribute("data-soll")
    tutname = this.id.split("-")[0]

    if(status==0){
        document.getElementById(this.id).setAttribute("data-ist","1")
        if(soll==0){
            document.getElementById(this.id).style.backgroundColor = "red"
            ist-=1
        }else if(soll==1){
            document.getElementById(this.id).style.backgroundColor = "black"
            ist+=1
        }
    }else if(status==1){
        document.getElementById(this.id).setAttribute("data-ist","0")
        if(soll==0){
            document.getElementById(this.id).style.backgroundColor = "#E5DDCE"
            ist+=1
        }else if(soll==1){
            document.getElementById(this.id).style.backgroundColor = "#E5DDCE"
            ist-=1
        }
    }
    checkforWin(this,ist)
}

function checkforWin(tut,is){
    tutname = tut.id.split("-")[0]
    if(is>35){
        document.getElementById("tut4but").style.opacity = 1;
        document.getElementById("tut4but").style.pointerEvents = "all";
    }else if(is>13){
        document.getElementById("tut3but").style.opacity = 1;
        document.getElementById("tut3but").style.pointerEvents = "all";
    }else if(is>5){
        document.getElementById("tut2but").style.opacity = 1;
        document.getElementById("tut2but").style.pointerEvents = "all";
    }else if(is>0){
        document.getElementById("tut1but").style.opacity = 1;
        document.getElementById("tut1but").style.pointerEvents = "all";
    }
}
