/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable react/prop-types */
/* eslint-disable quotes */
const React = require('react');
const Layout = require("./Layout");

function Boulder({ title }) {
  return (
    <Layout title={title}>

      <audio src="ending.mp3" id="ending" />
      <audio src="oneupzv.mp3" id="oneupzv" />
      <audio src="zastmuz.mp3" id="zastmuz" />
      <audio src="level6.mp3" id="level6" />
      <audio src="level5.mp3" id="level5" />
      <audio src="level4.mp3" id="level4" />
      <audio src="level3.mp3" id="level3" />
      <audio src="level2.mp3" id="level2" />
      <audio src="level1.mp3" id="level1" />
      <audio src="sound.wav" id="sound" />
      <audio src="soundalm.wav" id="soundalm" />
      <audio src="exitsound.wav" id="exitsound" />
      <audio src="fly.wav" id="fly" />
      <audio src="buh.mp3" id="buh" />
      <audio src="remoove.mp3" id="remoove" />
      <audio src="buhzem.wav" id="buhzem" />
      <audio src="buhalm.mp3" id="buhalm" />
      <audio src="buhtrup.mp3" id="buhtrup" />
      <audio src="buhtrupalm.mp3" id="buhtrupalm" />
      <audio src="win.wav" id="win" />
      <audio src="firzv.mp3" id="firzv" />
      <audio src="ggg.wav" id="ggg" />
      <audio src="title.mp3" id="title" />
      <audio src="miobzv.wav" id="miobzv" />

      <canvas id="c" width="1000" height="600" />
      <script src="https://code.jquery.com/jquery-2.1.0.js" />
      <canvas id="canvas" width="1000" height="600" />

      <script type="module" src="scripts/index.js" />

    </Layout>
  );
}

module.exports = Boulder;
