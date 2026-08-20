"use client";

import {
  Line,
} from "@react-three/drei";

type Props = {
  start: [
    number,
    number,
    number
  ];

  end: [
    number,
    number,
    number
  ];
};

export default function SkillConnection({
  start,
  end,
}: Props) {
  return (
    <>
      {/* BACKGROUND CONNECTION */}

      <Line
        points={[
          start,
          end,
        ]}
        color="#d7ff00"
        lineWidth={0.6}
        transparent
        opacity={0.09}
      />

      {/* ENERGY CENTER */}

      <Line
        points={[
          start,
          end,
        ]}
        color="#ecff85"
        lineWidth={0.15}
        transparent
        opacity={0.4}
      />
    </>
  );
}