const fragmentShader = `
precision highp float;

uniform float u_intensity;
uniform float u_time;

// Grid parameters
uniform float gridSize;
uniform vec3 gridColor; // Grid line color
uniform float gridThickness;

// Lighting parameters
uniform vec3 u_lightPosition; // Light position
uniform vec3 u_viewPosition;  // Camera position

varying vec2 vUv;
varying float vDisplacement;
varying vec3 vNormal; // Passed from the vertex shader

void main() {
    // Distortion based on Perlin noise and time
    float distort = 5.0 * vDisplacement * u_intensity * sin(vUv.y * 4.0 + u_time);

    // Colors
    vec3 primaryColor = vec3(0.0, 0.0, 0.5); // Dark blue
    vec3 secondaryColor = vec3(1.0, 0.0, 0.0); // Bright red

    // Calculate grid effect
    float grid = step(gridThickness, min(fract(vUv.x * gridSize), fract(vUv.y * gridSize)));
    vec3 gridColorFinal = mix(vec3(0.0), gridColor, grid);

    // Mix primary and secondary colors based on distortion
    vec3 baseColor = mix(primaryColor, secondaryColor, distort);

    // Lighting calculations
    vec3 normal = normalize(vNormal); // Normalize the normal
    vec3 lightDir = normalize(u_lightPosition - gl_FragCoord.xyz); // Light direction
    vec3 viewDir = normalize(u_viewPosition - gl_FragCoord.xyz); // View direction
    
    // Diffuse lighting
    float diff = max(dot(normal, lightDir), 0.0);
    
    // Specular lighting
    vec3 reflectDir = reflect(-lightDir, normal);
    float spec = pow(max(dot(viewDir, reflectDir), 0.0), 25.0); // Adjust shininess as needed

    // Combine diffuse and specular components
    vec3 ambient = 0.9 * baseColor; // Ambient light component
    vec3 diffuse = diff * baseColor; // Diffuse light component
    vec3 specular = spec * vec3(0.4); // Specular light component (white)

    // Final color calculation
    vec3 color = ambient + diffuse + specular;

    // Apply grid color
    color = mix(color, gridColorFinal, grid);

    // Set the final color with transparency
    float fresnel = 0.5 + 0.8 * pow(5.0 - abs(vUv.y), 10.0);
    gl_FragColor = vec4(color, 1.0);

    // Apply transparency based on distortion
    gl_FragColor.a = max(0.0, 9.0 - distort) * fresnel; // Adjust transparency
}



`;

export default fragmentShader;
