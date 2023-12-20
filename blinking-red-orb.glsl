#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main() {
    
    vec2 uv = (gl_FragCoord.xy / u_resolution) * 2.0 - 1.0; 
    
    float d = length(uv);
    d = pow(d, abs(sin(u_time * 0.5)) * 4.0);
    
    gl_FragColor = vec4(1.0 - d, 0.0, 0.0, 1.0);
}
