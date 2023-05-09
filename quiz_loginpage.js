function addUser (){
    Player_1name = document.getElementById("player_1_name").value;  
    Player_2name = document.getElementById("player_2_name").value;

    localStorage.setItem("player_1_name",Player_1name);
    localStorage.setItem("player_2_name",Player_2name);

     window.location = "game_page.html";
}

 