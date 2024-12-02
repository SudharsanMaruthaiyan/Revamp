import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";


const CounterCard = ({data}) => {
    const [animatedCounts, setAnimatedCounts] = useState(data.map(() => 0));

  useEffect(() => {
    const duration = 2000;
    const intervalTime = 50;
    const totalSteps = duration / intervalTime;

    const increments = data.map((item) => Math.ceil(item.count / totalSteps));

    const intervalId = setInterval(() => {
      setAnimatedCounts((prevCounts) => {
        return prevCounts.map((count, index) => {
          if (count < data[index].count) {
            return Math.min(count + increments[index], data[index].count);
          }
          return count;
        });
      });
    }, intervalTime);

    setTimeout(() => clearInterval(intervalId), duration);

    return () => clearInterval(intervalId);
  }, [data]);
  return (
    <>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center gap-16">
            {data.map((item, index) => (
                <div
                key={item.label + index}
                className="rounded-xl flex flex-col justify-center items-center p-4 bg-gray-50 relative py-10 border-dotted border-4 hover:shadow-lg hover:-translate-y-3 transition-all"
                >
                    <div className=" absolute -left-6 -top-5 ">
                        <img
                            src={item.imageUrl}
                            alt={item.label}
                            className=" rounded-full bg-[#FF8C05] p-4 w-16 h-16 stroke-[#FF8C05] text-[#FF8C05]"
                        />
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-[36px] font-bold text-black font-[poppins]">
                        {animatedCounts[index]}<span>k+</span>
                        </p>
                        <p className="font-[poppins] text-gray-600 font-normal">
                        {item.label}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    </>
  )

  CounterCard.propTypes = {
    data: PropTypes.arrayOf(
      PropTypes.shape({
        imageUrl: PropTypes.string.isRequired,
        count: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
      })
    ).isRequired,
  };
}

export default CounterCard