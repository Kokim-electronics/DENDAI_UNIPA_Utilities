chrome.storage.local.get(function (item) {
    if (document.getElementById("loginForm:userId") != undefined) {
        document.getElementById("loginForm:userId").value = item.uido_id;
        document.getElementById("loginForm:password").value = item.uido_pass;
        document.getElementById("loginForm:loginButton").click();
    }
});