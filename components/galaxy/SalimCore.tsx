"use client";

import {
  Billboard,
  Html,
  Sparkles,
  useTexture,
} from "@react-three/drei";

import { useFrame } from "@react-three/fiber";

import { useRef } from "react";

import * as THREE from "three";

export default function SkillCore() {
  const rootRef = useRef<THREE.Group>(null);

  const imageRef = useRef<THREE.Mesh>(null);

  const glowRef = useRef<THREE.Mesh>(null);

  const ringOneRef = useRef<THREE.Mesh>(null);
  const ringTwoRef = useRef<THREE.Mesh>(null);
  const ringThreeRef = useRef<THREE.Mesh>(null);

  const texture = useTexture(
    "/core/salim-core.png"
  );

  texture.colorSpace =
    THREE.SRGBColorSpace;

  useFrame((state, delta) => {
    const time =
      state.clock.elapsedTime;

    /*
     * FLOATING + PARALLAX
     */

    if (rootRef.current) {
      rootRef.current.position.y =
        Math.sin(time * 0.6) * 0.08;

      rootRef.current.rotation.y =
        THREE.MathUtils.lerp(
          rootRef.current.rotation.y,
          state.pointer.x * 0.12,
          0.03
        );

      rootRef.current.rotation.x =
        THREE.MathUtils.lerp(
          rootRef.current.rotation.x,
          -state.pointer.y * 0.08,
          0.03
        );
    }

    /*
     * CORE PULSE
     */

    if (imageRef.current) {
      const pulse =
        1 +
        Math.sin(time * 1.8) *
          0.025;

      imageRef.current.scale.setScalar(
        pulse
      );
    }

    /*
     * OUTER GLOW
     */

    if (glowRef.current) {
      const pulse =
        1.03 +
        Math.sin(time * 1.4) *
          0.06;

      glowRef.current.scale.setScalar(
        pulse
      );
    }

    /*
     * RINGS
     */

    if (ringOneRef.current) {
      ringOneRef.current.rotation.z +=
        delta * 0.16;
    }

    if (ringTwoRef.current) {
      ringTwoRef.current.rotation.z -=
        delta * 0.1;
    }

    if (ringThreeRef.current) {
      ringThreeRef.current.rotation.z +=
        delta * 0.07;
    }
  });

  return (
    <group
      ref={rootRef}
      scale={1.25}
    >
      {/* CORE LIGHT */}

      <pointLight
        color="#d7ff00"
        intensity={8}
        distance={12}
        decay={2}
      />

      {/* HUGE BACK GLOW */}

      <Billboard follow>
        <mesh
          ref={glowRef}
          position={[0, 0, -0.4]}
        >
          <circleGeometry
            args={[3.2, 96]}
          />

          <meshBasicMaterial
            color="#d7ff00"
            transparent
            opacity={0.045}
            blending={
              THREE.AdditiveBlending
            }
            depthWrite={false}
          />
        </mesh>
      </Billboard>

      {/* SECONDARY HALO */}

      <Billboard follow>
        <mesh position={[0, 0, -0.2]}>
          <circleGeometry
            args={[2.6, 96]}
          />

          <meshBasicMaterial
            color="#a7c600"
            transparent
            opacity={0.04}
            blending={
              THREE.AdditiveBlending
            }
            depthWrite={false}
          />
        </mesh>
      </Billboard>

      {/* MAIN CORE IMAGE */}

      <Billboard follow>
        <mesh
          ref={imageRef}
          position={[0, 0, 0.15]}
        >
          <planeGeometry
            args={[4.6, 4.6]}
          />

          <meshBasicMaterial
            map={texture}
            transparent
            alphaTest={0.01}
            toneMapped={false}
            side={THREE.DoubleSide}
          />
        </mesh>
      </Billboard>

      {/* FRONT ENERGY PLANE */}

      <Billboard follow>
        <mesh position={[0, 0, 0.32]}>
          <circleGeometry
            args={[1.4, 64]}
          />

          <meshBasicMaterial
            color="#eaff74"
            transparent
            opacity={0.05}
            blending={
              THREE.AdditiveBlending
            }
            depthWrite={false}
          />
        </mesh>
      </Billboard>

      {/* RING 01 */}

      <mesh
        ref={ringOneRef}
        rotation={[
          1.1,
          0.35,
          0.15,
        ]}
      >
        <torusGeometry
          args={[
            2.1,
            0.018,
            10,
            220,
          ]}
        />

        <meshBasicMaterial
          color="#d7ff00"
          transparent
          opacity={0.42}
          blending={
            THREE.AdditiveBlending
          }
          depthWrite={false}
        />
      </mesh>

      {/* RING 02 */}

      <mesh
        ref={ringTwoRef}
        rotation={[
          0.6,
          1.1,
          0.65,
        ]}
      >
        <torusGeometry
          args={[
            2.45,
            0.012,
            8,
            220,
          ]}
        />

        <meshBasicMaterial
          color="#d7ff00"
          transparent
          opacity={0.22}
          blending={
            THREE.AdditiveBlending
          }
          depthWrite={false}
        />
      </mesh>

      {/* RING 03 */}

      <mesh
        ref={ringThreeRef}
        rotation={[
          1.45,
          0.8,
          1.1,
        ]}
      >
        <torusGeometry
          args={[
            2.8,
            0.008,
            8,
            220,
          ]}
        />

        <meshBasicMaterial
          color="#d7ff00"
          transparent
          opacity={0.1}
          blending={
            THREE.AdditiveBlending
          }
          depthWrite={false}
        />
      </mesh>

      {/* ENERGY DISC */}

      <mesh
        rotation={[
          Math.PI / 2,
          0,
          0,
        ]}
        position={[
          0,
          -1.85,
          0,
        ]}
      >
        <ringGeometry
          args={[
            0.9,
            1.75,
            96,
          ]}
        />

        <meshBasicMaterial
          color="#d7ff00"
          transparent
          opacity={0.07}
          blending={
            THREE.AdditiveBlending
          }
          depthWrite={false}
        />
      </mesh>

      {/* PARTICLES */}

      <Sparkles
        count={110}
        scale={[
          6,
          6,
          3,
        ]}
        size={1.7}
        speed={0.3}
        opacity={0.65}
        color="#d7ff00"
      />

      {/* LABEL */}

      <Html
        position={[
          0,
          -2.65,
          0,
        ]}
        center
        distanceFactor={9}
      >
        <div className="pointer-events-none whitespace-nowrap text-center">
          <div className="flex items-center justify-center gap-2">
            <span className="h-px w-8 bg-[#d7ff00]/30" />

            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#d7ff00] shadow-[0_0_10px_#d7ff00]" />

            <span className="h-px w-8 bg-[#d7ff00]/30" />
          </div>

          <p className="mt-2 font-mono text-[6px] tracking-[0.28em] text-[#d7ff00]/60">
            CENTRAL KNOWLEDGE REACTOR
          </p>

          <p className="mt-1 font-mono text-[5px] tracking-[0.22em] text-white/25">
            ALL SKILL NODES SYNCHRONIZED
          </p>
        </div>
      </Html>
    </group>
  );
}