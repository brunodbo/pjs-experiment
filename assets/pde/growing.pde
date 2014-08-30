//import processing.video.*;

//import moviemaker.*;
//MovieMaker mm;


PVector[] p, s, a; //Defines the particles
int k; // Define the number of particles
color[] colours;

void setup() {
 // mm = new MovieMaker(this,width,height,"p5test.mov", MovieMaker.JPEG, MovieMaker.HIGH,30);

  size(1800, 1000);
  background(255);
  noCursor();
  k = 1000; // We want 20 of them apples

  // Define the size of the particle array by the number
  // / of particle we want
  p = new PVector[k];
  s = new PVector[k];
  a = new PVector[k];
  colours = new color[k];

  // Initialise the acceleration, speed and position arrays.
  for (int i=0; i<k; i++) {
    // Initial position at the left of the screen, with random y
    // To initialise a PVector, we use PVector(x,y)
// / with values for x and y
    p[i] = new PVector(500, 300);
    s[i] = new PVector(random(-0.01,0.01),random(-0.01,0.01)); // Initial speed toward the right
    a[i] = new PVector(0,0);
    colours[i] = color(0,0,0,random(255));
  }
}


void draw() {
  // Update acceleration, speed and position
  for (int i=0; i<k; i++) {
    a[i] = new PVector(random(0.01)-0.005, random(0.01)-0.005);
    s[i].add(a[i]); // You can’t add vectors together with +
    p[i].add(s[i]); // / to do so, you need to call add.
  }

  // Draw the particles
  for (int i=0; i<k; i++) {
   stroke(colours[i]);
      point(p[i].x, p[i].y); // Here we use the point primitive
  }
 //   mm.addFrame(pixels,width,height);
}

void keyPressed(){
//mm.finishMovie();
saveFrame("test4_###.png");

}
