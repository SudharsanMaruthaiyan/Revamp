
const AdmissionCard = ({icon,title,ctn,readmore}) => {
  return (
    <>
        <div className=" flex  justify-center">
            <div className=" bg-white shadow-2xl border w-fit p-5 rounded-2xl">
                <div>
                    <img src={icon} alt="Admission_icon" className=""/>
                </div>
                <div>
                    <h1 className=" font-[poppins] font-bold lg:text-lg text-base text-[#241442] py-3">{title}</h1>
                    <p className=" font-[poppins] text-wrap text-slate-700">{ctn}</p>
                    <div  className=" pt-4">
                        <button className=" font-[poppins] hover:text-white hover:bg-[#FF8C05] bg-white border border-[#FF8C05] px-4 py-2 font-bold text-base rounded-full text-[#FF8C05] transition-colors">{readmore}</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default AdmissionCard