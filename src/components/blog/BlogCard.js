import { Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ blog }) => {
  return (
    <Link
      href="#"
      className="flex flex-col rounded-xl overflow-hidden border border-gray-200 gap-2 cursor-pointer hover:transition-all hover:-translate-y-1 hover:shadow-md"
    >
      <div className="h-48 relative">
        <Image
          src={blog.image}
          alt="blog"
          fill
          className="object-cover w-full h-full"
        />
        <div className="bg-gray-800/70 text-white px-2 text-sm rounded-full font-medium text-[12px] py-1 flex items-center gap-2 absolute bottom-2 start-2">
          <Calendar className="w-4 h-4 text-primary" />
          <span className="">{blog.date}</span>
        </div>
      </div>
      <div className="pt-3 px-5 pb-7">
        <h3 className="font-bold text-2xl line-clamp-2">{blog.title}</h3>
        <p className="text-gray-600 mt-3 line-clamp-5">{blog.description}</p>
        <span className="text-accent uppercase underline">Read More</span>
      </div>
    </Link>
  );
};

export default BlogCard;
