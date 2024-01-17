export const Introduction = ({
  id,
  title,
  content,
}: {
  id: number;
  title: string;
  content: string;
}) => {
  return (
    <>
      <h2 className="ordinal inline-block border-1 border-solid border-dark-purple w-[3rem] h-[3rem] rounded-full leading-[3rem] text-xl">
        {id}
      </h2>
      <h2 className="title heading-s my-6">{title}</h2>
      <div className="content body-font text-davyGrey leading-[1.75rem]">
        {content}
      </div>
    </>
  );
};
