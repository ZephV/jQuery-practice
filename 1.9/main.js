// var form = $('#search');
// var input = $('input#username');
// var result = $('#result');
//
// form.on('submit',function(e){
//     e.preventDefault();
//     username = input.val();
//     $.ajax('http://api.github.com/users/'+username)
//         .done(function(data){
//             var html =
//                 '<div>用户名: '+ data.login + '</div>' +
//                 '<div>介 绍 : '+ (data.bio || 无) + '</div>';
//             result.html(html);
//         })
// });


// var data = $.getJSON('http://api.github.com/users/biaoyansu');
// console.log(data);

$.ajax('url',{
    methods: 'post',
    data:{
        username:'asd',
        password:'asdf',
    }
});