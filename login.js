function adduser(){
player1_name = document.getElementById("player1input").value;
player2_name = document.getElementById("player2input").value;
localStorage.setItem("player1", player1_name);
localStorage.setItem("player2", player2_name);
window.location = "game_page.html";
}