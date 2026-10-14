import Image from "next/image";

export default function GameBackground() {
  return (
    <Image
      src="/story-banner.png"
      fill
      sizes="100vw"
      alt="A glimpse into Leo's mysterious home"
      className="object-cover object-center"
      priority={false}
    />
  );
}
