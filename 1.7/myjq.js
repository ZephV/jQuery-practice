// var n = $('#nickname').val(); //val == value
// console.log(n);
// $('#nickname').focus(); // 聚焦
// $('#nickname').select(); //  选择
// $('#nickname').blur(); //  失焦
//  $('#login').submit(); // 提交表单

$('#login-trigger').on('click',function () {
    $('#login').submit();
});