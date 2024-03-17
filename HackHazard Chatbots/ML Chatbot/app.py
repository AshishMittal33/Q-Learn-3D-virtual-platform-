import streamlit as st

st.set_page_config(layout="wide")

video_code = '''
<div id="player"></div>
<script>
  // Load the YouTube IFrame Player API code asynchronously.
  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // Replace the 'player' element with an <iframe> and
  // YouTube player after the API code downloads.
  var player;
  function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: '100%',
      width: '100%',
      videoId: 'VOpETRQGXy0',
      playerVars: {
        'autoplay': 1,
        'controls': 0,
        'fs': 1,
        'rel': 0,
        'showinfo': 0,
        'modestbranding': 1
      },
      events: {
        'onReady': onPlayerReady,
      }
    });
  }

  // Mute the player and play the video when it's ready.
  function onPlayerReady(event) {
    event.target.mute();
    event.target.playVideo();
    event.target.setPlaybackQuality('hd720');
    var iframe = event.target.getIframe();
    iframe.requestFullscreen();
  }
</script>
'''

st.write(video_code, unsafe_allow_html=True)
