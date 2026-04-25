import Image from "next/image";

export default function SectionBanner({
  src,
  alt = "",
}: {
  src: string;
  alt?: string;
}) {
  return (
    <div
      role="presentation"
      className="relative h-32 w-full overflow-hidden bg-[color:var(--color-bg)] sm:h-40 lg:h-48"
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="100vw"
        className="object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--color-bg)]/40 via-transparent to-[color:var(--color-bg)]/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--color-bg)]/30 via-transparent to-[color:var(--color-bg)]/30" />
    </div>
  );
}
