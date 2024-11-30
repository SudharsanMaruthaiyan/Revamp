import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
const schema = z.object({
    name: z.string().min(1, { message: '* Required' }),
    email: z.string().email(),
    web: z.string().min(1, { message: '* Required' }),
    comment: z.string().min(1, { message: '* Required' }),
  });

const Blogform = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: zodResolver(schema),
        mode:"onChange"
      });

      const onSubmit = async (data) => {
        // async request which may result error
        try {
            console.log(data)

        } catch (e) {
          console.log(e)
          // handle your error
        }
      };
  return (
    <>
      <div className="max-w-[100%]">
        <div className="w-[100%] grid grid-cols-1 my-5 lg:my-10 gap-5">
          <div className="flex flex-col gap-3">
            <div>
              <p className="font-[poppins] text-[22px] md:text-[26px] font-semibold text-[#FF9F00] ">
                Leave A Reply
              </p>
            </div>
            <div>
              <p className="font-[poppins] text-base text-[#39557e]">
                Your email address will not be published. Required fields are
                marked *
              </p>
            </div>
          </div>
          <div>
            <form action="" className=" grid grid-cols-1 gap-3" onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-10">
                <div>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter Name"
                    className="px-3 w-full bg-[#F0F6FC] py-3 border rounded-md"
                    {...register("name")}
                  />
                  <p className="text-red-500">{errors.name?.message}</p>
                </div>
                <div>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Enter Email"
                    className="px-3 w-full bg-[#F0F6FC] py-3 border rounded-md"
                    {...register("email")}

                  />
                  <p className="text-red-500">{errors.email?.message}</p>
                </div>
              </div>
              <div>
                <input
                  type="text"
                  name="web"
                  id="web"
                  placeholder="Enter website"
                  className="px-3 w-full bg-[#F0F6FC] py-3 border rounded-md"
                  {...register("web")}
                />
                <p className="text-red-500">{errors.web?.message}</p>
              </div>
              <div>
                <textarea
                  name="comment"
                  id="comment"
                  className="px-3 w-full bg-[#F0F6FC] py-3 border rounded-md"
                  placeholder="Enter your comment"
                  rows={5}
                  {...register("comment")}
                ></textarea>
                <p className="text-red-500">{errors.comment?.message}</p>
              </div>
              <div>
                <button className="py-4 px-4 font-[poppins] hover:bg-[#1363DF] bg-[#FF9F00] text-white font-semibold rounded-lg">
                  POST COMMENT
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogform;
