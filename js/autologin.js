chrome.storage.local.get(function (item) {
    document.getElementById("loginForm:userId").value = item.uido_id;
    document.getElementById("loginForm:password").value = item.uido_pass;
    document.getElementById("loginForm:loginButton").click();
});