var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/kolkata");
    var responseJSON = await response.json();

    console.log(responseJSON);

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
 

    console.log(datetime+"  " +hour);

    if(hour>=0 && hour<=2){
        bg = "sunset11.png";
    }else if(hour>=2 && hour<=4){
        bg = "sunset12.png";
    }else if(hour>=4 && hour<=6){
        bg = "sunrise1.png";
    }else if(hour>=6 && hour<=8){
        bg = "sunrise2.png";
    }else if(hour>=8 && hour<=10){
            bg = "sunrise3.png";
    }else if(hour>=10 && hour<=12){
            bg = "sunrise4.png";
    }else if(hour>=12 && hour<=14){
            bg = "sunrise5.png";
    }else if(hour>=14 && hour<=16){
            bg = "sunrise6.png";
    }else if(hour>=16&& hour<=18){
                bg = "sunset7.png";
    }else if(hour>=18 && hour<=20){
                bg = "sunset8.png";
    }else if(hour>=20 && hour<=22){
                bg = "sunset9.png";
    }else if(hour>=10 && hour<=24){
                bg = "sunset12.png";
    }
backgroundImg = loadImage(bg);
