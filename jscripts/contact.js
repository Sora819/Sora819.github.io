nameInput = document.getElementById("name");

function sendContact(){
    msg = document.getElementById("message").value;
    if(getAnonim()){
        window.open('mailto:sora.pisti@gmail.com?subject=Anonim&body='+msg, '_self');
    }else{
        nameValue = nameInput.value;
        window.open('mailto:sora.pisti@gmail.com?subject='+nameValue+'&body='+msg, '_self');
    }

    return false;
}

function setAnonim(){
    if(!getAnonim()){
        nameInput.disabled = false;
        nameInput.required = true;
    }else{
        nameInput.required = false;
        nameInput.disabled = true;
    }

}

function getAnonim(){
    return document.getElementById("anonimigen").checked;
}