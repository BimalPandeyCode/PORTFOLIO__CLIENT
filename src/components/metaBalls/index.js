import React, { useEffect } from "react";
import GSAP from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./index.css";
const MetaBall = () => {
  useEffect(() => {
    let hasWEBGL = true;
    let animate = true;
    GSAP.registerPlugin(ScrollTrigger);

    class Ball {
      constructor(radius) {
        this.radius = radius || 10.0;
        this.pos = [
          Math.random() * (window.innerWidth - 100) + 100,
          Math.random() * (window.innerHeight - 100) + 100,
        ];
        this.vel = 1;
        this.velX = Math.random() <= 0.5 ? 3 : -3;
        this.velY = Math.random() <= 0.5 ? 1 : -1;
      }
    }

    let a = new Ball(10);
    let b = new Ball(10);

    let mousePos = [0, 0];

    const canvas = document.getElementById("metaBallCanvas");

    let resolution = [window.innerWidth, window.innerHeight];

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext("webgl");
    if (!ctx) {
      console.log("Your browser doesnt support webgl");
      hasWEBGL = false;
    }
    if (hasWEBGL) {
      const vertexShader = ctx.createShader(ctx.VERTEX_SHADER);
      const vs = `
        attribute vec4 a_position;
        void main(){
          gl_Position = a_position;
        }
      `;
      ctx.shaderSource(vertexShader, vs);
      ctx.compileShader(vertexShader);

      const fragmentShader = ctx.createShader(ctx.FRAGMENT_SHADER);
      const fs = `precision highp float;
        uniform vec2 mousePos;
        uniform vec2 resolution;
        uniform vec2 a_pos;
        uniform vec2 b_pos;
        uniform vec3 color;
        void main(){
          float dist1 = distance(vec2(gl_FragCoord.x,gl_FragCoord.y),vec2(a_pos.x,a_pos.y));
          float dist2 = distance(vec2(gl_FragCoord.x,gl_FragCoord.y),vec2(b_pos.x,b_pos.y));
          float dist3 = distance(vec2(gl_FragCoord.x,gl_FragCoord.y),vec2(resolution.x/2.0,resolution.y/2.0));
          float dist4 = distance(vec2(gl_FragCoord.x,gl_FragCoord.y),vec2(mousePos.x,mousePos.y));
          float sum = 25.0/dist1+25.0/dist2+25.0/dist3+30.0/dist4;
          vec2 st = gl_FragCoord.xy/resolution;
          if(sum <= 0.4 || (sum >= 0.57 && sum <= 0.61)){
            sum = 0.0;
            gl_FragColor = vec4(sum*0.4,sum,0,sum);
          }else{
            gl_FragColor = vec4(color.x/255.0,color.y*sum/255.0,color.z/255.0,1);
          }
        }
      `;
      ctx.shaderSource(fragmentShader, fs);
      ctx.compileShader(fragmentShader);

      const program = ctx.createProgram();
      ctx.attachShader(program, vertexShader);
      ctx.attachShader(program, fragmentShader);
      ctx.linkProgram(program);

      const vertices = new Float32Array([
        -1,
        -1, // first triangle
        1,
        -1,
        -1,
        1,
        -1,
        1, // second triangle
        1,
        -1,
        1,
        1,
      ]);
      const buffer = ctx.createBuffer();
      ctx.bindBuffer(ctx.ARRAY_BUFFER, buffer);
      ctx.bufferData(ctx.ARRAY_BUFFER, vertices, ctx.STATIC_DRAW);

      let colors = [
        [0, 247, 247], //cyan  gg
        [0, 0, 0], //black gg
        [144, 238, 144], //light pink //gg
        [13, 152, 186], //light blue //gg
        [255, 255, 0], //light yellow gg
        [100, 255, 0], //light green gg
      ];
      let colorIndex = Math.floor(Math.random() * colors.length);
      let color = colors[colorIndex];
      console.log(color);

      const render = () => {
        ctx.useProgram(program);
        program.mousePos = ctx.getUniformLocation(program, "mousePos");
        ctx.uniform2fv(program.mousePos, mousePos);
        program.color = ctx.getUniformLocation(program, "color");
        ctx.uniform3fv(program.color, color);

        program.resolution = ctx.getUniformLocation(program, "resolution");
        ctx.uniform2fv(program.resolution, resolution);
        program.a_pos = ctx.getUniformLocation(program, "a_pos");
        ctx.uniform2fv(program.a_pos, a.pos);
        program.b_pos = ctx.getUniformLocation(program, "b_pos");
        ctx.uniform2fv(program.b_pos, b.pos);

        program.a_position = ctx.getAttribLocation(program, "a_position");
        ctx.enableVertexAttribArray(program.a_position);
        ctx.vertexAttribPointer(program.a_position, 2, ctx.FLOAT, false, 0, 0);
        ctx.drawArrays(ctx.TRIANGLES, 0, vertices.length / 2);
      };

      const updatePos = () => {
        if (animate) {
          if (a.pos[0] >= resolution[0] || a.pos[0] <= 0) {
            a.velX = -a.velX;
          }
          if (a.pos[1] > resolution[1] || a.pos[1] <= 0) {
            a.velY = -a.velY;
          }
          a.pos = [a.pos[0] + a.velX, a.pos[1] + a.velY];

          if (b.pos[0] >= resolution[0] || b.pos[0] <= 0) {
            b.velX = -b.velX;
          }
          if (b.pos[1] > resolution[1] || b.pos[1] <= 0) {
            b.velY = -b.velY;
          }
          b.pos = [b.pos[0] + b.velX, b.pos[1] + b.velY];
          render();
          requestAnimationFrame(updatePos);
        }
      };
      updatePos();
      GSAP.to(".canvasContainer__canvas", {
        scrollTrigger: {
          trigger: ".canvasContainer__canvas",
          start: "bottom top",
          end: "top bottom",
          onLeave: () => (animate = false),
          onEnterBack: () => {
            animate = true;
            updatePos();
          },
        },
      });
      window.addEventListener("mousemove", (e) => {
        mousePos = [e.pageX, resolution[1] - e.pageY];
      });
      window.addEventListener("resize", (e) => {
        resolution = [window.innerWidth, window.innerHeight];
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        ctx.viewport(0, 0, resolution[0], resolution[1]);
      });
    }
  }, []);
  return (
    <>
      <div
        className="canvasContainer"
        style={{ margin: "0", padding: "0", overflow: "hidden" }}
      >
        <canvas
          id="metaBallCanvas"
          className="canvasContainer__canvas"
          style={{ margin: "0", padding: "0", overflow: "hidden" }}
        ></canvas>
      </div>
    </>
  );
};
export default MetaBall;
