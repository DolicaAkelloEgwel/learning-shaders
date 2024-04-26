#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

float clover(float a) {
	return cos(a * 3.0);
}

float six_petals_flower(float a) {
	return abs(cos(a * 3.0));
}

float five_petals_flower(float a) {
	return abs(cos(a*2.5))*.5+.3;
}

float snowflake(float a) {
	return abs(cos(a*12.)*sin(a*3.))*.8+.1;
}

float cog(float a) {
	return smoothstep(-.5,1., cos(a*10.))*0.2+0.5;
}

void main() {

	vec2 st = gl_FragCoord.xy / u_resolution.xy;
	vec3 color = vec3(0.0);

	vec2 pos = vec2(0.5) - st;

	float r = length(pos) * 2.0;
	float a = atan(pos.y, pos.x);

	float f = cog(a);

	color = vec3(1.0 - smoothstep(f, f + 0.02, r));

	gl_FragColor = vec4(color, 1.0);
}