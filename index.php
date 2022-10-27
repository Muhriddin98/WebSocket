<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="css/bootstrap.css">
    <link rel="stylesheet" href="css/style.css">
    <title>Chat</title>
</head>
<body>
<div class="container-fluid">
    <div class="row justify-content-center">
        <div class="col-6 pt-4 text-center">
            <h2>WebSocket Chat App</h2>
            <form id="chat" action="" class="form-control">
                <div class="chat-result" id="chat-result">
                    <input type="text" name="chat-user" id="chat-user" placeholder="Ismingiz..." class="form-control">
                    <input type="text" name="chat-message" id="chat-message" placeholder="Xabaringiz..." class="form-control">
                    <input type="submit" value="Yuborish" class="btn btn-info btn-sm">
                </div>
            </form>
        </div>
        <div class="col-6 pt-4">
            <p class="alert alert-warning text-center" id="status"></p>
            <div class="chat-box text-center">

            </div>
        </div>
    </div>
</div>


<script src="js/jquery-3.3.1.js"></script>
<script src="js/script.js"></script>
</body>
</html>
