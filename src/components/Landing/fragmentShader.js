const fragmentShader = `
uniform float u_intensity;
uniform float u_time;

varying vec2 vUv;
varying float vDisplacement;

void main() {
    float distort = 5.0 * vDisplacement * u_intensity * sin(vUv.y * 10.0 + u_time);
    
    // Set the color to blue
    vec3 color = vec3(0.0, 0.0, 1.0) * (1.0 - distort) * 0.8;

    gl_FragColor = vec4(color, 8.0);
     
    // Calculate fresnel effect based on vUv.y
    float fresnel = 0.2 + 0.8 * pow(1.0 - abs(vUv.y), 5.0);

    // Apply transparency based on distortion
    float alpha = 3.0 - distort;

    // Make the color transparent
    gl_FragColor.a = alpha;

    // Apply fresnel effect to the alpha channel
    gl_FragColor.a *= fresnel;
}
`;

export default fragmentShader;
