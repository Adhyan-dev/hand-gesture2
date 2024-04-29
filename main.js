Webcam.set({
    width:350,
    height:300,
    image_format: "png",
    png_quality: 90 
});
camera = document.getElementById("camera");
Webcam.attach("#camera");


function take_snapshot()
{
    Webcam.snap(function(data_uri)
    {
    document.getElementById("result").innerHTML = '<img  id="image_captured" src="'+data_uri+'">';
    }  );

}
console.log("ml5.version",ml5.version); 

classifier.classify = 'https://teachablemachine.withgoogle.com/models/eb7GG8agw/model.json',ModelLoaded;

function ModelLoaded()
{
    console.log("Model Loaded!");
}
function speak()
{
    var synth = window.speechSynthesis;
    speak_data_1 = "The first prediction is"+ prediction_1;
    speak_data_2 = "And the second prediction is"+ prediction_2;
    var utterthis = new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
    synth.speak(utterthis);

}
function check()
{
    img = document.getElementById('image_captured');
    classifier.classify(img,gotresult);
}
function gotresult(error,results)
{
    if (error)
    {
        console.error(error);
    }
    else
    {
        console.log(results);
        document.getElementById("result_emotion_name").innerHTML = results[0].label;
        document.getElementById("result_emotion_name2").innerHTML = results[1].label;
        prediction_1 = results[0].label;
        prediction_2 = results[1].label;
        speak();
        if (results[0].label == "thumb's up")
        {
            document.getElementById("update_emoji").innerHTML = "&#128077;";
        }
        if (results[0].label == "Victory")
        {
            document.getElementById("update_emoji").innerHTML = "&#128406;";
        }
        if (results[0].label == "amazing")
        {
            document.getElementById("update_emoji").innerHTML = "&#128076;";
        }



        if (results[1].label == "thumb's up")
        {
            document.getElementById("update_emoji2").innerHTML = "&#128077;";
        }
        if (results[1].label == "Victory")
        {
            document.getElementById("update_emoji2").innerHTML = "&#128406;";
        }
        if (results[1].label == "amazing")
        {
            document.getElementById("update_emoji2").innerHTML = "&#128076;";
        }
        
        


    }

    
    
}






    

