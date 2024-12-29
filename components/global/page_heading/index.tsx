interface IPageHeadingParams {
  title: string;
  subtitle: string;
}

export default function PageHeading({ ...props }: IPageHeadingParams) {
  const { title, subtitle } = props;

  return (
    <section className=" text-center">
      <h1 className="text-4xl font-bold p-3 text-white">{title}</h1>
      <p className="text-gray-200">{subtitle}</p>
    </section>
  );
}
