player_1_score = 0
player_2_score = 0
question_turn = "player_1_name"
answer_turn = "player_2_name"
player_1_name = localStorage.getItem("player_1_name");
player_2_name = localStorage.getItem("player_2_name");

document.getElementById("place").innerHTML=player_1_name;
document.getElementById("cake").innerHTML=player_2_name

document.getElementById("ask").innerHTML="Question turn  " + player_1_name
document.getElementById("turn").innerHTML="Answer turn  " + player_2_name

function take() {
   choice = document.getElementById("choice").value;
   game= choice.toLowerCase();
   label = game.charAt(1);
   home = Math.floor(game.length/2);
   safe = game.charAt(home);
   place = game.charAt(game.length-1);
   cage = game.replace(label,"_");
   pace = cage.replace(safe,"_");
   taste = pace.replace(place,"_");
   space = "<h4 id='bar' >  q."+ taste + "</h4>"
   input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
     row = space + input_box + check_button ; 
     document.getElementById("output").innerHTML = row; 
     document.getElementById("choice").value = "";}
     function check() 
     {
        get_answer = document.getElementById("input_check_box").value;
         answer = get_answer.toLowerCase();
   if (answer == game )
   { 

   

   if (answer_turn == "player_1_name")
   {
     player_1_score = player_1_score + 1;
     document.getElementById("faith").innerHTML = player_1_score;
   }
   else
   {
       player_2_score = player_2_score + 1;
       document.getElementById("color").innerHTML = player_2_score;
   }
}
   if (question_turn == "player_1_name")
   {
       question_turn == "player_2_name"
       document.getElementById("ask").innerHTML = "question_turn" + player_2_name;
   }
   else
   {
       question_turn == "player_1_name"
       document.getElementById("ask").innerHTML = "question_turn" + player_1_name;
   }

   if (answer_turn == "player_1_name")
   {
       answer_turn == "player_2_name"
       document.getElementById("turn").innerHTML = "answer_turn" + player_2_name;
   }
   else
   {
       answer_turn == "player_1_name"
       document.getElementById("turn").innerHTML = "answer_turn" + player_1_name;
   }
}
