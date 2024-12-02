import React, { useEffect, useRef } from 'react';

const DynamicBackground: React.FC = () => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const sketchRef = useRef<any>(null);

  useEffect(() => {
    if (sketchRef.current) {
      return;
    }

    const loadP5 = async () => {
      const p5 = (await import('p5')).default;

      const sketch = (p: any) => {
        let objects: any[] = [];
        let iconImg: any;
        

        p.preload = () => {
          iconImg = p.loadImage("/assets/images/circle-logo.svg", 
            () => console.log('Icon loaded successfully'),
            () => console.error('Icon failed to load')
          );
        };

        p.setup = () => {
          const canvasDiv = canvasRef.current;
          if (canvasDiv) {
            p.createCanvas(window.innerWidth, window.innerHeight).parent(canvasDiv);
            
            p.windowResized = () => {
              p.resizeCanvas(window.innerWidth, window.innerHeight);
            };
          }
          
          for (let i = 0; i < 20; i++) {
            let mass = p.createVector(1, 1);
            let pos = p.createVector(
              p.random(10, p.width - 10),
              p.random(10, p.height * 0.7)
            );
            let vel = p.createVector(p.random(-1), p.random(1));
            objects.push({ pos, vel, mass });
          }
        };

        p.draw = () => {
          let limit = p.width / 3;
          p.clear();
          
          let iconsDrawn = 0;

          // First, draw all connections
          for (let outer of objects) {
            for (let inner of objects) {
              if (outer !== inner) {
                let dist = p5.Vector.dist(outer.pos, inner.pos);
                
                if (dist < limit && dist > 1) {
                  let alpha = p.map(dist, limit, 0, 0, 1);
                  p.stroke(140, 89, 250, p.map(alpha, 0, 1, 0, 255));
                  p.line(outer.pos.x, outer.pos.y, inner.pos.x, inner.pos.y);
                }
              }
            }
          }

          // Then, draw all points and icons
          for (let outer of objects) {
            bounceOfBorder(outer);
            let linesConnected = 0;
            
            for (let inner of objects) {
              if (outer !== inner) {
                let dist = p5.Vector.dist(outer.pos, inner.pos);
                if (dist < limit && dist > 1) {
                  linesConnected++;
                }
              }
            }

            // Draw larger white circles for connected points
            p.noStroke();
            p.fill(255, 255, 255);  // White color
            p.ellipse(outer.pos.x, outer.pos.y, 10, 10);  // Increased size to 10

            if (linesConnected > 3 && iconsDrawn < 3 && iconImg) { 
              let iconSize = 30;
              p.image(iconImg, outer.pos.x - iconSize / 2, outer.pos.y - iconSize / 2, iconSize, iconSize);
              iconsDrawn++;
            }

            let newMass = p.map(linesConnected, 0, objects.length, 0, 7);
            outer.mass.set(p.createVector(newMass, newMass));
          }
        };

        function bounceOfBorder(obj: any) {
          if (obj.pos.x <= 0 || obj.pos.x >= p.width) obj.vel.x *= -1;
          if (obj.pos.y <= 0 || obj.pos.y >= p.height * 0.7) obj.vel.y *= -1;
          obj.pos.add(obj.vel);
        }
      };

      sketchRef.current = new p5(sketch);
    };

    loadP5();

    return () => {
      if (sketchRef.current) {
        sketchRef.current.remove();
        sketchRef.current = null;
      }
    };
  }, []);

  return (
    <div 
      ref={canvasRef} 
      className="absolute top-0 left-0 right-0 h-screen -z-50"
      style={{ 
        background: 'transparent',
        pointerEvents: 'none' 
      }}
    />
  );
};

export default DynamicBackground; 