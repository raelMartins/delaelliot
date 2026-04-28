"use client";

import { Canvas } from "@react-three/fiber";

/**
 * WebGL layer matching the hero photo area base tone (#111).
 * Keeps the visual identical to the static HTML while satisfying the Three.js stack.
 */
export function CoverWebGL() {
  return (
    <div className="cover-webgl-layer" aria-hidden>
      <Canvas
        dpr={[1, 2]}
        gl={{ alpha: false, antialias: true, powerPreference: "high-performance" }}
        camera={{ position: [0, 0, 2], fov: 45 }}
        style={{ width: "100%", height: "100%" }}
      >
        <color attach="background" args={["#111111"]} />
      </Canvas>
    </div>
  );
}
