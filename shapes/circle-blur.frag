#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

float pixel_distance(vec2 st) {
	return distance(st, vec2(0.5));
}

float vector_length(vec2 st) {
	vec2 toCenter = vec2(0.5) - st;
	return length(toCenter);
}

float square_root(vec2 st) {
	vec2 tC = vec2(0.5) - st;
	return sqrt(tC.x*tC.x+tC.y*tC.y);
}

void main() {
	vec2 st = gl_FragCoord.xy / u_resolution;
	float pct = 0.0;

	pct = square_root(st);

	vec3 color = vec3(pct);
	gl_FragColor = vec4(color, 1.0);
}