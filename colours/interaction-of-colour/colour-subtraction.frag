// Author: Patricio Gonzalez Vivo

// Title: Interaction of color - VII
// Chapter: 2 different color look alike - substraction of color

// "Recongnizing this, one is able to push light and/or hue,
//	by the use of constrasts, away from their first appearance
//	towards the opposite qualities.
//	Since this amounts virtaully to adding opposite qualities,
// 	it follows that one might achive parallel effects
//	by substracting those qualities not desired."
// 															Josef Albers


#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

float rect(in vec2 st, in vec2 size){
	size = 0.25-size*0.25;
    vec2 uv = step(size,st*(1.0-st));
	return uv.x*uv.y;
}

void main() {
    vec2 st = gl_FragCoord.xy/u_resolution.xy;

    vec3 influenced_color_a = vec3(0.880,0.793,0.581);
    vec3 influenced_color_b = vec3(0.654,0.760,0.576);

    vec3 influencing_color_A = vec3(0.980,0.972,0.896);
    vec3 influencing_color_B = vec3(0.036,0.722,0.790);

    vec3 color = mix(influencing_color_A,
                     influencing_color_B,
                     step(.5,1.-st.y));

    color = mix(color,
               influenced_color_a,
               rect(st+vec2(.0,-0.25),vec2(0.030,0.010)));

    color = mix(color,
               influenced_color_b,
               rect(st+vec2(.0,0.25),vec2(0.030,0.010)));

    // color = mix(color,
    //            mix(influenced_color_a,
    //                  influenced_color_b,
    //                  step(.5,1.-st.y)),
    //            rect(st+vec2(0.46,0.),vec2(0.01,0.02)));

    gl_FragColor = vec4(color,1.0);
}