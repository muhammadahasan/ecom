import { Calendar, Search } from "lucide-react";
import { Input } from "../ui/Input";
import Link from "next/link";
import BlogCard from "./BlogCard";

const blogData = [
  {
    id: 1,
    image: "/images/blog.jpeg",
    title: "World’s Most Exclusive, Private Island Resorts",
    date: "2024-02-14",
    description:
      "Experience the essence of travel by venturing to the world's most secluded and luxurious private islands scattered across the globe. These exclusive island retreats offer not only privacy but also unp, Experience the essence of travel by venturing to the world's most secluded and luxurious private islands scattered across the globe. These exclusive island retreats offer not only privacy but also unp",
  },
  {
    id: 2,
    image: "/images/blog.jpeg",
    title: "World’s Most Exclusive, Private Island Resorts",
    date: "2024-02-14",
    description:
      "Experience the essence of travel by venturing to the world's most secluded and luxurious private islands scattered across the globe. These exclusive island retreats offer not only privacy but also unp, Experience the essence of travel by venturing to the world's most secluded and luxurious private islands scattered across the globe. These exclusive island retreats offer not only privacy but also unp",
  },
];

const BlogContent = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-12 items-start w-full">
      {/* 1st div  */}
      <div className="w-full">
        {/* search  */}
        <div className="relative bg-white flex items-center p-1 border border-gray-200 rounded-lg text-gray-800">
          <Input
            type="search"
            className="w-full pe-11 border-none focus:ring-0 py-2 text-gray-500 rounded-md pr-10 focus:outline-none focus:bg-white focus:text-gray-900 shadow-none focus:ouline-none focus-visible:outline-none focus-visible:ring-0"
            placeholder="Search for blogs, topics and more"
            autoComplete="off"
          />
          <span className="absolute inset-y-0 right-0 flex items-center p-3 ">
            <Search className="w-4 h-4" />
          </span>
        </div>

        {/* cards  */}
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {blogData.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>

      {/* 2nd div  */}
      <div className="flex-1">
        <div className="bg-gray-100/20 p-3 shadow rounded-md w-full lg:w-[390px] space-y-5">
          <div className="bg-white rounded-md">
            <div className="p-3">
              <h3 className="font-semibold text-xl mb-3">Recent Posts</h3>
              <div className="space-y-2">
                <Link href="#" className="flex gap-5 items-center">
                  <div
                    className="w-20 bg-cover bg-center rounded-md"
                    style={{
                      backgroundImage:
                        "url(https://api.jtrholidays.com/storage/3336/World-Exclusive-island-ft.jpg",
                    }}
                  ></div>
                  <div className="flex-1">
                    <div className="text-sm rounded-full font-medium text-[12px] py-1 flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span>2024-02-14</span>
                    </div>
                    <div className="font-medium text-sm line-clamp-2 w-full text-wrap">
                      World’s Most Exclusive, Private Island Resorts
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* tags  */}
          <div className="bg-white rounded-md">
            <div className="p-3">
              <h3 className="font-semibold text-xl mb-3">Tags</h3>
              <div className="flex flex-wrap gap-2">
                <Link
                  href=""
                  className="px-2 py-1 border text-sm border-gray-200 rounded"
                >
                  Dubai
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogContent;
