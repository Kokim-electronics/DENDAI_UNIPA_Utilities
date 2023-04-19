chrome.storage.local.get(function (item) {
    if (document.getElementById("loginForm:userId") != undefined) {
        document.getElementById("loginForm:userId").value = item.uido_id;
        document.getElementById("loginForm:password").value = item.uido_pass;
        document.getElementById("loginForm:loginButton").click();
    }
});

if (document.getElementsByClassName("innerInfo")[0].innerText != undefined) {
    if (document.getElementsByClassName("innerInfo")[0].innerText.startsWith('長時間操作が行われなかったため')){
        location.href = 'https://portal.sa.dendai.ac.jp/';
    }
    if (document.getElementsByClassName("innerInfo")[0].innerText.startsWith("別の画面で操作されたため")){
        location.href = 'https://portal.sa.dendai.ac.jp/';
    }
}


if (document.querySelectorAll("[control-id=ControlID-1]")[0] != undefined) {
    document.querySelectorAll("[control-id=ControlID-1]")[0].click

}