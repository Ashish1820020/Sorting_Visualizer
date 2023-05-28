
let speed = 6;

inp_aspeed.addEventListener("input", vis_speed);

function vis_speed(){
    let array_speed = inp_aspeed.value;
    switch(parseInt(array_speed)){
        case 1: speed = 15;
                break;
        case 2: speed = 25;
                break;
        case 3: speed = 40;
                break;
        case 4: speed = 80;
                break;
        case 5: speed = 1000;
                break;
    }

    delay_time = 10000/(Math.floor(array_size/10)*speed);      //Decrease numerator to increase speed.
}

let delay_time = 10000/(Math.floor(array_size/10)*speed);      //Decrease numerator to increase speed.
let c_delay = 0;       //This is to updated every div change so that visualization is visible.


// Changing the height, width and color for every occurance
function div_update(cont, height, color){
    console.log(speed+" "+delay_time);
    window.setTimeout(function(){
        cont.style = " margin: 0% " + margin_size + "%; width:" + (100/array_size-(2*margin_size)) + "%; height:" + height + "%; background-color:" + color + ";";
    }, c_delay += delay_time);
}

// Enabling the buttons again 
function enable_buttons(){
    window.setTimeout(function(){
        for(let i=0;i<butts_algos.length;i++)
        {
            butts_algos[i].classList=[];
            butts_algos[i].classList.add("butt_unselected");

            butts_algos[i].disabled=false;
            inp_as.disabled=false;
            inp_gen.disabled=false;
            inp_aspeed.disabled=false;
        }
    },c_delay+= delay_time);
}
