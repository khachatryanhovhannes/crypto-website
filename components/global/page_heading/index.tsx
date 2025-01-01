interface IPageHeadingParams {
  id?: string;
  title: string;
  subtitle: string;
}

export default function PageHeading({ ...props }: IPageHeadingParams) {
  const { title, subtitle, id } = props;

  return (
    <section className="text-center" id={id}>
      <h1 className="text-4xl font-bold p-3 text-white">{title}</h1>
      <p className="text-gray-200">{subtitle}</p>
    </section>
  );
}
