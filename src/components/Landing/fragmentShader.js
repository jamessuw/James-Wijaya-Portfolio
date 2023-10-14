const fragmentShader = `
uniform float u_intensity;
uniform float u_time;

varying vec2 vUv;
varying float vDisplacement;

void main() {
    float distort = 5.0 * vDisplacement * u_intensity * sin(vUv.y * 10.0 + u_time);
    vec3 color = vec3(abs(vUv - 0.5) * 1.5  * (1.0 - distort), 1.0);
    gl_FragColor = vec4(color, 5.0);
     
    // Calculate fresnel effect based on vUv.y
    float fresnel = 0.2 + 0.8 * pow(1.0 - abs(vUv.y), 5.0);
    
 

    // Apply transparency based on distortion
    float alpha = 1.0 - distort;


}

`;

export default fragmentShader;

