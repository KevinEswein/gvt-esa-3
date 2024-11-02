// Get the WebGL context
var canvas = document.getElementById('canvas');
var gl = canvas.getContext('experimental-webgl');

// Pipeline setup
gl.clearColor(1, 1, 1, 1);
// Backface culling
gl.frontFace(gl.CCW);
gl.enable(gl.CULL_FACE);
gl.cullFace(gl.FRONT);

// ---------- Shader ----------
// Compile vertex shader
var vsSource = ''+
  'attribute vec3 pos;'+
  'attribute vec4 col;'+
  'varying vec4 color;'+
  'void main(){'+
  'color = col;'+
  'gl_Position = vec4(pos-0.5, 1);'+
  '}';
var vs = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(vs, vsSource);
gl.compileShader(vs);

// Compile fragment shader
var fsSource = 'precision mediump float;'+
  'varying vec4 color;'+
  'void main() {'+
  'gl_FragColor = color;'+
  '}';
var fs = gl.createShader(gl.FRAGMENT_SHADER);
gl.shaderSource(fs, fsSource);
gl.compileShader(fs);

// Link shader together into a program
var prog = gl.createProgram();
gl.attachShader(prog, vs);
gl.attachShader(prog, fs);
gl.linkProgram(prog);
gl.useProgram(prog);

// TODO - START AUFGABE
// ---------- Vertex data ----------
// Define vertices
var vertices = new Float32Array([
  // Pixel 1
  0.1, 0.8, 0,  0.2, 0.8, 0,  0.1, 0.7, 0,
  0.1, 0.7, 0,  0.2, 0.8, 0,  0.2, 0.7, 0,
  // Pixel 2
  0.2, 0.8, 0,  0.3, 0.8, 0,  0.2, 0.7, 0,
  0.2, 0.7, 0,  0.3, 0.8, 0,  0.3, 0.7, 0,
  // Pixel 3
  0.3, 0.8, 0,  0.4, 0.8, 0,  0.3, 0.7, 0,
  0.3, 0.7, 0,  0.4, 0.8, 0,  0.4, 0.7, 0,
  // Pixel 4
  0.2, 0.7, 0,  0.3, 0.7, 0,  0.2, 0.6, 0,
  0.2, 0.6, 0,  0.3, 0.7, 0,  0.3, 0.6, 0,
  // Pixel 5
  0.1, 0.6, 0,  0.2, 0.6, 0,  0.1, 0.5, 0,
  0.1, 0.5, 0,  0.2, 0.6, 0,  0.2, 0.5, 0,
  // Pixel 6
  0.3, 0.6, 0,  0.4, 0.6, 0,  0.3, 0.5, 0,
  0.3, 0.5, 0,  0.4, 0.6, 0,  0.4, 0.5, 0,
  // Pixel 7
  0.2, 0.5, 0,  0.3, 0.5, 0,  0.2, 0.4, 0,
  0.2, 0.4, 0,  0.3, 0.5, 0,  0.3, 0.4, 0,
  // Pixel 8
  0.1, 0.4, 0,  0.2, 0.4, 0,  0.1, 0.3, 0,
  0.1, 0.3, 0,  0.2, 0.4, 0,  0.2, 0.3, 0,
  // Pixel 9
  0.3, 0.4, 0,  0.4, 0.4, 0,  0.3, 0.3, 0,
  0.3, 0.3, 0,  0.4, 0.4, 0,  0.4, 0.3, 0,
  // Pixel 10
  0.2, 0.3, 0,  0.3, 0.3, 0,  0.2, 0.2, 0,
  0.2, 0.2, 0,  0.3, 0.3, 0,  0.3, 0.2, 0
]);

// Define colors (for each vertex)
var colors = new Float32Array([
  // RGBA colors for each vertex
  0, 1, 0, 1,  0, 1, 0, 1,  0, 1, 0, 1,
  0, 1, 0, 1,  0, 1, 0, 1,  0, 1, 0, 1,
  0, 1, 0, 1,  0, 1, 0, 1,  0, 1, 0, 1,
  0, 1, 0, 1,  0, 1, 0, 1,  0, 1, 0, 1,
  0, 1, 0, 1,  0, 1, 0, 1,  0, 1, 0, 1,
  0, 1, 0, 1,  0, 1, 0, 1,  0, 1, 0, 1,
  0, 1, 0, 1,  0, 1, 0, 1,  0, 1, 0, 1,
  0, 1, 0, 1,  0, 1, 0, 1,  0, 1, 0, 1,
  0, 1, 0, 1,  0, 1, 0, 1,  0, 1, 0, 1,
  0, 1, 0, 1,  0, 1, 0, 1,  0, 1, 0, 1,
  0, 1, 0, 1,  0, 1, 0, 1,  0, 1, 0, 1,
  0, 1, 0, 1,  0, 1, 0, 1,  0, 1, 0, 1,
  0, 1, 0, 1,  0, 1, 0, 1,  0, 1, 0, 1,
  0, 1, 0, 1,  0, 1, 0, 1,  0, 1, 0, 1
]);

// Setup index buffer object
var indices = new Uint16Array([
  0, 1, 2,  3, 4, 5,
  6, 7, 8,  9, 10, 11,
  12, 13, 14,  15, 16, 17,
  18, 19, 20,  21, 22, 23,
  24, 25, 26,  27, 28, 29,
  30, 31, 32,  33, 34, 35,
  36, 37, 38,  39, 40, 41,
  42, 43, 44,  45, 46, 47,
  48, 49, 50,  51, 52, 53,
  54, 55, 56,  57, 58, 59
]);
// TODO - END AUFGABE

// Setup position vertex buffer object
var vboPos = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, vboPos);
gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
// Bind vertex buffer to attribute variable
var posAttrib = gl.getAttribLocation(prog, 'pos');
gl.vertexAttribPointer(posAttrib, 3, gl.FLOAT, false, 0, 0);
gl.enableVertexAttribArray(posAttrib);

// ---------- Buffer ----------
// Setup color vertex buffer object
var vboCol = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, vboCol);
gl.bufferData(gl.ARRAY_BUFFER, colors, gl.STATIC_DRAW);
// Bind vertex buffer to attribute variable
var colAttrib = gl.getAttribLocation(prog, 'col');
gl.vertexAttribPointer(colAttrib, 4, gl.FLOAT, false, 0, 0);
gl.enableVertexAttribArray(colAttrib);

var ibo = gl.createBuffer();
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, ibo);
gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, indices, gl.STATIC_DRAW);
ibo.numberOfElements = indices.length;

// Clear framebuffer and render primitives
gl.clear(gl.COLOR_BUFFER_BIT);
gl.drawElements(gl.TRIANGLES, ibo.numberOfElements, gl.UNSIGNED_SHORT, 0);