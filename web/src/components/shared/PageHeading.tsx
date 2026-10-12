interface Props {
  title: string;
  titleHighlighted: string;
}

export default function PageHeading({ title, titleHighlighted }: Props) {
  return (
    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl uppercase font-serif font-semibold mb-8">
      {title} <br />
      <span className="italic text-primary">{titleHighlighted}</span>
    </h1>
  );
}
