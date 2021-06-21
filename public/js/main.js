const video_box = document.getElementById("video-box");
//create video stream
const my_video = document.createElement("video");
my_video.muted = true;

let my_video_stream = null;
//allow us the get and use audio and video in browser
navigator.mediaDevices
  .getUserMedia({
    video: true,
    audio: true,
  })
  .then((stream) => {
    my_video_stream = stream;
    console.log("__", stream);
    addVideoStream(my_video, stream);
  })
  .catch((err) => console.log(err));

const addVideoStream = (video, stream) => {
  console.log(video, stream);
  video.srcObject = stream;
  video.addEventListener("loadedmetadata", () => {
    video.play();
  });

  video_box.append(video);
};
