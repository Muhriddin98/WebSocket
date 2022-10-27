function message(text, status){
    $('#status').append(text);
    if(status == "200"){
        $('#status').removeClass('alert-warning');
        $('#status').addClass('alert-success');
    }
    else if(status == "404" || status == "500"){
        $('#status').removeClass('alert-warning');
        $('#status').addClass('alert-danger');
    }
}
$( document ).ready(function() {
    function messages(text) {
        let arr = text.split("&");
        let user = '';
        let messegs = [];
        if(user == ''){
            user = arr[0].toString();
        }
        if (arr[1].toString() != "" && arr[0].toString() != "->"){
            messegs.push(arr[1]);
            $('.chat-box').append(user);
            $('.chat-box').append(messegs);
        }
    }
    let socket = new WebSocket("ws://localhost:8000/WebSocketChat/server.php");
    socket.onopen = function (){
        message("Bog'lanish o'rnatildi", "200");
    }
    socket.onerror = function (error){
        message("Bog'lanishda xato ", "404");
    }
    socket.onclose = function (){
        message(" Bog'lanish uzildi", "500");
    }
    socket.onmessage = function (event){
        let data = JSON.parse(event.data);
        messages(data.message);
    }
    $("#chat").on('submit', function (e){
        e.preventDefault();
        let message = {
            chat_message:$("#chat-message").val(),
            chat_user:$("#chat-user").val(),
        };
        $("#chat-user").attr("type","hidden");
        socket.send(JSON.stringify(message));
    })
});