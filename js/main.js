function chat()
{
    this.nombre ='';
    this.people =[];
    this.messages=[];
    this.chatAvatar= '';
}
function Person(_name, _avatar)
{
    this.name = _name;
    this.avatar = _avatar;
}
function Message(_message, _sender)
{
    this.message = _message;
    this.sender = _sender;
    this.received = false;
}
function Whatsapp()
{
    this.chats = [];
    this.activeChat = null;
    this.searchChat = function(_keyword){};
    this.getChatFromId = function(_chatId){};
    this.drawChatList = function(_htmlTarget){};
    this.drawMessageList = function(){
            var divChat = document.getElementById('chat');
            divChat.innerHTML = '';
        
            for (var i in this.selectedChat.messages){
                if(Object.hasOwnProperty(i)) {
                    console.log(this.selectedChat.messages[i]);
                    this.sendMessage(this.selectedChat.messages[i]);
                    this.sendMessage(this.selectedChat.messages[i], false);
                }
            }
    };
    this.getLastMessage = function(){
            return this.selectedChat.messages[this.selectedChat.messages.length-1];
    };
    this.sendMessage = function(_message, _in){
            var htmlMessageIn = '<div class="w-message w-message-in"><div class="w-message-text"><p>'+ _message.message + '</p><div class="time">14:27</div></div></div>';
            var htmlMessageOut = '<div class="w-message w-message-out"><div class="w-message-text"><p>' + _message.message + '</p><div class="time">14:27</div></div></div>';
            var divChart =document.getElementById('chat');
        
            this.selectedChat.messages.push(_message);
        
		if(_in)
		{
			divChat.innerHTML += htmlMessageIn;
		}else{
			divChat.innerHTML += htmlMessageOut;
		}

		divChat.scrollTop = divChat.scrollHeight;
	};
}




var zapp = new Whatsapp();

var me = Person ('Zeldina');
var user =new Person('Cinthia');

var chat = new chat();

chat.people.push(user);

zapp.chats.push(chat);
zapp.selectedChat = chat;

zapp.sendMessage(new Message('hola',user));
zapp.sendMessage(new Message('que tal?',me));

console.log(zapp.getLastMessage().sender);










window.onload = init;

var inputMessage;
var divChat;
var chatPanel;

function init()
{
    inputMessage = document.getElementById('mensajes');
    divChat = document.getElementById('mensajes');
    
    
    inputMessage.addEventListener('keyup',onInputKeyUp);
}


function onInputKeyUp(evt)
{
    console.log(evt.keyCode);
    if (evt.keyCode == 13)
        {
         zapp.sendMessage(new Message(evt.target.value,me));
         evt.target.value = '';
        }
}
        
        





    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    