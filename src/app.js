const API_KEY = 'AIzaSyCDrAoWdP91W0vvf86XRGRPzj1NhDuqRBM';
const CHANNEL_ID = 'UCMki_UkHb4qSc8qyEcOHR9A'; // Official NewJeans Channel

async function fetchNewJeansVideos() {
      const url = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=12`;

      try {
            const response = await fetch(url);
            const data = await response.json();
            renderVideos(data.items);
            console.log(url);
            
      } catch (error) {
            console.error("Oops, Bunny! Something went wrong:", error);
      }
}

function renderVideos(videos) {
      const container = document.getElementById('video-grid');
      container.innerHTML = videos.map(video => `
    <div class="video-card">
      <img src="${video.snippet.thumbnails.high.url}" alt="thumbnail">
      <h3>${video.snippet.title}</h3>
      <a href="https://youtube.com/watch?v=${video.id.videoId}" target="_blank">Watch Now</a>
    </div>
  `).join('');
}

fetchNewJeansVideos();