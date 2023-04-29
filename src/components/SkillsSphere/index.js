import "./index.css";
import React, { useEffect } from "react";

const SKillsSphere = () => {
  useEffect(() => {
    const canvas = document.getElementById("SkillsSphereCanvas");

    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth / 2;

    let size = { width: window.innerWidth / 2, height: window.innerHeight };

    const ctx = canvas.getContext("2d");

    let rotateAngle = { x: 0, y: 0 };

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
    let pointsIcoSphere = [
      new point3d(0, 0 + 1, 1),
      new point3d(0.276385, 0.85064 + 1, 0.447215),
      new point3d(-0.7236, 0.52572 + 1, 0.447215),
      new point3d(-0.276385, 0.85064 + 1, -0.447215),
      new point3d(-0.894425, 0 + 1, -0.447215),
      new point3d(0, 0 + 1, -1),
      new point3d(-0.276385, -0.85064 + 1, -0.447215),
      new point3d(-0.7236, -0.52572 + 1, 0.447215),
      new point3d(0.276385, -0.85064 + 1, 0.447215),
      new point3d(0.894425, 0 + 1, 0.447215),
      new point3d(0.7236, 0.52572 + 1, -0.447215),
      new point3d(0.7236, -0.52572 + 1, -0.447215),
    ];

    const project3dto2d = (points3d) => {
      const focalLength = 100;
      let points2d = new Array(points3d.length);

      for (let i = 0; i < points3d.length; i++) {
        let x = points3d[i].x * (focalLength / points3d[i].z) + size.width / 2;
        let y = points3d[i].y * (focalLength / points3d[i].z) + size.height / 2;
        points2d[i] = new point2d(x, y);
      }
      return points2d;
    };
    const rotateX = (radian) => {
      const cosine = Math.cos(radian);
      const sine = Math.sin(radian);
      const rotateSubY = 1;
      const rotateSubZ = 0;
      for (let i = 0; i < pointsIcoSphere.length; i++) {
        let y =
          (pointsIcoSphere[i].y - rotateSubY) * cosine -
          (pointsIcoSphere[i].z - rotateSubZ) * sine;
        let z =
          (pointsIcoSphere[i].y - rotateSubY) * sine +
          (pointsIcoSphere[i].z - rotateSubZ) * cosine;
        pointsIcoSphere[i].y = y + rotateSubY;
        pointsIcoSphere[i].z = z + rotateSubZ;
      }
    };
    const rotateY = (radian) => {
      const cosine = Math.cos(radian);
      const sine = Math.sin(radian);
      const rotateSubY = 0;
      const rotateSubZ = 0;
      for (let i = 0; i < pointsIcoSphere.length; i++) {
        let x =
          (pointsIcoSphere[i].z - rotateSubY) * sine +
          (pointsIcoSphere[i].x - rotateSubZ) * cosine;
        let z =
          (pointsIcoSphere[i].z - rotateSubY) * cosine -
          (pointsIcoSphere[i].x - rotateSubZ) * sine;
        pointsIcoSphere[i].x = x + rotateSubY;
        pointsIcoSphere[i].z = z + rotateSubZ;
      }
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
      "",
    ];

    const loop = () => {
      let points2d = project3dto2d(pointsIcoSphere);
      ctx.clearRect(0, 0, size.width, size.height);
      ctx.beginPath();

      for (let i = 0; i < points2d.length; i++) {
        ctx.moveTo(points2d[i].x, points2d[i].y);
        if (pointsIcoSphere[i].z < 0) {
          ctx.font = `${24 * Math.abs(pointsIcoSphere[i].z)}px Monospace`;
          ctx.fillStyle = `rgba(104, 42, 233,${
            255 * Math.abs(pointsIcoSphere[i].z)
          })`;
        } else {
          ctx.font = `24px Monospace`;
          ctx.fillStyle = "rgba(104, 42, 233,255)";
        }

        ctx.fillText(`${skillsIHave[i]}`, points2d[i].x, points2d[i].y);
        // ctx.arc(points2d[i].x, points2d[i].y, 2, 0, Math.PI * 2, true);
        ctx.strokeStyle = "red";
        ctx.stroke();
      }

      rotateX(rotateAngle.x);
      rotateY(rotateAngle.y);
      ctx.closePath();
      requestAnimationFrame(loop);
    };
    loop();

    canvas.addEventListener("mousemove", (e) => {
      rotateAngle.x = (e.clientX * (0.005 + 0.005)) / size.width - 0.005;
      rotateAngle.y = -((e.clientY * (0.005 + 0.005)) / size.height - 0.005);
    });
  });
  return (
    <>
      <canvas className="SkillsSphereCanvas" id="SkillsSphereCanvas"></canvas>
    </>
  );
};
export default SKillsSphere;
