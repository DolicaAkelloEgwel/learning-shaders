

#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;  // Canvas size (width,height)
uniform vec2 u_mouse;       // mouse position in screen pixels
uniform float u_time;   

void main() {
	vec2 st = gl_FragCoord.xy / u_resolution;
	gl_FragColor = vec4( (sin(st.x) * 0.5) + 0.5, (cos(st.y) * 0.5) + 0.5 ,abs(sin(u_time)),u_mouse.y / u_resolution.y);
}