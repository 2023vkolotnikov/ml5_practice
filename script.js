let video;
let noseX, noseY;
let rightEyeX, rightEyeY;
let leftEyeX, leftEyeY;
let leftShoulderX, leftShoulderY;
var img;
function preload() {
  img = loadImage(
    "https://cdn.glitch.com/38941e06-4663-426f-a24f-5aa093b6e04f%2FScreen%20Shot%202018-12-13%20at%207.07.38%20PM.png?1544746107856"
  );
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  video = createCapture(VIDEO);
  video.hide();
  poseNet = ml5.poseNet(video, modelReady);
  poseNet.on("pose", gotPoses);
}

function modelReady() {
  console.log("model is ready");
}

function gotPoses(poses) {
  if (poses.length > 0) {
    noseX = poses[0].pose.keypoints[0].position.x;
    noseY = poses[0].pose.keypoints[0].position.y;
    rightEyeX = poses[0].pose.keypoints[2].position.x;
    rightEyeY = poses[0].pose.keypoints[2].position.y;
    leftEyeX = poses[0].pose.keypoints[1].position.x;
    leftEyeY = poses[0].pose.keypoints[1].position.y;
    leftShoulderX = poses[0].pose.keypoints[5].position.x;
    leftShoulderY = poses[0].pose.keypoints[5].position.y;
  }
  console.log(poses);
}

function draw() {
  image(video, 0, 0);
  fill("red");
  ellipse(noseX, noseY, 40, 40);
  noFill();
  strokeWeight(3);
  rect(rightEyeX - 30, rightEyeY - 20, 60, 40, 10);
  rect(leftEyeX - 30, leftEyeY - 20, 60, 40, 10);
  line(rightEyeX + 30, rightEyeY, leftEyeX - 30, leftEyeY);
  image(img, leftShoulderX - 50, leftShoulderY - 100, 100, 100);
}
// ;
