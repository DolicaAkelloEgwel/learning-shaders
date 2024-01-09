#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;

vec4 red_blinking(float speed) {
    return vec4(abs(sin(u_time * speed)),0.0,0.0,1.0);
}

void main() {
    gl_FragColor = red_blinking(0.5);
}