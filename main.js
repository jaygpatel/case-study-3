
webcam.set({


    width:310,
    height:300,
    image_format:'png',
    png_quality:90,

    canstraints:{

        facingMode:"environment"

    }

});

camera = document.getElementById("camera");
webcam.attach('#camera');

function  take_snapshot() {

    webcam.take_snapshot(funtion(data_uri) {
        document.getElementById("results").innerHTML = '<img id ="captuured_image"src="'+data_uri+'"/>';

    };

    
}
console.log('ml5 version:', ml5.version);
classifier = ml5.imageClassifier('mobileNet',modleLoaded);



funtion check(){

    
    img = docuument.getElementById('captured_image');
    classifier.classify(img, golResult);

}

function gotresult(console.error , results){
    
    if (console.error(){

        console.error(error);
   }else{

    console.log(results);
    document.getElementById("edject_name").innerHTML = results[0]. label;

   }

}
