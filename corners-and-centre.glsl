#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution;

    float box_size = 0.05;

    if ((st.x < box_size && st.y < box_size) // origin (0,0)
    || (st.x > 1.0 - box_size && st.y > 1.0 - box_size)  // top right (1,1)
    || (st.x < box_size && st.y > 1.0 - box_size) // top left (0,1)
    || (st.x > 1.0 - box_size && st.y < box_size) // bottom left (1,0)
    || (st.x > 0.5 - box_size * 0.5 && st.x < 0.5 + box_size * 0.5 && st.y > 0.5 - box_size * 0.5 && st.y < 0.5 + box_size * 0.5)) // (0.5,0.5)
    {
        gl_FragColor = vec4(0.0,0.0,0.0,1.0);    
    }
    else
    {
        gl_FragColor = vec4(1.0,0.0,1.0,1.0);
    }
	
}