   
		var preloader = document.getElementById("loading");
		function myFunction(){
			preloader.style.display = 'none'
		};
var x = document.getElementById("myAudio"); 

function playAudio() { 
  x.play()
  ; 
} 
const downloadBtn = document.querySelector(".download-btn");
  const countdown = document.querySelector(".countdown");
  const pleaseWaitText = document.querySelector(".pleaseWait-text");
  const manualDownloadText = document.querySelector(".manualDownload-text");
  const manualDownloadLink = document.querySelector(".manualDownload-link");
  var timeLeft = 5;

  downloadBtn.addEventListener("click", () => {
    downloadBtn.style.display = "none";
    countdown.innerHTML = " <span>" + timeLeft + "</span> seconds."  //for quick start of countdown

    var downloadTimer = setInterval(function timeCount() {
      timeLeft -= 1;
      countdown.innerHTML = " <span>" + timeLeft + "</span> seconds.";

      if(timeLeft <= 0){
        clearInterval(downloadTimer);
        pleaseWaitText.style.display = "block";
        let download_href = "friend/index.html"; //enter the downlodable file link here
        window.location.href = download_href;
        manualDownloadLink.href = download_href;
        setTimeout(() => {
          pleaseWaitText.style.display = "none";
        manualDownloadText.style.display = "block"
        }, 4000);
      }
    }, 1000);
  });
  function btn1() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
  }
