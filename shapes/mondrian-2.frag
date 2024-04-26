#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

float color_block(float x0, float x1, float y0, float y1, vec2 st) {
	return float(! ((st.x > x0) && (st.x < x1) && (st.y > y0) && (st.y < y1)));
}

void main(){
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    vec3 color = vec3(1.0);

    vec3 BLACK = vec3(0.0);

    float red_region = color_block(0.0, 0.3, 0.6, 1.0, st);
    float yellow_region = color_block(0.9, 1.0, 0.6, 1.0, st);
    float blue_region = color_block(0.7, 1.0, 0.0, 0.1, st);

    float vline0 = color_block(0.3, 0.35, 0.0, 1.0, st);
    float vline1 = color_block(0.7, 0.75, 0.0, 1.0, st);
    float vline2 = color_block(0.9, 0.95, 0.0, 1.0, st);

    float hline0 = color_block(0.0, 1.0, 0.6, 0.65, st);
    float hline1 = color_block(0.0, 1.0, 0.8, 0.85, st);

    float svline = color_block(0.1, 0.15, 0.6, 1.0, st);
    float shline = color_block(0.3, 1.0, 0.1, 0.15, st);

    vec3 lines = mix(BLACK, vec3(1.0), vline0);
    lines = mix(BLACK, lines, vline1);
    lines = mix(BLACK, lines, hline0);
    lines = mix(BLACK, lines, hline1);
    lines = mix(BLACK, lines, vline2);
    lines = mix(BLACK, lines, svline);
    lines = mix(BLACK, lines, shline);

    color = mix(vec3(1.0, 0.0, 0.0), color, red_region);
    color = mix(vec3(0.0, 0.0, 1.0), color, blue_region);
    color = mix(vec3(1.0, 1.0, 0.0), color, yellow_region);
    color = mix(BLACK, color, lines);

    gl_FragColor = vec4(color, 1.0);
}