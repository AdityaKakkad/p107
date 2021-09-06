function setup(){
    createCanvas(640, 480);
    video = createCapture(VIDEO);
    video.size(640, 480);
    background(51);
    button = createButton('TAKE SNAPSHOT');
    button.mousePressed(takesnap);
    button = createButton('SAVE IMAGE')
    button.mousePressed(save);
}

function takesnap(){
    image(video, 0, 0);
}

function snap(){
    save("snap.png");
}

console.log('ml5 version=', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/fWGKIE8_Y/model.json');