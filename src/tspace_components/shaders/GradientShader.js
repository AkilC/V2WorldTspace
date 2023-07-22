import * as THREE from 'three';

const GradientShader = {
  uniforms: {
    topColor: { value: new THREE.Color(0xff0000) },
    bottomColor: { value: new THREE.Color(0xffffff) },
    offset: { value: 33 },
    exponent: { value: 0.6 }
  },
  vertexShader: [
    "varying vec3 vWorldPosition;",
    "varying vec3 vPos;",
    "void main() {",
    " vec4 worldPosition = modelMatrix * vec4( position, 1.0 );",
    " vWorldPosition = worldPosition.xyz;",
    " vPos = position;",
    " gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",
    "}"
  ].join("\n"),

  fragmentShader: [
    "uniform vec3 topColor;",
    "uniform vec3 bottomColor;",
    "uniform float offset;",
    "uniform float exponent;",
    "varying vec3 vWorldPosition;",
    "varying vec3 vPos;",
    "void main() {",
    " float h = vPos.y * 0.5 + 0.5;", // mapping to [0,1]
    " float alpha = mix(0.7, 0.05, max( pow( max(h, 0.0), exponent ), 0.0 ));", // modified here
    " vec3 color = mix( topColor, bottomColor, max( pow( max(h, 0.0), exponent ), 0.0 ));",
    " gl_FragColor = vec4(color, alpha);",
    "}"
  ].join("\n")
};

export default GradientShader;
