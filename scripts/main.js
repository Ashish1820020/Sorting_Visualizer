/* Variable naming convention: <object>_<action>_<objectname>; Example -> Button_click_b1; */

//Variables (used in other js files as well)
var inp_as = document.getElementById('a_size')
var array_size = inp_as.value; //default: 10 bars
var inp_gen = document.getElementById("a_generate");
var inp_aspeed = document.getElementById("a_speed");

var butts_algos = document.querySelectorAll(".algos button"); //giving an array of buttons

var div_sizes = []; // stores the size of the bar
var divs = []; //stores each bars
var margin_size = 0.1;
var cont = document.getElementById("array_container");
cont.style = "flex-direction: row";

//Array generation.
inp_gen.addEventListener("click", generate_array);

function generate_array(){
    cont.innerHTML = "";

    for(var i=0; i<array_size; i++){
        div_sizes[i] = Math.floor(Math.random() * 80);
        divs[i] = document.createElement("div");
        cont.appendChild(divs[i]);
        divs[i].style=" margin:0% " + margin_size + "%; background-color:blue; width:" + (100/array_size-(2*margin_size)) + "%; height:" + (div_sizes[i]) + "%;";
    }
}

// Updating the number of bars based on the input
inp_as.addEventListener("input", update_array_size);

function update_array_size(){
    array_size = inp_as.value;
    generate_array();
}

window.onload = update_array_size();

//Running the appropriate algorithm.
for(var i=0; i<butts_algos.length; i++){
    butts_algos[i].addEventListener("click", runAlgo);
}

function runAlgo(){
    disable_buttons();

    this.classList.add("butt_selected");
    switch(this.innerHTML)
    {
        case "Bubble": Bubble();
                        break;
        case "Selection": Selection_sort();
                        break;
        case "Insertion": Insertion();
                        break;
        case "Merge": Merge();
                        break;
        case "Quick": Quick();
                        break;
        case "Heap": Heap();
                        break;
    }
}

// Disabling the buttons when an algorithm is working
function disable_buttons(){
    for(var i=0;i<butts_algos.length;i++)
    {
        butts_algos[i].classList=[];
        butts_algos[i].classList.add("butt_locked");

        butts_algos[i].disabled=true;
        inp_as.disabled=true;
        inp_gen.disabled=true;
        inp_aspeed.disabled=true;
    }
}