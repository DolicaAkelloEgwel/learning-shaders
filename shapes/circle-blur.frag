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

float inverse(float color) {
	return 1.0 - color;
}

float solid_circle(vec2 st) {
	return step(0.5, pixel_distance(st));
}

float pulsing_circle(float lower, float upper, vec2 st) {
	float diff = (upper - lower);
	return step((diff * 0.5 * sin(u_time) + lower), pixel_distance(st));
}

float gradient_circle(float lower_bound, float upper_bound, vec2 st) {
	return smoothstep(lower_bound, upper_bound, pixel_distance(st));
}

float add_distance_field(vec2 st) {
	return distance(st,vec2(0.4)) + distance(st,vec2(0.6));
}

float mult_distance_field(vec2 st) {
	return distance(st,vec2(0.4)) * distance(st,vec2(0.6));
}

float min_distance_field(vec2 st) {
	return min(distance(st,vec2(0.4)),distance(st,vec2(0.6)));
}

float max_distance_field(vec2 st) {
	return max(distance(st,vec2(0.4)),distance(st,vec2(0.6)));
}

float pow_distance_field(vec2 st) {
	return pow(distance(st,vec2(0.4)),distance(st,vec2(0.6)));
}

float circle(in vec2 _st, in float _radius){
    vec2 dist = _st-vec2(0.5);
	return 1.-smoothstep(_radius-(_radius*0.01),
                         _radius+(_radius*0.01),
                         dot(dist,dist)*4.0);
}

void main() {
	vec2 st = gl_FragCoord.xy / u_resolution;
	float pct = 0.0;

	pct = circle(st, 0.5);

	vec3 color = vec3(pct);
	gl_FragColor = vec4(color, 1.0);
}