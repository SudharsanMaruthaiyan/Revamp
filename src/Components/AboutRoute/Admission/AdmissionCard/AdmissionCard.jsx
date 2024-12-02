
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
                        <button className=" font-[poppins] hover:text-white hover:bg-[#5B3AEE] bg-white border border-[#5B3AEE] px-4 py-2 font-bold text-base rounded-full text-[#5B3AEE] transition-colors">{readmore}</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default AdmissionCard