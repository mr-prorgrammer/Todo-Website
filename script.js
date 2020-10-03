// You Forgot to add script file, 
    
    var text = document.getElementById("text");
		var textbox = document.getElementById("textbox");
		var button = document.getElementById("button");

		button.addEventListener("click", function () {
			var newMessage = document.createElement("li");
			newMessage.innerHTML = textbox.value;
			text.appendChild(newMessage);
			textbox.value = "";
		});
