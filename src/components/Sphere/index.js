import React, { useEffect } from "react";

const Sphere = () => {
  let mouseOnCanvas = false;
  useEffect(() => {
    let animate = true;
    const canvas = document.getElementById("icoSphere");
    let resolution = {
      width: window.innerWidth / 2,
      height: window.innerHeight,
    };
    if (window.innerWidth < 900) {
      if (window.innerWidth >= window.innerHeight) {
        resolution = {
          width: window.innerWidth,
          height: window.innerHeight,
        };
      } else {
        resolution = {
          width: window.innerWidth,
          height: window.innerWidth,
        };
      }
    }
    canvas.width = resolution.width;
    canvas.height = resolution.height;
    const ctx = canvas.getContext("2d");

    let rotate = { x: 0, y: 0 };
    class point2d {
      constructor(x, y) {
        this.x = x;
        this.y = y;
      }
    }

    class point3d {
      constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
      }
    }
    let icoSphere = [
      new point3d(0, 0, 1),
      new point3d(0.276385, 0.85064, 0.447215),
      new point3d(-0.7236, 0.52572, 0.447215),
      new point3d(-0.276385, 0.85064, -0.447215),
      new point3d(-0.894425, 0, -0.447215),
      new point3d(0, 0, -1),
      new point3d(-0.276385, -0.85064, -0.447215),
      new point3d(-0.7236, -0.52572, 0.447215),
      new point3d(0.276385, -0.85064, 0.447215),
      new point3d(0.894425, 0, 0.447215),
      new point3d(0.7236, 0.52572, -0.447215),
      new point3d(0.7236, -0.52572, -0.447215),
      new point3d(0, 0, 0),
    ];

    let icoSphere2d = [];
    const rotateX = (radian) => {
      for (let i = 0; i < icoSphere.length; i++) {
        let y =
          icoSphere[i].y * Math.cos(radian) - icoSphere[i].z * Math.sin(radian);
        let z =
          icoSphere[i].y * Math.sin(radian) + icoSphere[i].z * Math.cos(radian);
        icoSphere[i].y = y;
        icoSphere[i].z = z;
      }
    };
    const rotateY = (radian) => {
      for (let i = 0; i < icoSphere.length; i++) {
        let x =
          icoSphere[i].x * Math.cos(radian) + icoSphere[i].z * Math.sin(radian);
        let z =
          icoSphere[i].z * Math.cos(radian) - icoSphere[i].x * Math.sin(radian);
        icoSphere[i].x = x;
        icoSphere[i].z = z;
      }
    };
    const projectTo2d = () => {
      icoSphere2d = [];
      let d = 1.6;
      let scale = resolution.width / 2.5;
      icoSphere.forEach((ele) => {
        icoSphere2d.push(
          new point2d(
            (ele.x * scale) / (d - ele.z),
            (ele.y * scale) / (d - ele.z)
          )
        );
      });
    };

    let skillsIHave = [
      "HTML",
      "CSS/SASS",
      "JS/TS",
      "REACT",
      "EXPRESS",
      "GSAP",
      "NODEJS",
      "GLSL",
      "UNITY/C#",
      "BLENDER",
      "MongoDB/SQL",
      "My dogs",
      "❤️",
    ];
    const render = () => {
      if (animate) {
        ctx.clearRect(0, 0, resolution.width, resolution.height);
        projectTo2d();
        for (let i = 0; i < icoSphere2d.length; i++) {
          ctx.beginPath();
          ctx.strokeStyle = "white";
          ctx.moveTo(
            icoSphere2d[i].x + resolution.width / 2,
            -icoSphere2d[i].y + resolution.height / 2
          );
          // ctx.lineTo(resolution.width / 2, resolution.height / 2);
          let fontSize = 10 * (1.2 + icoSphere[i].z);
          ctx.font = `${fontSize}px Monospace`;
          ctx.fillStyle = "#ffa6b5";

          ctx.fillText(
            `${skillsIHave[i]}`,
            icoSphere2d[i].x +
              resolution.width / 2 -
              Math.round(ctx.measureText(skillsIHave[i]).width) / 2,
            -icoSphere2d[i].y + resolution.height / 2 + fontSize / 2
          );
          // ctx.arc(
          //   icoSphere2d[i].x + resolution.width / 2,
          //   -icoSphere2d[i].y + resolution.height / 2,
          //   1,
          //   0,
          //   2 * Math.PI,
          //   true
          // );
          ctx.stroke();
          ctx.closePath();
        }

        ctx.stroke();
        rotateX(rotate.x);
        rotateY(rotate.y);
        if (!mouseOnCanvas) {
          rotate.x >= 0
            ? rotate.x === 0 || rotate.x <= 0.0005
              ? (rotate.x = 0)
              : (rotate.x -= 0.0005)
            : (rotate.x += 0.0005);
          rotate.y >= 0
            ? rotate.y === 0 || rotate.y <= 0.0005
              ? (rotate.y = 0)
              : (rotate.y -= 0.0005)
            : (rotate.y += 0.0005);
          if (rotate.x === 0 && rotate.y === 0) {
            animate = false;
          }
        }
      }
      requestAnimationFrame(render);
    };
    render();
    canvas.addEventListener("mousemove", (e) => {
      animate = true;
      const rotateAngle = 0.04;
      rotate.y =
        (e.offsetX * (rotateAngle + rotateAngle)) / resolution.width -
        rotateAngle;
      rotate.x =
        (e.offsetY * (rotateAngle + rotateAngle)) / resolution.height -
        rotateAngle;
    });
    window.addEventListener("resize", (e) => {
      if (window.innerWidth > 900) {
        canvas.width = window.innerWidth / 2;
        canvas.height = window.innerHeight;
        resolution = {
          width: window.innerWidth / 2,
          height: window.innerHeight,
        };
      } else {
        if (window.innerWidth <= window.innerHeight) {
          canvas.width = window.innerWidth;
          canvas.height = window.innerWidth;
          resolution = {
            width: window.innerWidth,
            height: window.innerWidth,
          };
        } else {
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
          resolution = {
            width: window.innerWidth,
            height: window.innerHeight,
          };
        }
      }
    });
  }, [mouseOnCanvas]);
  return (
    <>
      <canvas
        onMouseEnter={() => {
          mouseOnCanvas = true;
        }}
        onMouseLeave={() => {
          mouseOnCanvas = false;
        }}
        id="icoSphere"
      ></canvas>
    </>
  );
};
export default Sphere;
