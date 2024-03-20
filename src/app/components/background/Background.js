'use client';
import Script from "next/script";
import { useEffect } from "react";

export const Background = () => {
    var mouseX;
    var mouseY;

    
    function onReady() {
      console.log('hello, world!')
        // Dynamically create a shader script
        const shaderScript = document.createElement('script');
        shaderScript.type = 'x-shader/x-fragment';
        shaderScript.id = 'image'
        // shamlessly stolen from https://www.shadertoy.com/view/XlfGRj
        shaderScript.textContent = `
        precision highp float;

        uniform vec2  iResolution;
        uniform vec2  iMouse;
        uniform float iTime;

        // Star Nest by Pablo Roman Andrioli
        // License: MIT

        #define iterations 15
        #define formuparam 0.53

        #define volsteps 20
        #define stepsize 0.1    

        #define zoom   1.800
        #define tile   0.850
        #define speed  0.005

        #define brightness 0.0015
        #define darkmatter 0.300
        #define distfading 0.730
        #define saturation 0.850


        void mainImage( out vec4 fragColor, in vec2 fragCoord )
        {
          //get coords and direction
          vec2 uv=fragCoord.xy/iResolution.xy-.5;
          uv.y*=iResolution.y/iResolution.x;
          vec3 dir=vec3(uv*zoom,1.);
          float time=iTime*speed+.25;

          //mouse rotation
          float a1=.5+(iMouse.x*0.01)/iResolution.x*2.;
          float a2=.8+(iMouse.y*0.01)/iResolution.y*2.;
          mat2 rot1=mat2(cos(a1),sin(a1),-sin(a1),cos(a1));
          mat2 rot2=mat2(cos(a2),sin(a2),-sin(a2),cos(a2));
          dir.xz*=rot1;
          dir.xy*=rot2;
          vec3 from=vec3(1.,.5,0.5);
          from+=vec3(time*2.,time,-2.);
          from.xz*=rot1;
          from.xy*=rot2;
          
          //volumetric rendering
          float s=0.1,fade=1.;
          vec3 v=vec3(0.);
          for (int r=0; r<volsteps; r++) {
            vec3 p=from+s*dir*.5;
            p = abs(vec3(tile)-mod(p,vec3(tile*2.))); // tiling fold
            float pa,a=pa=0.;
            for (int i=0; i<iterations; i++) { 
              p=abs(p)/dot(p,p)-formuparam; // the magic formula
              a+=abs(length(p)-pa); // absolute sum of average change
              pa=length(p);
            }
            float dm=max(0.,darkmatter-a*a*.001); //dark matter
            a*=a*a; // add contrast
            if (r>6) fade*=1.-dm; // dark matter, don't render near
            //v+=vec3(dm,dm*.5,0.);
            v+=fade;
            v+=vec3(s,s*s,s*s*s*s)*a*brightness*fade; // coloring based on distance
            fade*=distfading; // distance fading
            s+=stepsize;
          }
          v=mix(vec3(length(v)),v,saturation); //color adjust
          fragColor = vec4(v*.01,1.);	
          
        }

        void main() {
          mainImage(gl_FragColor, gl_FragCoord.xy);
        }
        `;
        document.head.appendChild(shaderScript);
    
        // Initialize shaderWebBackground after the script is added
        shaderWebBackground.shade({
          onBeforeFrame: (ctx) => {
            ctx.shaderMouseX = ctx.toShaderX(mouseX);
            ctx.shaderMouseY = ctx.toShaderY(mouseY);
          },
          shaders: {
            image: {
              uniforms: {
                iTime: (gl, loc) => gl.uniform1f(loc, performance.now() / 1000),
                iResolution: (gl, loc, ctx) => gl.uniform2f(loc, ctx.width, ctx.height),
                iMouse: (gl, loc, ctx) => gl.uniform2f(loc, ctx.shaderMouseX, ctx.shaderMouseY)
              }
            }
          }
        });
    }

    useEffect(() => {
      onReady();

      const v = (event) => {
        mouseX = event.clientX;
        mouseY = event.clientY;
      };

      document.addEventListener("mousemove", v);

      return () => {
        document.removeEventListener('mousemove', v);
      }
    }, []);
    return (
        <>
          <Script src="https://xemantic.github.io/shader-web-background/dist/shader-web-background.min.js" strategy="beforeInteractive" onLoad={onReady}/>
        </>
    )
}