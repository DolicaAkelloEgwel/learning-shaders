#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

#define PI 3.1415926538

vec3 colorA = vec3(0.149, 0.141, 0.912);
vec3 colorB = vec3(1.000, 0.833, 0.244);

float easeInSine() {
	return 1.0 - cos(u_time * PI * 0.5);
}

float easeOutSine() {
	return sin(u_time * PI * 0.5);
}

float easeInOutSine() {
	return -(cos(PI * u_time) - 1.0) * 0.5;
}

float easeInCubic() {
	// This one just stick at yellow
	return pow(u_time, 3.0);
}

float easeOutCubic() {
	// This one just stick at yellow
	return 1.0 - pow(1.0 - u_time, 3.0);
}


void main() {
	vec3 color = vec3(0.0);

	float pct = easeInSine();

	color = mix(colorA, colorB, pct);

	gl_FragColor = vec4(color, 1.0);
}