wget -O opencv.js https://docs.opencv.org/master/opencv.js
node separateBinaryFile.js
npx js-beautify opencv.js -r
