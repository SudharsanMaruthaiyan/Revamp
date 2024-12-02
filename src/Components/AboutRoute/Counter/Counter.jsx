import CounterCard from "./CounterCard/CounterCard";
const data = [
    {
      imageUrl:
        "https://ik.imagekit.io/jjyo3gsee/Echooling/user%20(1).png?updatedAt=1726763977514",
      count: 120,
      label: "Our Happy Students",
    },
    {
      imageUrl:
        "https://ik.imagekit.io/jjyo3gsee/Echooling/graduation-cap%20(1).png?updatedAt=1726763977352",
      count: 17,
      label: "Enrolled Learners",
    },
    {
      imageUrl:
        "https://ik.imagekit.io/jjyo3gsee/Echooling/speech%20(1).png?updatedAt=1726763977320",
      count: 70,
      label: "Expert Instructor",
    },
    {
      imageUrl:
        "https://ik.imagekit.io/jjyo3gsee/Echooling/thumbs-up%20(1).png?updatedAt=1726763977307",
      count: 98 ,
      label: "Satisfaction Rate",
    },
  ];
const Counter = () => {
  return (
    <>
        <div className="w-[80%] lg:w-[80%] mx-auto py-[20px] lg:py-[40px]">
            <div className=" flex justify-center items-center gap-12 pb-20 lg:pb-28">
                <span className=" w-20 h-[3px] bg-[#FF8C05] lg:block hidden"></span>
                <h1 className=" font-[poppins] text-xl lg:text-2xl font-bold text-center uppercase">Trusted by <span className=" text-[#FF8C05]">Companies</span> Achievements</h1>
                <span className=" w-20 h-[3px] bg-[#FF8C05] lg:block hidden"></span>
            </div>
            <div>
                <CounterCard data={data}/>
            </div>
        </div>
    </>
  )
}

export default Counter