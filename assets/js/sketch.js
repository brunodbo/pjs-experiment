'use strict';

function sketchProc(processing) {
  var k = 1000, // Define the number of particles
      colours = [],
      getRandomArbitrary = function(min, max) {
        return Math.random() * (max - min) + min;
      },
      p = new processing.PVector(k), // Position
      s = new processing.PVector(k), // Speed
      a = new processing.PVector(k); // Accelaration

    // Setup sketch pad.
    processing.size(window.innerWidth, window.innerHeight);
    processing.background(255);

    // Initial position.
    // To initialise a PVector, we use PVector(x, y).
    for (var i = 0; i < k; i++) {
      p[i] = new processing.PVector(window.innerWidth / 2, window.innerHeight / 2);
      s[i] = new processing.PVector(getRandomArbitrary(-0.01, 0.01), getRandomArbitrary(-0.01, 0.01)); // Initial speed toward the right
      a[i] = new processing.PVector(0, 0);
      // colours[i] = processing.color(0, 0, 0, Math.random());
    }

  // Override draw() function, by default it will be called 60 times per second.
  processing.draw = function() {

    // Update acceleration, speed and position.
    for (i = 0; i < k; i++) {
      a[i] = new processing.PVector(getRandomArbitrary(0, 0.01) - 0.005, getRandomArbitrary(0, 0.01) - 0.005);
      s[i].add(a[i]); // You can’t add vectors together with '+'.
      p[i].add(s[i]); // To do so, you need to call add().
    }

    // Draw the particles
    for (i = 0; i < k; i++) {
       // processing.stroke(colours[i]);
       processing.point(p[i].x, p[i].y); // Use the point primitive
    }
  };
}

var canvas = document.getElementById("sketchpad");
// Attaching the sketchProc() function to the canvas element.
var processingInstance = new Processing(canvas, sketchProc);