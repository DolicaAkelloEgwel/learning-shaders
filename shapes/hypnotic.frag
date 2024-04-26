#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

float abs_distance_field(vec2 st) {
	return length(abs(st) - 0.3);
}

float min_distance_field(vec2 st) {
	return length( min(abs(st)-0.3,0.0) );
}

float max_distance_field(vec2 st) {
	return length( max(abs(st)-0.3,0.0) );
}

vec4 solid_shape(float d) {
	return vec4(vec3( step(.3,d) ),1.0);
}

vec4 solid_shape_outline(float d) {
	return vec4(vec3(step(0.3, d) * step(d, 0.4)), 1.0);
}

vec4 blurred_shape_outline(float d) {
	return vec4(vec3(smoothstep(0.3, 0.4, d) * smoothstep(0.6, 0.5, d)), 1.0);
}


void main() {

	vec2 st = gl_FragCoord.xy / u_resolution.xy;
	st.x *= u_resolution.x / u_resolution.y;
	vec3 color = vec3(0.0);
	float d = 0.0;

	st = st * 2.0 - 1.0;

	d = min_distance_field(st);

	gl_FragColor = vec4(vec3(fract(d * 10.0)), 1.0);
	gl_FragColor = blurred_shape_outline(d);

}