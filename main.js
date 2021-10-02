function main() {
  var canvas = document.getElementById('myCanvas');
  var gl = canvas.getContext('webgl');

  const object_kiri = {
    kiri_color1: [0.926, 0.921, 0.940], //warna badan deodoran
    kiri_color2: [0.175, 0.0236, 0.590], //warna tutup deodoran
    

    /*Kiri*/
    //tambahan seg-kanan
    body_1: [-0.575, 0.52],
    body_2: [-0.55, 0.5],
    body_3: [-0.575, 0.5],

    //tambahan kotak-kanan
    body_4: [-0.575, 0.5],
    body_5: [-0.575, 0.52],
    body_6: [-0.625, 0.52],

    //tambahan kotak-kiri
    body_7: [-0.625, 0.52],
    body_8: [-0.575, 0.5],
    body_9: [-0.625, 0.5],

    //tambahan seg-kiri
    body_10: [-0.625, 0.5],
    body_11: [-0.625, 0.52],
    body_12: [-0.65, 0.5],
   
    //kepala segitiga-kanan
    body_13: [-0.55, 0.5],
    body_14: [-0.5, 0.4],
    body_15: [-0.55, 0.4],

    //kepala kotak-kanan
    body_16: [-0.55, 0.4],
    body_17: [-0.55, 0.5],
    body_18: [-0.65, 0.5],

    //kepala kotak-kiri
    body_19: [-0.65, 0.5],
    body_20: [-0.55, 0.4],
    body_21: [-0.65, 0.4],

    //kepala segitiga-kiri
    body_22: [-0.65, 0.4],
    body_23: [-0.65, 0.5],
    body_24: [-0.7, 0.4],

    //segitiga kiri
    body_25: [-0.7, 0.4],
    body_26: [-0.8, -0.4],
    body_27: [-0.7, -0.4],

    // kotak Triangle tengah-kanan
    body_28: [-0.7, 0.4], 
    body_29: [-0.5, 0.4], 
    body_30: [-0.5, -0.4], 
    
    // kotak Triangle tengah-kiri
    body_31: [-0.7, 0.4], 
    body_32: [-0.5, -0.4], 
    body_33: [-0.7, -0.4], 
    
    //segitiga kanan
    body_34: [-0.5, 0.4],
    body_35: [-0.4, -0.4],
    body_36: [-0.5, -0.4],

    //segitiga kanan-bawah
    tutup_1: [-0.5, -0.4],
    tutup_2: [-0.4, -0.4],
    tutup_3: [-0.5, -0.5],

    //kotak segitiga bawah-atas
    tutup_4: [-0.5, -0.5],
    tutup_5: [-0.5, -0.4],
    tutup_6: [-0.7, -0.4],

    //kotak segitiga bawah-bawah
    tutup_7: [-0.7, -0.4],
    tutup_8: [-0.5, -0.5],
    tutup_9: [-0.7, -0.5],

    //segitiga bawah-kiri
    tutup_10: [-0.7, -0.5],
    tutup_11: [-0.8, -0.4],
    tutup_12: [-0.7, -0.4],

    //tambah bawah seg-kiri
    tutup_13: [-0.65, -0.5],
    tutup_14: [-0.7, -0.5],
    tutup_15: [-0.65, -0.52],

    //tambah bawah kotak kiri
    tutup_16: [-0.65, -0.5],
    tutup_17: [-0.65, -0.52],
    tutup_18: [-0.55, -0.52],

    //tambah bawah kotak kanan
    tutup_19: [-0.55, -0.52],
    tutup_20: [-0.65, -0.5],
    tutup_21: [-0.55, -0.5],

    //tambah bawah seg-kanan
    tutup_22: [-0.55, -0.5],
    tutup_23: [-0.5, -0.5],
    tutup_24: [-0.55, -0.52]
  };

  const object_kanan = {
    kanan_color1: [0.926, 0.921, 0.940], //warna badan deodoran
    kanan_color2: [0.175, 0.0236, 0.590], //warna tutup deodoran

    /*Kanan*/
    //segitiga atas-kiri
    body_1_b: [0.82, 0.3],
    body_2_b: [0.12, 0.1],
    body_3_b: [0.82, 0.1],

    //segitiga atas-kanan
    tutup_1_b: [0.82, 0.1],
    tutup_2_b: [0.82, 0.3],
    tutup_3_b: [0.92, 0.1],

    //tambah kanan-seg atas
    tutup_4_b: [0.92, 0.1],
    tutup_5_b: [0.92, 0.05],
    tutup_6_b: [0.94, 0.05],

    //tambah kanan-seg kiri
    tutup_7_b: [0.94, 0.05],
    tutup_8_b: [0.92, 0.05],
    tutup_9_b: [0.92, -0.05],

    //tambah kanan-seg kanan
    tutup_10_b: [0.92, -0.05],
    tutup_11_b: [0.94, 0.05],
    tutup_12_b: [0.94, -0.05],

    //tambah kanan seg-bawah
    tutup_13_b: [0.94, -0.05],
    tutup_14_b: [0.92, -0.05],
    tutup_15_b: [0.92, -0.1],

    //kotak seg-atas
    body_4_b: [0.82, 0.1],
    body_5_b: [0.12, 0.1],
    body_6_b: [0.12, -0.1],

    //kotak seg-bawah
    body_7_b: [0.12, -0.1],
    body_8_b: [0.82, 0.1],
    body_9_b: [0.82, -0.1],

    //kotak kanan-seg kiri
    tutup_16_b: [0.82, -0.1],
    tutup_17_b: [0.82, 0.1],
    tutup_18_b: [0.92, 0.1],

    //kotak kanan-seg kanan
    tutup_19_b: [0.92, 0.1],
    tutup_20_b: [0.82, -0.1],
    tutup_21_b: [0.92, -0.1],

    //segitiga bawah-kanan
    tutup_22_b: [0.92, -0.1],
    tutup_23_b: [0.82, -0.1],
    tutup_24_b: [0.82, -0.3],

    //segitiga bawah-kiri
    body_10_b: [0.82, -0.3],
    body_11_b: [0.82, -0.1],
    body_12_b: [0.12, -0.1],

    //tambah kiri1-bawah
    body_13_b: [0.12, -0.1],
    body_14_b: [0.12, -0.05],
    body_15_b: [0.07, -0.05],

    //tambah kiri1-kanan
    body_16_b: [0.07, -0.05],
    body_17_b: [0.12, -0.05],
    body_18_b: [0.12, 0.05],

    //tambah kiri1-kiri
    body_19_b: [0.12, 0.05],
    body_20_b: [0.07, -0.05],
    body_21_b: [0.07, 0.05],

    //tambah kiri1-atas
    body_22_b: [0.12, 0.05],
    body_23_b: [0.12, 0.1],
    body_24_b: [0.07, 0.05]
  };

  const vertices = [
    /*Kiri*/
    ...object_kiri.body_1, ...object_kiri.kiri_color1,
    ...object_kiri.body_2, ...object_kiri.kiri_color1,
    ...object_kiri.body_3, ...object_kiri.kiri_color1,
    ...object_kiri.body_4, ...object_kiri.kiri_color1,
    ...object_kiri.body_5, ...object_kiri.kiri_color1,
    ...object_kiri.body_6, ...object_kiri.kiri_color1,

    ...object_kiri.body_7, ...object_kiri.kiri_color1,
    ...object_kiri.body_8, ...object_kiri.kiri_color1,
    ...object_kiri.body_9, ...object_kiri.kiri_color1,
    ...object_kiri.body_10, ...object_kiri.kiri_color1,
    ...object_kiri.body_11, ...object_kiri.kiri_color1,
    ...object_kiri.body_12, ...object_kiri.kiri_color1,

    ...object_kiri.body_13, ...object_kiri.kiri_color1,
    ...object_kiri.body_14, ...object_kiri.kiri_color1,
    ...object_kiri.body_15, ...object_kiri.kiri_color1,
    ...object_kiri.body_16, ...object_kiri.kiri_color1,
    ...object_kiri.body_17, ...object_kiri.kiri_color1,
    ...object_kiri.body_18, ...object_kiri.kiri_color1,

    ...object_kiri.body_19, ...object_kiri.kiri_color1,
    ...object_kiri.body_20, ...object_kiri.kiri_color1,
    ...object_kiri.body_21, ...object_kiri.kiri_color1,
    ...object_kiri.body_22, ...object_kiri.kiri_color1,
    ...object_kiri.body_23, ...object_kiri.kiri_color1,
    ...object_kiri.body_24, ...object_kiri.kiri_color1,

    ...object_kiri.body_25, ...object_kiri.kiri_color1,
    ...object_kiri.body_26, ...object_kiri.kiri_color1,
    ...object_kiri.body_27, ...object_kiri.kiri_color1,
    ...object_kiri.body_28, ...object_kiri.kiri_color1,
    ...object_kiri.body_29, ...object_kiri.kiri_color1,
    ...object_kiri.body_30, ...object_kiri.kiri_color1,

    ...object_kiri.body_31, ...object_kiri.kiri_color1,
    ...object_kiri.body_32, ...object_kiri.kiri_color1,
    ...object_kiri.body_33, ...object_kiri.kiri_color1,
    ...object_kiri.body_34, ...object_kiri.kiri_color1,
    ...object_kiri.body_35, ...object_kiri.kiri_color1,
    ...object_kiri.body_36, ...object_kiri.kiri_color1,

    ...object_kiri.tutup_1, ...object_kiri.kiri_color2,
    ...object_kiri.tutup_2, ...object_kiri.kiri_color2,
    ...object_kiri.tutup_3, ...object_kiri.kiri_color2,
    ...object_kiri.tutup_4, ...object_kiri.kiri_color2,
    ...object_kiri.tutup_5, ...object_kiri.kiri_color2,
    ...object_kiri.tutup_6, ...object_kiri.kiri_color2,

    ...object_kiri.tutup_7, ...object_kiri.kiri_color2,
    ...object_kiri.tutup_8, ...object_kiri.kiri_color2,
    ...object_kiri.tutup_9, ...object_kiri.kiri_color2,
    ...object_kiri.tutup_10, ...object_kiri.kiri_color2,
    ...object_kiri.tutup_11, ...object_kiri.kiri_color2,
    ...object_kiri.tutup_12, ...object_kiri.kiri_color2,

    ...object_kiri.tutup_13, ...object_kiri.kiri_color2,
    ...object_kiri.tutup_14, ...object_kiri.kiri_color2,
    ...object_kiri.tutup_15, ...object_kiri.kiri_color2,
    ...object_kiri.tutup_16, ...object_kiri.kiri_color2,
    ...object_kiri.tutup_17, ...object_kiri.kiri_color2,
    ...object_kiri.tutup_18, ...object_kiri.kiri_color2,

    ...object_kiri.tutup_19, ...object_kiri.kiri_color2,
    ...object_kiri.tutup_20, ...object_kiri.kiri_color2,
    ...object_kiri.tutup_21, ...object_kiri.kiri_color2,
    ...object_kiri.tutup_22, ...object_kiri.kiri_color2,
    ...object_kiri.tutup_23, ...object_kiri.kiri_color2,
    ...object_kiri.tutup_24, ...object_kiri.kiri_color2,

    /*Kanan*/
    ...object_kanan.body_1_b, ...object_kanan.kanan_color1,
    ...object_kanan.body_2_b, ...object_kanan.kanan_color1,
    ...object_kanan.body_3_b, ...object_kanan.kanan_color1,
    ...object_kanan.body_4_b, ...object_kanan.kanan_color1,
    ...object_kanan.body_5_b, ...object_kanan.kanan_color1,
    ...object_kanan.body_6_b, ...object_kanan.kanan_color1,

    ...object_kanan.body_7_b, ...object_kanan.kanan_color1,
    ...object_kanan.body_8_b, ...object_kanan.kanan_color1,
    ...object_kanan.body_9_b, ...object_kanan.kanan_color1,
    ...object_kanan.body_10_b, ...object_kanan.kanan_color1,
    ...object_kanan.body_11_b, ...object_kanan.kanan_color1,
    ...object_kanan.body_12_b, ...object_kanan.kanan_color1,

    ...object_kanan.body_13_b, ...object_kanan.kanan_color1,
    ...object_kanan.body_14_b, ...object_kanan.kanan_color1,
    ...object_kanan.body_15_b, ...object_kanan.kanan_color1,
    ...object_kanan.body_16_b, ...object_kanan.kanan_color1,
    ...object_kanan.body_17_b, ...object_kanan.kanan_color1,
    ...object_kanan.body_18_b, ...object_kanan.kanan_color1,

    ...object_kanan.body_19_b, ...object_kanan.kanan_color1,
    ...object_kanan.body_20_b, ...object_kanan.kanan_color1,
    ...object_kanan.body_21_b, ...object_kanan.kanan_color1,
    ...object_kanan.body_22_b, ...object_kanan.kanan_color1,
    ...object_kanan.body_23_b, ...object_kanan.kanan_color1,
    ...object_kanan.body_24_b, ...object_kanan.kanan_color1,


    ...object_kanan.tutup_1_b, ...object_kanan.kanan_color2,
    ...object_kanan.tutup_2_b, ...object_kanan.kanan_color2,
    ...object_kanan.tutup_3_b, ...object_kanan.kanan_color2,
    ...object_kanan.tutup_4_b, ...object_kanan.kanan_color2,
    ...object_kanan.tutup_5_b, ...object_kanan.kanan_color2,
    ...object_kanan.tutup_6_b, ...object_kanan.kanan_color2,

    ...object_kanan.tutup_7_b, ...object_kanan.kanan_color2,
    ...object_kanan.tutup_8_b, ...object_kanan.kanan_color2,
    ...object_kanan.tutup_9_b, ...object_kanan.kanan_color2,
    ...object_kanan.tutup_10_b, ...object_kanan.kanan_color2,
    ...object_kanan.tutup_11_b, ...object_kanan.kanan_color2,
    ...object_kanan.tutup_12_b, ...object_kanan.kanan_color2,

    ...object_kanan.tutup_13_b, ...object_kanan.kanan_color2,
    ...object_kanan.tutup_14_b, ...object_kanan.kanan_color2,
    ...object_kanan.tutup_15_b, ...object_kanan.kanan_color2,
    ...object_kanan.tutup_16_b, ...object_kanan.kanan_color2,
    ...object_kanan.tutup_17_b, ...object_kanan.kanan_color2,
    ...object_kanan.tutup_18_b, ...object_kanan.kanan_color2,

    ...object_kanan.tutup_19_b, ...object_kanan.kanan_color2,
    ...object_kanan.tutup_20_b, ...object_kanan.kanan_color2,
    ...object_kanan.tutup_21_b, ...object_kanan.kanan_color2,
    ...object_kanan.tutup_22_b, ...object_kanan.kanan_color2,
    ...object_kanan.tutup_23_b, ...object_kanan.kanan_color2,
    ...object_kanan.tutup_24_b, ...object_kanan.kanan_color2

  ];

  var buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);


  var vertexShaderSource = `
      attribute vec2 aPosition;
      attribute vec3 aColor;
      varying vec3 vColor;
      uniform float uChange;
      void main() {
          gl_Position = vec4(aPosition.x, aPosition.y, 1.0, 1.0);
          vColor = aColor;
      }
  `;

  var fragmentShaderSource = `
      precision mediump float;
      varying vec3 vColor;
      void main() {
          gl_FragColor = vec4(vColor, 1.0);
      }
  `;

  var vertexShader = gl.createShader(gl.VERTEX_SHADER);
  gl.shaderSource(vertexShader, vertexShaderSource);
  var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
  gl.shaderSource(fragmentShader, fragmentShaderSource);


  gl.compileShader(vertexShader);
  gl.compileShader(fragmentShader);


  var shaderProgram = gl.createProgram();
  gl.attachShader(shaderProgram, vertexShader);
  gl.attachShader(shaderProgram, fragmentShader);
  gl.linkProgram(shaderProgram);
  gl.useProgram(shaderProgram);


  var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
  gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 5 * Float32Array.BYTES_PER_ELEMENT, 0);
  gl.enableVertexAttribArray(aPosition);
  
  var aColor = gl.getAttribLocation(shaderProgram, "aColor");
  gl.vertexAttribPointer(aColor, 3, gl.FLOAT, false, 5 * Float32Array.BYTES_PER_ELEMENT, 2 * Float32Array.BYTES_PER_ELEMENT);
  gl.enableVertexAttribArray(aColor);


  //speed berdasarkan digit nrp
  var speed = 0.0203;
  var change = 0;
  var uChange = gl.getUniformLocation(shaderProgram, "uChange");

  function moveVertices() {

      if (change < -0.7 || change > 0.7) {
          speed = speed * -1;
      }

      for (let i = 301; i < vertices.length; i += 5) {
          vertices[i] = vertices[i] + speed;
      }
  }


  function render() {
      moveVertices();
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
      change = change + speed;
      gl.uniform1f(uChange, change);

      gl.clearColor(1.0, 1.0, 1.0, 1.0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.drawArrays(gl.TRIANGLES, 0, 118);
      requestAnimationFrame(render);
  }
  requestAnimationFrame(render);
}