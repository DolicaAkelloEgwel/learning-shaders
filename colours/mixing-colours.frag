#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

#define PI 3.1415926538

vec3 colorA = vec3(0.149, 0.141, 0.912);
vec3 colorB = vec3(1.000, 0.833, 0.244);

float easeInSine(float t) {
	return 1.0 - cos(t * PI * 0.5);
}

float easeOutSine(float t) {
	return sin(t * PI * 0.5);
}

float easeInOutSine(float t) {
	return -(cos(PI * t) - 1.0) * 0.5;
}

float easeInCubic(float t) {
	// This one just stick at yellow
	return pow(t, 3.0);
}

float easeOutCubic(float t) {
	// This one just stick at yellow
	return 1.0 - pow(1.0 - t, 3.0);
}

float easeInOutCubic(float t) {
	if (t < 0.5) {
		return 4.0 * pow(t, 3.0);
	}
	else {
		return 1.0 - pow(-2.0 * t + 2.0, 3.0) * 0.5;
	}
}

void main() {
	vec3 color = vec3(0.0);

	float pct = easeInOutCubic(u_time);

	color = mix(colorA, colorB, pct);

	gl_FragColor = vec4(color, 1.0);
}