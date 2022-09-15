//"use strict";
// Save the record to storage
function saveurl() {
    var value_id = $('#uido_id').val();
    var value_pass = $('#uido_pass').val();

    $("#resultlb").text('設定が成功しました．');
    chrome.storage.local.set({ uido_id: value_id, uido_pass: value_pass });
}

$('#confirmbtn').on('click', saveurl);

// Initialize the record from storage
chrome.storage.local.get(function (item) {
    $("#uido_id").val(item.uido_id);
    $("#uido_pass").val(item.uido_pass);
});