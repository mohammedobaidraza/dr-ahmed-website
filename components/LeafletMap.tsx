"use client";

import { useEffect, useRef } from "react";

interface LeafletMapProps {
  lat: number;
  lon: number;
  title: string;
}

export default function LeafletMap({ lat, lon, title }: LeafletMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<unknown>(null);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    let map: unknown;

    import("leaflet").then((L) => {
      if (!containerRef.current || mapRef.current) return;

      // Fix default icon asset paths broken by webpack
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
      });

      map = L.map(containerRef.current, {
        center: [lat, lon],
        zoom: 15,
        zoomControl: true,
        scrollWheelZoom: false,
        attributionControl: true,
      });

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 19,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      }).addTo(map as any);

      const goldIcon = L.divIcon({
        className: "",
        html: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="38" viewBox="0 0 28 38"><path d="M14 0C6.27 0 0 6.27 0 14c0 9.625 14 24 14 24S28 23.625 28 14C28 6.27 21.73 0 14 0z" fill="#C8A25A" stroke="#fff" stroke-width="1.5"/><circle cx="14" cy="14" r="5.5" fill="#fff"/></svg>`,
        iconSize: [28, 38],
        iconAnchor: [14, 38],
        popupAnchor: [0, -40],
      });

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      L.marker([lat, lon], { icon: goldIcon }).addTo(map as any).bindPopup(`<b>${title}</b>`);

      mapRef.current = map;
    });

    return () => {
      if (mapRef.current) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (mapRef.current as any).remove();
        mapRef.current = null;
      }
    };
  }, [lat, lon, title]);

  return <div ref={containerRef} style={{ width: "100%", height: "100%" }} />;
}
