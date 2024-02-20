// Author: Patricio Gonzalez Vivo

// Title: Interaction of color - V
// Chapter: Lighter and/or darker - light intensity, lightness
//
// "But this second gradation exist only in our perception.
//  In fact, the vertical bands consist solely of an
//  entirely even middle grey which turns unrecognizable
//  threough a light illusion."
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

    vec3 influenced_color = vec3(0.548,0.565,0.542);
    vec3 influencing_color_A = vec3(0.295,0.295,0.295);
    vec3 influencing_color_B = vec3(0.904,0.947,0.965);

    vec3 color = vec3(0.);

    // Background Gradient
    color = mix( influencing_color_A,
                 influencing_color_B,
                 st.y);

    // Foreground rectangle
    color = mix(color,
               influenced_color,
               rect(st,vec2(0.030,0.370)));
    gl_FragColor = vec4(color,1.0);
}