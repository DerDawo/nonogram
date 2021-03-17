window.onload = function add_play_func(){
    var cols_ammount = 10+1;
    var rows_ammount = 10+1;

    for(i=0;i<rows_ammount;i++){
        for(j=0;j<cols_ammount;j++){
            if(i==0||j==0){
            }else{
                var_id = "tf-"+(i)+"-"+(j)
                document.getElementById(var_id).addEventListener("mousedown",checksoll)
            }
        }
    }
}

function checksoll(){
    var ist = this.getAttribute("data-ist")
    var soll = this.getAttribute("data-soll")
    if(soll == 0){
        if(ist==0){
            this.setAttribute("data-ist",1)
            this.style.backgroundColor = "brown"
        }else if(ist==1){
            this.setAttribute("data-ist",0)
            this.style.backgroundColor = "#00000000"
        }
    } else if(soll == 1){
        if(ist==1){
            this.setAttribute("data-ist",0)
            this.style.backgroundColor = "#00000000"
        }else if(ist==0){
            this.setAttribute("data-ist",1)
            this.style.backgroundColor = "black"
        }
    }
    checkForWin()
} 

function checkForWin(){
    var cols_ammount = 10+1;
    var rows_ammount = 10+1;
    //Felder, die richtig sein müssen
    var win_conditi = (cols_ammount-1)*(rows_ammount-1)
    //Felder, die richtig sind
    var act_account = 0
    for(i=1;i<rows_ammount;i++){
        for(j=1;j<cols_ammount;j++){
            var_id = "tf-"+(i)+"-"+(j);
            ist = document.getElementById(var_id).getAttribute("data-ist");
            soll = document.getElementById(var_id).getAttribute("data-soll");
            if(ist==soll){
               //erhöhe alle richtigen Felder um 1 für jedes richtige Feld
               act_account+=1
               document.getElementById("pro-bar-inner").style.width = (act_account/win_conditi)*300+"px";
               document.getElementById("progress-percentage").innerHTML = Math.round((act_account/win_conditi)*10000)/100+"%"
            }else{
                document.getElementById("pro-bar-inner").style.width = (act_account/win_conditi)*300+"px";
                document.getElementById("progress-percentage").innerHTML = Math.round((act_account/win_conditi)*10000)/100+"%"
            }
        }
    }
    if(win_conditi==act_account){
        coname = String(document.getElementsByTagName("h3")[0].id.split("_")[0]+"_"+document.getElementsByTagName("h3")[0].id.split("_")[1]+"_"+String((Number(document.getElementsByTagName("h3")[0].id.split("_")[2])+1)))+"_"+"unlocked"
        setCookie(coname, true, 365)
        document.getElementById("win-div").style.display = "flex";
    }
}   

//Cookie setzen
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

