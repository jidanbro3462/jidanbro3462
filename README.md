- 👋<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Happy Birthday Ahoni</title>
  <style>
    body, html {
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100%;
      background-color: black;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      overflow: hidden;
    }
    .scene {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100vh;
      position: absolute;
      top: 0;
      left: 0;
      transition: opacity 2s ease;
    }
    .hidden {
      opacity: 0;
      pointer-events: none;
    }
    .visible {
      opacity: 1;
    }
    .cat {
      width: 150px;
      animation: moveCat 3s ease-in-out;
    }
    @keyframes moveCat {
      0% { transform: translateX(-100vw); }
      100% { transform: translateX(0); }
    }
    .title {
      font-size: 4rem;
      color: #fff;
      text-shadow: 0 0 20px #ff4081;
      animation: popUp 1s ease-in-out forwards;
    }
    @keyframes popUp {
      from { transform: scale(0); opacity: 0; }
      to { transform: scale(1); opacity: 1; }
    }
    .message {
      color: white;
      font-size: 1.5rem;
      padding: 20px;
      text-align: center;
      max-width: 800px;
      animation: fadeInUp 1s ease forwards;
    }
    @keyframes fadeInUp {
      from { transform: translateY(40px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }
  </style>
</head>
<body>
  <audio id="bgm" src="music.mp3" autoplay loop></audio>

  <div id="scene1" class="scene visible" style="background-color: black;"></div>
  <div id="scene2" class="scene hidden" style="background-color: #222; flex-direction: column;">
    <img src="cat-with-candle.gif" class="cat" alt="Cute Cat with Candle" />
  </div>
  <div id="scene3" class="scene hidden" style="flex-direction: column; background-color: #444;">
    <div class="title">Happy Birthday Ahoni</div>
  </div>
  <div id="scene4" class="scene hidden" style="flex-direction: column; background-color: #333;">
    <div class="message" id="messageText">Loading your message...</div>
  </div>
  <div id="scene5" class="scene hidden" style="flex-direction: column; background-color: #222;">
    <img src="two-cats-kissing.gif" class="cat" alt="Cats Kissing" />
  </div>
  <div id="scene6" class="scene hidden" style="background-color: black;"></div>

  <script>
    const scenes = [
      document.getElementById('scene1'),
      document.getElementById('scene2'),
      document.getElementById('scene3'),
      document.getElementById('scene4'),
      document.getElementById('scene5'),
      document.getElementById('scene6')
    ];

    const messages = `Your full personal message will be added here from your drive file.`;

    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    async function playScenes() {
      for (let i = 0; i < scenes.length; i++) {
        scenes.forEach((scene, idx) => {
          scene.classList.remove('visible');
          scene.classList.add('hidden');
        });
        scenes[i].classList.remove('hidden');
        scenes[i].classList.add('visible');

        if (i === 3) {
          document.getElementById('messageText').innerText = messages;
        }

        await delay(4000);
      }
    }

    window.onload = () => {
      playScenes();
    };
  </script>
</body>
</html>
 Hi, I’m @jidanbro3462
- 👀 I’m interested in ...
- 🌱 I’m currently learning ...
- 💞️ I’m looking to collaborate on ...
- 📫 How to reach me ...
- 😄 Pronouns: ...
- ⚡ Fun fact: ...

<!---
jidanbro3462/jidanbro3462 is a ✨ special ✨ repository because its `README.md` (this file) appears on your GitHub profile.
You can click the Preview link to take a look at your changes.
--->
