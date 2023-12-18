// Implementation of Danilo Guanabara's code off Shadertoy
// https://www.shadertoy.com/view/XsXXDn

#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

void main() {
    vec3 c;
    float l;
    float z = u_time;

    for (int i = 0; i < 3; i++) {
        vec2 uv;
        vec2 p = gl_FragCoord.xy / u_resolution;

        uv = p;

        p -= 0.5;
        p.x *= u_resolution.x / u_resolution.y;

        z += 0.07;
        l = length(p);
        uv += p / l * (sin(z) + 1.0) * abs(sin(l * 9.0 - z - z));
        c[i] = 0.01 / length(mod(uv, 1.0) - 0.5);
    }

    gl_FragColor = vec4(c / l, u_time);
}