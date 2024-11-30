import { Check, Facebook, Linkedin, Twitter } from "lucide-react";
const DuringThisProgram = () => {
  return (
    <>
      <div>
        <h1 className=" font-bold font-[poppins] text-xl md:text-2xl text-[#FF9F00]">
          During This Program{" "}
        </h1>
        <p className=" py-5 font-[poppins] text-[#000] leading-6">
          Grursus mal suada faci lisis Lorem ipsum dolarorit more ametion
          consectetur elit. Vesti at bulum nec odio aea the dumm ipsumm ipsum
          that dolocons rsus mal suada and fadolorit.
        </p>
        <ul className=" md:flex gap-28 items-start">
          <div>
            <li className=" flex gap-2 items-center ">
              <Check className=" bg-[#FF9F00] rounded-full p-[2px] stroke-2 stroke-white w-5 h-5 " />
              <p className=" text-lg text-[#000] font-[poppins]">Become a UX designer.</p>
            </li>
            <li className=" flex gap-2 items-center py-3">
              <Check className=" bg-[#FF9F00] rounded-full p-[2px] stroke-2 stroke-white w-5 h-5 " />
              <p className=" text-lg text-[#000] font-[poppins]">
                You will be able to add UX designe
              </p>
            </li>
            <li className=" flex gap-2 items-center">
              <Check className=" bg-[#FF9F00] rounded-full p-[2px] stroke-2 stroke-white w-5 h-5 " />
              <p className=" text-lg text-[#000] font-[poppins]">Become a UI designer.</p>
            </li>
          </div>
          <div>
            <li className=" flex gap-2 items-center py-3">
              <Check className=" bg-[#FF9F00] rounded-full p-[2px] stroke-2 stroke-white w-5 h-5 " />
              <p className=" text-lg text-[#000] font-[poppins]">
                Create quick wireframes.
              </p>
            </li>
            <li className=" flex gap-2 items-center">
              <Check className=" bg-[#FF9F00] rounded-full p-[2px] stroke-2 stroke-white w-5 h-5 " />
              <p className=" text-lg text-[#000] font-[poppins]">
                Downloadable exercise files
              </p>
            </li>
          </div>
        </ul>
        <p className=" text-base text-[#000] py-5 font-[poppins]">
          Horem ipsum dolor sitter metting Great consectetur adipiscing
          idealorem ipsum dolor sitter mettingtablished of a page when lookinThe
          point of using Lorem Ipsu ss normal distribution.est, qui dolor emr
          ipsum quia dolor sit ame consec tetur. Esse mo lestie consequat, vel
          illum dolore eu feugiat nulla facilisis at vero eros et ac cumsan et
          iusto odio dignissim qui blandit praesent consectetur adipiscing
          idealorem.
        </p>
        <hr />
        <div className="flex justify-between gap-5 py-8 items-center flex-wrap">
          <div className="flex gap-5 items-center">
            <div>
              <p className="font-[poppins] font-semibold text-base text-[#FF9F00]">
                Tags:
              </p>
            </div>
            <div className="flex gap-3">
              <button className="px-3 py-1 bg-[#e6f2ff] font-[poppins] text-base text-[#000] hover:text-white hover:bg-[#000] rounded-lg">
                Apps
              </button>
              <button className="px-3 py-1 bg-[#e6f2ff] font-[poppins] text-base text-[#000] hover:text-white hover:bg-[#000] rounded-lg">
                UX/UI
              </button>
            </div>
          </div>
          <div className="flex gap-5">
            <div>
                <p className="font-[poppins] font-semibold text-base text-[#082a5e]">Social Share:</p>
            </div>
            <div className="flex gap-3 items-center">
                <Facebook size={20} color="#082a5e"></Facebook>
                <Twitter size={20} color="#082a5e"></Twitter>
                <Linkedin size={20} color="#082a5e"></Linkedin>
            </div>
          </div>
        </div>

        <hr />

        <div>
          <h1 className=" font-[poppins] text-xl md:text-2xl font-bold py-5 text-[#FF9F00]">Java Interview Questions for Freshers</h1>
          <div>
            <p className=" font-medium md:text-xl font-[poppins] text-lg">1. What is Java?</p>
            <p className=" py-2 text-slate-600 font-[poppins]">Java is a high-level, object-oriented programming language that was developed by Sun Microsystems in 1995. It is platform-independent, meaning that programs written in Java can run on any platform that has a Java Virtual Machine (JVM) installed.Before proceeding further, make sure you have a strong grasp of essential concepts in Java Full Stack Development, including front-end frameworks, back-end technologies, and database management.</p>
          </div>
          <div className=" pt-3">
            <p className=" font-medium md:text-xl font-[poppins] text-lg">2. What are the features of Java?</p>
            <p className=" py-2 text-slate-600 font-[poppins]">Java has several features that make it a popular programming language. Some of these features include platform independence, object-oriented programming, automatic memory management, robustness, and security.</p>
          </div>
          <div className=" pt-3">
            <p className=" font-medium md:text-xl font-[poppins] text-lg">3. What is JVM?</p>
            <p className=" py-2 text-slate-600 font-[poppins]">JJVM stands for Java Virtual Machine. It is an abstract machine that provides the runtime environment in which Java programs are executed. The JVM interprets Java bytecode and translates it into machine-specific code.</p>
          </div>
          <div className=" pt-3">
            <p className=" font-medium md:text-xl font-[poppins] text-lg">4. What is the difference between JDK, JRE, and JVM?</p>
            <p className=" py-2 text-slate-600 font-[poppins]">JDK stands for Java Development Kit. It is a software development kit that includes tools for developing, compiling, and debugging Java programs. JRE stands for Java Runtime Environment. It is a software environment that provides the necessary runtime libraries and components for running Java programs. JVM is the virtual machine that executes the Java bytecode.</p>
          </div>
          <div className=" pt-3">
            <p className=" font-medium md:text-xl font-[poppins] text-lg">5. What is the difference between a class and an object?</p>
            <p className=" py-2 text-slate-600 font-[poppins]">A class is a blueprint or template for creating objects, while an object is an instance of a class. In other words, a class defines the properties and behaviors of an object, while an object is an instance of those properties and behaviors.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DuringThisProgram;
