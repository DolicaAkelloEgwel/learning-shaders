#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main(){
    vec2 st = gl_FragCoord.xy/u_resolution.xy;

    float pct = 0.0;

    pct = step(distance(st, vec2(0.5)), 0.25);

    vec3 color = vec3(pct);

    gl_FragColor = vec4(color, 1.0);
}