import Image from "next/image";

const CategoriesCard = ({ name, image }) => {
  return (
    <div className="flex flex-col rounded-lg overflow-hidden border border-gray-200 cursor-pointer hover:transition-all hover:-translate-y-1 hover:shadow-md justify-between">
      <div className="relative w-full h-[240px]">
        <Image
          src={image}
          alt={name}
          loading="lazy"
          className="object-cover w-full h-full"
          fill
        />
      </div>
      <div className="p-3 bg-accent text-white text-center">
        <h3 className="font-semibold line-clamp-2 drop-shadow-sm">{name}</h3>
      </div>
    </div>
  );
};

export default CategoriesCard;
