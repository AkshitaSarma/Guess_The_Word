function add_user(){
    player_name_1 = document.getElementById("player_name_input_1").value;
    player_name_2 = document.getElementById("player_name_input_2").value;
    localStorage.setItem("player_name_1", player_name_1);
    localStorage.setItem("player_name_2", player_name_2);
    window.location= "game_page.html";
}