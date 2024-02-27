// Author @patriciogv - 2015
// http://patriciogonzalezvivo.com

#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

vec2 l_shape(float size) {
    return vec2(size);
}

vec2 movement() {
    return vec2(sin(u_time * 1.2) * 0.45 + 0.55, cos(u_time) * 0.45 + 0.55);
}

float rand(vec2 co){
    return fract(sin(dot(co, vec2(12.9898, 78.233))) * 43758.5453);
}

vec3 invert(vec3 colour) {
    return vec3(1.0) - colour;
}

vec2 smoothstep_border(vec2 st, float edge0, float edge1) {
    return smoothstep(edge0, edge1, st);
}

void main(){
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    vec3 color = vec3(0.0);

    // bottom-left
    // vec2 bl = step(movement(),st);
    vec2 bl = smoothstep_border(st, 0.0, 0.1);
    float pct = bl.x * bl.y;

    // top-right
    vec2 tr = vec2(1.0) - smoothstep_border(st, 0.9, 1.0);
    pct *= tr.x * tr.y;

    color = vec3(pct);

    gl_FragColor = vec4(color,1.0);
}