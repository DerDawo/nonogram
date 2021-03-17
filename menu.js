//Random Zahl
document.getElementById("selectRabdomLevel").addEventListener("click",selectRandomLevel)

function selectRandomLevel(){
    //Alle Level sperren außer die ersten
    var pans = [];
    for(j=0; j < panels.length; j++){
        var children = document.getElementById(panels[j]).children;
        var idArr = [];
        for (var i = 0; i < children.length; i++) {
            idArr.push(children[i].href);
        }
        pans.push(idArr)
    }   
    zz1 = Math.floor(Math.random()*3)
    zz2 = Math.floor(Math.random()*pans[zz1].length)
    window.location.href = pans[zz1][zz2];
}

var panels = ["pan-5","pan-10","pan-15"]

//Cookie Logik
window.addEventListener("load",pageLoad)

function pageLoad(){
    //Wenn kein Cookie existiert, schalte alle level frei
    if(CookieExists()==false){
        //Alle Level nicht sperren
        for(j=0; j < panels.length; j++){
        var children = document.getElementById(panels[j]).children;
        var idArr = [];
            for (var i = 0; i < children.length; i++) {
                idArr.push(children[i].id);
                document.getElementById(idArr[i]).setAttribute("data-locked",false)
            }
        }
    }else if(CookieExists()==true){
        levelAccessibility()
    }
}

function CookieExists(){
    var firstVisit = getCookie("firstVisit");
    if (Boolean(firstVisit)==true) {
        document.getElementById("CBBG").style.display = "none";
        return true;
    } else if (Boolean(firstVisit)==false){
        document.getElementById("CBBG").style.display = "flex";
        return false;
    }
}

//Cookie setzen
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

//Cookie lesen
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}

//Cookies Akzeptieren oder ablehnen
document.getElementById("withoutCookies").addEventListener("click",withoutCookies) 
document.getElementById("acceptCookies").addEventListener("click",withCookies) 

function withoutCookies(){
    document.getElementById("CBBG").style.display = "none";
}

function withCookies(){
    setCookie("firstVisit", false, 365);
    document.getElementById("CBBG").style.display = "none";
    levelAccessibility()
}

function levelAccessibility(){
    //Alle Level sperren außer die ersten
    for(j=0; j < panels.length; j++){
        var children = document.getElementById(panels[j]).children;
        var idArr = [];
        for (var i = 0; i < children.length; i++) {
            idArr.push(children[i].id);
            document.getElementById(idArr[i]).setAttribute("data-locked",true)
            if(i==0){
                document.getElementById(idArr[i]).setAttribute("data-locked",false)
            }
        }
    }
    //Cookies lesen und Levels dementsprechend freischalten
    for(j=0; j < panels.length; j++){
        var children = document.getElementById(panels[j]).children;
        var idArr = [];
        for (var i = 0; i < children.length; i++) {
            idArr.push(children[i].id);
            if(i>0){
                coname = idArr[i]+"_unlocked"
                if(getCookie(coname)=="true"){
                    children[i].setAttribute("data-locked",false)
                }else if(getCookie(coname)=="false"){
                    children[i].setAttribute("data-locked",true)
                }   
            }
        }
    }
    //Style anpassen
    for(j=0; j < panels.length; j++){
        var children = document.getElementById(panels[j]).children;
        var idArr = [];
        for (var i = 0; i < children.length; i++) {
            idArr.push(children[i].id);
            levelstatus = document.getElementById(idArr[i]).getAttribute("data-locked")
            if(levelstatus == "true"){
                document.getElementById(idArr[i]).style.opacity = "0.2"
                document.getElementById(idArr[i]).style.pointerEvents = "none"
                document.getElementById(idArr[i]).style.cursor = "not-allowed"
            }else if(levelstatus == "false"){
                document.getElementById(idArr[i]).style.opacity = "1"
                document.getElementById(idArr[i]).style.pointerEvents = "auto"
                document.getElementById(idArr[i]).style.cursor = "pointer"
            }
        }
    }    
}

//Cookies Löschen in Options
document.getElementById("deleteCookies").addEventListener("click",deleteCookies)

function deleteCookies(){
    document.cookie = "firstVisit=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}
