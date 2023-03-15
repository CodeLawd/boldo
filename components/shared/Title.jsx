const Title = ({ secondaryText, primaryText }) => {
  return (
    <>
      <span className="mb-4 text-lg text-[#777777]">{secondaryText}</span>
      <h2 className="text-2xl font-light text-info md:max-w-[70%] md:text-3xl md:leading-[6.5rem] lg:text-5xl">
        {primaryText}
      </h2>
    </>
  );
};

export default Title;
