//"use strict";
// Save the record to storage
function saveurl() {
    var value_id = $('#uido_id').val();
    var value_pass = $('#uido_pass').val();

    var gakki = new Array(3);
    gakki[1] = document.getElementById("rdo_gakki1").checked;
    gakki[2] = document.getElementById("rdo_gakki2").checked;

    var value_gakki = 1;
    for (var n = 1; n <= 3; n++) {
        if (gakki[n]) {
            value_gakki = n;
        }
    }

    //console.log($("#kamokuary").val().length);

    var arr_kamoku
    if ($("#kamokuary").val().length == 0) {
        arr_kamoku = ""
    } else {
        arr_kamoku = $("#kamokuary").val().split(',');
    }

    $("#resultlb").text('設定が成功しました．');
    chrome.storage.local.set({ uido_id: value_id, uido_pass: value_pass, gakki: value_gakki, kamoku: arr_kamoku });
}

$('#confirmbtn').on('click', saveurl);

// Initialize the record from storage
chrome.storage.local.get(function (item) {
    $("#uido_id").val(item.uido_id);
    $("#uido_pass").val(item.uido_pass);
    document.querySelector("input[id=rdo_gakki" + item.gakki + "]").checked = true;
    $("#kamokuary").val(item.kamoku)
});