const fragmentShader = `
uniform float u_intensity;
uniform float u_time;

varying vec2 vUv;
varying float vDisplacement;

void main() {
    float distort = 5.0 * vDisplacement * u_intensity * sin(vUv.y * 10.0 + u_time);
    
    // Calculate colors based on distortion
    vec3 primaryColor = vec3(0.0, 0.0, 1.05); // Dark black
    vec3 secondaryColor = vec3(0.5, 0.0, 0.0); // Dark red
    
    // Mix the colors based on distortion
    vec3 color = mix(primaryColor, secondaryColor, distort);

    gl_FragColor = vec4(color, 5.0);
     
    // Calculate fresnel effect based on vUv.y
    float fresnel = 0.2 + 0.8 * pow(5.0 - abs(vUv.y), 5.0);

    // Apply transparency based on distortion
    float alpha = 19.0 - distort;

    // Make the color transparent
    gl_FragColor.a = alpha;

    // Apply fresnel effect to the alpha channel
    gl_FragColor.a *= fresnel;
}
`;

export default fragmentShader;