#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution;
    
    if (st.x < 0.05 && st.y < 0.05)
    {
        gl_FragColor = vec4(0.0,0.0,0.0,1.0);    
    }
    else
    {
        gl_FragColor = vec4(1.0,0.0,1.0,1.0);
    }
	
}