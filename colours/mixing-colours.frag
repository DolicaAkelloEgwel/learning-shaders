// Implementations of functins from easings.net

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

float easeInQuint(float t) {
	return pow(t, 5.0);
}

float easeOutQuint(float t) {
	return 1.0 - pow(1.0 - t, 5.0);
}

float easeInOutQuint(float t) {
	if (t < 0.5) {
		return 16.0 * pow(t, 5.0);
	}
	else {
		return 1.0 - pow(-2.0 * t + 2.0, 5.0);
	}
}

float easeInCirc(float t) {
	return 1.0 - sqrt(1.0 - pow(t, 2.0));
}

float easeOutCirc(float t) {
	return sqrt(1.0 - pow(t - 1.0, 2.0));
}

float easeInOutCirc(float t) {
	if (t < 0.5) {
		return (1.0 - sqrt(1.0 - pow(2.0 * t, 2.0))) * 0.5;
	}
	else {
		return (sqrt(1.0 - pow(-2.0 * t + 2.0, 2.0)) + 1.0) * 0.5;
	}
}

float easeInElastic(float t) {
	float c4 = (2.0 * PI) / 3.0;

	if (t == 0.0 || t == 1.0) {
		return t;
	}
	else {
		return - pow(2.0, 10.0 * t - 10.0) * sin((t * 10.0 - 10.75) * c4);
	}
}

float easeOutElastic(float t) {
	float c4 = (2.0 * PI) / 3.0;

	if (t == 0.0 || t == 1.0) {
		return t;
	}
	else {
		return pow(2.0, -10.0 * t - 10.0) * sin((t * 10.0 - 0.75) * c4) + 1.0;
	}
}

float easeInOutElastic(float t) {
	float c5 = (2.0 * PI) / 4.5;

	if (t == 0.0 || t == 1.0) {
		return t;
	}
	else if (t < 0.5) {
		return -(pow(2.0, 20.0 * t - 10.0) * sin((20.0 * t - 11.125) * c5));
	}
	else {
		return pow(2.0, -20.0 * t + 10.0) * sin((20.0 * t - 11.125) * c5);
	}
}

float easeInQuad(float t) {
	return pow(t, 2.0);
}

float eastOutQuad(float t) {
	return 1.0 - pow(1.0 - t, 2.0);
}

float easeInOutQuad(float t) {
	if (t < 0.5) {
		return 2.0 * t * t;
	}
	else {
		return pow(-2.0 * t + 2.0, 2.0) * 0.5;
	}
}

float easeInQuart(float t) {
	return pow(t, 4.0);
}

float eastOutQuart(float t) {
	return 1.0 - pow(1.0 - t, 4.0);
}

float easeInOutQuart(float t) {
	if (t < 0.5) {
		return 8.0 * pow(t, 4.0);
	}
	else {
		return pow(-2.0 * t + 2.0, 4.0) * 0.5;
	}
}

float easeInExpo(float t) {
	if (t == 0.0) {
		return 0.0;
	}
	else {
		return pow(2.0, 10.0 * t - 10.0);
	}
}

float easeOutExpo(float t) {
	if (t == 1.0) {
		return 1.0;
	}
	else {
		return 1.0 - pow(2.0, -10.0 * t);
	}
}

float easeInOutExpo(float t) {
	if (t == 0.0 || t == 1.0) {
		return t;
	}
	else if (t < 0.5) {
		return pow(2.0, 20.0 * t - 10.0);
	}
	else {
		(2.0 - pow(2.0, -20.0 * t + 10.0)) * 0.5;
	}
}

float easeInBack(float t) {
	float c1 = 1.70158;
	float c3 = c1 + 1.0;

	return c3 * pow(t, 3.0) - c1 * pow(t, 2.0);
}

float easeOutBack(float t) {
	float c1 = 1.70158;
	float c3 = c1 + 1.0;

	return 1.0 + c3 * pow(t - 1.0, 3.0) + c1 * pow(t - 1.0, 2.0);
}

float easeInOutBack(float t) {
	float c1 = 1.70158;
	float c2 = c1 * 1.525;

	if (t < 0.5) {
		return (pow(2.0 * t, 2.0) * ((c2 + 1.0) * 2.0 * t - c2)) * 0.5;
	}
	else {
		return (pow(2.0 * t - 2.0, 2.0) * ((c2 + 1.0) * (t * 2.0 - 2.0) + c2) + 2.0) * 0.5;
	}
}

float easeOutBounce(float t) {

	float n1 = 7.5625;
	float d1 = 2.75;

	if (t < 1 / d1) {
	    return n1 * t * t;
	}
	else if (t < 2 / d1) {
	    return n1 * (t -= 1.5 / d1) * t + 0.75;
	}
	else if (t < 2.5 / d1) {
	    return n1 * (t -= 2.25 / d1) * t + 0.9375;
	}
	else {
	    return n1 * (t -= 2.625 / d1) * t + 0.984375;
	}
}

float easeInBounce(float t) {
	return 1.0 - easeOutBounce(1.0 - t);
}

float easeInOutBounce(float t) {

	if (t < 0.5) {
		return (1.0 - easeOutBounce(1.0 - 2.0 * t)) * 0.5;
	}
	else {
		return (1.0 + easeOutBounce(2.0 * t - 1.0)) * 0.5;
	}
}

void main() {
	vec3 color = vec3(0.0);

	float t = u_time * 0.5;
	float pct = easeInOutBounce(abs(fract(t) * 2.0 - 1.0));

	color = mix(colorA, colorB, pct);

	gl_FragColor = vec4(color, 1.0);
}