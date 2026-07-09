"use client";

import { useState } from "react";

type Props = {
  thumbnailImage: string;
  fallbackImage: string;
  alt: string;
};

export default function ProcedureCardImage({ thumbnailImage, fallbackImage, alt }: Props) {
  const [src, setSrc] = useState(thumbnailImage);

  return (
    <img
      src={src}
      alt={alt}
      style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
      onError={() => {
        if (src !== fallbackImage) setSrc(fallbackImage);
      }}
      loading="lazy"
    />
  );
}
