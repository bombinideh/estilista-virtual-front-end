export const Card = ({ title, imgSrc, imgAlt }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 bg-red-600 rounded-xl pt-4 px-2 pb-2">
      <p className="text-white font-bold text-2xl">{title}</p>
      <figure className="bg-neutral-100 w-full rounded-xl h-[400px]">
        <img
          className="object-contain w-full h-full"
          src={imgSrc}
          alt={imgAlt}
        />
      </figure>
    </div>
  );
};
