// Author: Patricio Gonzalez Vivo

// Title: Interaction of color - IV
// Chapter: A color has many faces - the relativity of color

// "To begin the study of how color deceives and how to make use of this,
// the first excercise is
// to make one and the same color look different."
// 															Josef Albers


#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

float rect(in vec2 st, in vec2 size){
	size = 0.25-size*0.25;
    vec2 uv = smoothstep(size,size+size*vec2(0.002),st*(1.0-st));
	return uv.x*uv.y;
}

float swap(in vec2 st) {
    // Causes the division to move between being horizontal and being vertical
    if (mod(floor(u_time), 10) < 5) return st.x;
    return st.y;
}

void main() {
    vec2 st = gl_FragCoord.xy/u_resolution.xy;

    vec3 influenced_color = vec3(0.745,0.678,0.539);

    vec3 influencing_color_A = vec3(0.653,0.918,0.985);
    vec3 influencing_color_B = vec3(0.980,0.576,0.113);

    vec3 color = mix(influencing_color_A,
                     influencing_color_B,
                     step(.5, swap(st)));

    color = mix(color,
               influenced_color,
               rect(abs((st-vec2(.5,.0))*vec2(2.,1.)),vec2(.05,.125)));

    gl_FragColor = vec4(color,1.0);
}