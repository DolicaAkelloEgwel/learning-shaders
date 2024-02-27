#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

float line(float x0, float x1, float y0, float y1, vec2 st) {
	if ((st.x > x0) && (st.x < x1) && (st.y > y0) && (st.y < y1)) return 0.0;
	return 1.0;
}

void main(){
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    vec3 color = vec3(1.0);
    vec3 shapes = vec3(1.0);

    float red = line(0.0, 0.3, 0.6, 1.0, st);
    float yellow = line(0.9, 1.0, 0.6, 1.0, st);
    float blue = line(0.7, 1.0, 0.0, 0.1, st);

    float vline0 = line(0.3, 0.35, 0.0, 1.0, st);
    float vline1 = line(0.7, 0.75, 0.0, 1.0, st);
    float vline3 = line(0.9, 0.95, 0.0, 1.0, st);

    float hline0 = line(0.0, 1.0, 0.6, 0.65, st);
    float hline1 = line(0.0, 1.0, 0.8, 0.85, st);

    float svline = line(0.1, 0.15, 0.6, 1.0, st);
    float shline = line(0.3, 1.0, 0.1, 0.15, st);

    float pct = vline0 * vline1 * vline3 * hline0 * hline1 * svline * shline;
    color = vec3(pct) * (vec3(red) + vec3(1.0, 0.0, 0.0)) * (vec3(yellow) + vec3(1.0, 0.984, 0.0)) * (vec3(blue) + vec3(0.0, 0.0, 1.0));

    gl_FragColor = vec4(color, 1.0);
}