noseX = 0;
noseY = 0;

function preload()
{
    mustache_img = loadImage('https://i.postimg.cc/8C6yyWQH/m.png');
}

function draw()
{
image(video,0,0,300,300);
image(mustache_img,noseX,noseY,50,50);
}

function setup()
{
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotposes);
}

function modelLoaded()
{
    console.log("posenet is initialized");
}

function take_snapshot()
{
    save("myfilter.png");
}

function gotposes(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x-20;
        noseY = results[0].pose.nose.y-10;
        console.log("nose x =" + results[0].pose.nose.x);
        console.log("nose y =" + results[0].pose.nose.y);
    }
}

