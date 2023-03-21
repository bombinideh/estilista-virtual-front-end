export const Card = ({ title, imgSrc, imgAlt }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 bg-red-700 rounded-lg p-4">
      <p className="text-white font-bold text-2xl">{title}</p>
      <img
        className="rounded-lg object-cover w-full h-[400px]"
        src={imgSrc}
        alt={imgAlt}
      />
    </div>
  );
};
