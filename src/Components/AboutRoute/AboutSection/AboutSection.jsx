import React from 'react'
import { aboutsection1, aboutsection2 } from '../../../assets/Api/ImageApi'
import { ArrowRight, Dot } from 'lucide-react'

const AboutSection = () => {
  return (
    <>
    <div className='max-w-[100%]'>
        <div className='w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10  pb-[40px] pt-[90px]'>
            <div className='flex gap-5 w-full lg:col-span-3'>
                <div  className=' -translate-y-10'>
                    <img src={aboutsection2} alt="" className='rounded-lg' />
                </div>
                <div>
                    <img src={aboutsection1} alt="" className='rounded-lg' />
                </div>
            </div>
            <div className='flex flex-col justify-between gap-3 lg:col-span-2'>
                <div className='flex'>
                    <p className='flex  text-[#FF8C05] text-[14px] px-3 font-[Poppins] py-1 justify-center rounded-full bg-gradient-to-tr from-[#F3F3FD] to-[#ff8a056a]'><Dot></Dot> INTERACTIVE AND SOCIAL</p>
                </div>
                <div>
                    <p className='font-[Poppins] text-[24px] lg:text-[32px] font-bold'>Engage your learners and improve learning outcomes</p>
                </div>  
                <div>
                    <p className='font-[Poppins] text-[16px] text-[#666] font-medium'>Leveraging decades of learning sciences research, our platform is purpose built for delivering social, constructive and outcome-based learning experiences.</p>
                </div>
                <div className='grid grid-cols-2 gap-7'>
                    <div className='flex gap-3 items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none"><g clip-path="url(#clip0_504_1723)"><path d="M34.087 8.18657L18.2945 1.27146C18.0968 1.1849 17.8719 1.1849 17.674 1.27146L1.88219 8.18657C1.58759 8.31559 1.40352 8.6135 1.42004 8.93475C1.42264 8.98523 1.43066 9.03445 1.44254 9.08226V15.5322C0.602118 15.8424 0.000470143 16.6586 0.000470143 17.6141C0.000470143 18.8357 0.983764 19.8296 2.19233 19.8296C3.4009 19.8296 4.38419 18.8357 4.38419 17.6141C4.38419 16.6766 3.80491 15.8739 2.98937 15.5509V9.96248L8.80307 11.8247C8.80307 11.8247 8.80307 18.1008 8.80307 18.1069C8.80307 18.3484 8.9238 18.5867 9.118 18.7297C9.2492 18.8263 12.3953 21.095 17.9849 21.095C23.5746 21.095 26.7201 18.8263 26.8513 18.7296C27.0454 18.5867 27.1662 18.3481 27.1662 18.1068V11.8246L34.0126 9.63153C34.319 9.53344 34.5326 9.25593 34.5491 8.93468C34.5656 8.61357 34.3816 8.31559 34.087 8.18657ZM2.1924 18.2828C1.8367 18.2828 1.54737 17.9828 1.54737 17.6141C1.54737 17.2454 1.83677 16.9454 2.1924 16.9454C2.54803 16.9454 2.83743 17.2454 2.83743 17.6141C2.83743 17.9828 2.5481 18.2828 2.1924 18.2828ZM25.6193 16.7695C24.2054 16.0725 21.6085 15.1188 17.9843 15.1188C14.3605 15.1188 11.7638 16.0724 10.3499 16.7695V11.0368C11.2261 10.5172 13.89 9.17205 17.9843 9.17205C22.0786 9.17205 24.743 10.5172 25.6193 11.0369V16.7695ZM11.149 18.1069C12.425 17.4989 14.7613 16.6656 17.9843 16.6656C21.2078 16.6656 23.5448 17.4991 24.8203 18.1068C23.5443 18.7149 21.2079 19.5481 17.985 19.5481C14.7615 19.5482 12.4245 18.7147 11.149 18.1069ZM27.0644 10.233C27.0115 10.1397 26.9401 10.0566 26.8514 9.99116C26.7202 9.89456 23.5739 7.62521 17.9843 7.62521C12.3946 7.62521 9.24905 9.89463 9.11786 9.99123C9.02912 10.0566 8.95776 10.1397 8.90481 10.233L4.37709 8.78274L17.9842 2.82427L31.592 8.78274L27.0644 10.233Z" fill="black"></path><path d="M35.4831 26.6878C35.4541 26.3628 35.2147 26.0956 34.8991 26.013L23.1677 22.944C22.2628 22.7053 21.3164 22.7395 20.4308 23.0426C19.4079 23.392 18.5644 24.0679 17.9998 24.93C17.4355 24.0679 16.5922 23.3921 15.5698 23.0428C14.6841 22.7395 13.7376 22.7053 12.8337 22.9436L1.09007 26.0189C0.774449 26.1015 0.535182 26.3688 0.506144 26.6938C0.477246 27.0172 0.644093 27.3196 0.937569 27.4577C1.04451 27.5166 2.34835 28.2817 2.34835 30.5458C2.34835 30.973 2.69463 31.3192 3.12177 31.3192C3.5489 31.3192 3.89518 30.973 3.89518 30.5458C3.89518 28.9459 3.38691 27.8584 2.85149 27.1566L13.2268 24.4397C13.8359 24.2791 14.4728 24.3022 15.0692 24.5064C16.3594 24.9471 17.2262 26.1594 17.2262 27.523V31.1602C17.2262 31.5873 17.5725 31.9336 17.9996 31.9336C18.4268 31.9336 18.773 31.5873 18.773 31.1602V27.523C18.773 26.1596 19.6402 24.9473 20.9312 24.5062C21.5275 24.3022 22.1645 24.2791 22.7747 24.4401L33.1376 27.1511C32.6024 27.8529 32.0941 28.9404 32.0941 30.54C32.0941 30.9671 32.4404 31.3134 32.8675 31.3134C33.2946 31.3134 33.6409 30.9671 33.6409 30.54C33.6409 28.2759 34.9448 27.5108 35.0517 27.452C35.3452 27.3137 35.5121 27.0113 35.4831 26.6878Z" fill="#7659FF"></path><path d="M19.2739 34.7937H16.7262C15.6042 34.7937 14.5368 34.438 13.6394 33.7651C12.974 33.2662 12.4348 32.6053 12.076 31.8596L2.54241 34.4418C2.53833 34.4429 2.53432 34.4439 2.53024 34.445C1.50505 34.7049 0.459809 34.0822 0.199941 33.0572L0.0596013 32.5036C-0.0663249 32.007 0.0087668 31.4911 0.270885 31.0509C0.531948 30.6126 0.947413 30.3017 1.44127 30.1748L12.7429 27.1328C12.7465 27.1318 12.7502 27.1308 12.754 27.1299C13.5204 26.9359 14.3216 27.1032 14.9523 27.5892C15.597 28.0861 15.9712 28.8364 15.9789 29.6478C15.9826 30.0415 16.3481 30.3869 16.761 30.3869H19.2391C19.4408 30.3869 19.6426 30.3035 19.7925 30.1583C19.9401 30.0154 20.0213 29.8317 20.0213 29.6409C20.0208 28.8449 20.3871 28.103 21.0261 27.6054C21.6651 27.1078 22.4744 26.9345 23.2461 27.1299C23.2499 27.1309 23.2536 27.1318 23.2573 27.1329L34.5589 30.1748C35.0528 30.3017 35.4682 30.6126 35.7293 31.0509C35.9914 31.4911 36.0664 32.007 35.9406 32.5036L35.8002 33.0572C35.5404 34.0823 34.4949 34.7046 33.4699 34.445C33.4658 34.4439 33.4618 34.4429 33.4578 34.4418L23.9241 31.8595C23.5653 32.6053 23.0261 33.2662 22.3608 33.7651C21.4633 34.438 20.3959 34.7937 19.2739 34.7937ZM12.5406 30.1589C12.8716 30.1589 13.1766 30.3729 13.279 30.7038C13.7424 32.2011 15.1599 33.2468 16.7262 33.2468H19.2739C20.8402 33.2468 22.2578 32.2011 22.7211 30.7038C22.8442 30.3059 23.2603 30.0772 23.6622 30.1859L33.8543 32.9466C34.051 32.994 34.2509 32.8739 34.3008 32.677L34.4411 32.1235C34.474 31.9938 34.4296 31.8918 34.4002 31.8424C34.3709 31.7931 34.3023 31.7055 34.1726 31.6727C34.169 31.6717 34.1652 31.6708 34.1616 31.6698L22.8614 28.6283C22.5571 28.5529 22.2349 28.6247 21.9765 28.8258C21.7168 29.0281 21.5679 29.325 21.5681 29.6402C21.5685 30.2538 21.32 30.8325 20.8686 31.2696C20.4263 31.6979 19.8476 31.9338 19.2391 31.9338H16.761C15.4888 31.9338 14.444 30.9148 14.4321 29.6624C14.429 29.3288 14.2744 29.0197 14.0081 28.8144C13.8604 28.7007 13.5515 28.5256 13.1386 28.6283L1.83853 31.6698C1.83487 31.6708 1.83122 31.6717 1.82756 31.6727C1.69791 31.7055 1.62928 31.7931 1.59997 31.8424C1.57065 31.8918 1.52621 31.9938 1.55904 32.1235L1.69938 32.6771C1.74931 32.874 1.94899 32.9943 2.14586 32.9466L12.338 30.1859C12.4056 30.1676 12.4736 30.1589 12.5406 30.1589Z" fill="black"></path></g><defs><clipPath id="clip0_504_1723"><rect width="36" height="36" fill="white"></rect></clipPath></defs></svg>
                        <div>
                            <p className='font-[Poppins] font-bold'>Students Discounts</p>
                        </div>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none"><g clip-path="url(#clip0_504_1723)"><path d="M34.087 8.18657L18.2945 1.27146C18.0968 1.1849 17.8719 1.1849 17.674 1.27146L1.88219 8.18657C1.58759 8.31559 1.40352 8.6135 1.42004 8.93475C1.42264 8.98523 1.43066 9.03445 1.44254 9.08226V15.5322C0.602118 15.8424 0.000470143 16.6586 0.000470143 17.6141C0.000470143 18.8357 0.983764 19.8296 2.19233 19.8296C3.4009 19.8296 4.38419 18.8357 4.38419 17.6141C4.38419 16.6766 3.80491 15.8739 2.98937 15.5509V9.96248L8.80307 11.8247C8.80307 11.8247 8.80307 18.1008 8.80307 18.1069C8.80307 18.3484 8.9238 18.5867 9.118 18.7297C9.2492 18.8263 12.3953 21.095 17.9849 21.095C23.5746 21.095 26.7201 18.8263 26.8513 18.7296C27.0454 18.5867 27.1662 18.3481 27.1662 18.1068V11.8246L34.0126 9.63153C34.319 9.53344 34.5326 9.25593 34.5491 8.93468C34.5656 8.61357 34.3816 8.31559 34.087 8.18657ZM2.1924 18.2828C1.8367 18.2828 1.54737 17.9828 1.54737 17.6141C1.54737 17.2454 1.83677 16.9454 2.1924 16.9454C2.54803 16.9454 2.83743 17.2454 2.83743 17.6141C2.83743 17.9828 2.5481 18.2828 2.1924 18.2828ZM25.6193 16.7695C24.2054 16.0725 21.6085 15.1188 17.9843 15.1188C14.3605 15.1188 11.7638 16.0724 10.3499 16.7695V11.0368C11.2261 10.5172 13.89 9.17205 17.9843 9.17205C22.0786 9.17205 24.743 10.5172 25.6193 11.0369V16.7695ZM11.149 18.1069C12.425 17.4989 14.7613 16.6656 17.9843 16.6656C21.2078 16.6656 23.5448 17.4991 24.8203 18.1068C23.5443 18.7149 21.2079 19.5481 17.985 19.5481C14.7615 19.5482 12.4245 18.7147 11.149 18.1069ZM27.0644 10.233C27.0115 10.1397 26.9401 10.0566 26.8514 9.99116C26.7202 9.89456 23.5739 7.62521 17.9843 7.62521C12.3946 7.62521 9.24905 9.89463 9.11786 9.99123C9.02912 10.0566 8.95776 10.1397 8.90481 10.233L4.37709 8.78274L17.9842 2.82427L31.592 8.78274L27.0644 10.233Z" fill="black"></path><path d="M35.4831 26.6878C35.4541 26.3628 35.2147 26.0956 34.8991 26.013L23.1677 22.944C22.2628 22.7053 21.3164 22.7395 20.4308 23.0426C19.4079 23.392 18.5644 24.0679 17.9998 24.93C17.4355 24.0679 16.5922 23.3921 15.5698 23.0428C14.6841 22.7395 13.7376 22.7053 12.8337 22.9436L1.09007 26.0189C0.774449 26.1015 0.535182 26.3688 0.506144 26.6938C0.477246 27.0172 0.644093 27.3196 0.937569 27.4577C1.04451 27.5166 2.34835 28.2817 2.34835 30.5458C2.34835 30.973 2.69463 31.3192 3.12177 31.3192C3.5489 31.3192 3.89518 30.973 3.89518 30.5458C3.89518 28.9459 3.38691 27.8584 2.85149 27.1566L13.2268 24.4397C13.8359 24.2791 14.4728 24.3022 15.0692 24.5064C16.3594 24.9471 17.2262 26.1594 17.2262 27.523V31.1602C17.2262 31.5873 17.5725 31.9336 17.9996 31.9336C18.4268 31.9336 18.773 31.5873 18.773 31.1602V27.523C18.773 26.1596 19.6402 24.9473 20.9312 24.5062C21.5275 24.3022 22.1645 24.2791 22.7747 24.4401L33.1376 27.1511C32.6024 27.8529 32.0941 28.9404 32.0941 30.54C32.0941 30.9671 32.4404 31.3134 32.8675 31.3134C33.2946 31.3134 33.6409 30.9671 33.6409 30.54C33.6409 28.2759 34.9448 27.5108 35.0517 27.452C35.3452 27.3137 35.5121 27.0113 35.4831 26.6878Z" fill="#7659FF"></path><path d="M19.2739 34.7937H16.7262C15.6042 34.7937 14.5368 34.438 13.6394 33.7651C12.974 33.2662 12.4348 32.6053 12.076 31.8596L2.54241 34.4418C2.53833 34.4429 2.53432 34.4439 2.53024 34.445C1.50505 34.7049 0.459809 34.0822 0.199941 33.0572L0.0596013 32.5036C-0.0663249 32.007 0.0087668 31.4911 0.270885 31.0509C0.531948 30.6126 0.947413 30.3017 1.44127 30.1748L12.7429 27.1328C12.7465 27.1318 12.7502 27.1308 12.754 27.1299C13.5204 26.9359 14.3216 27.1032 14.9523 27.5892C15.597 28.0861 15.9712 28.8364 15.9789 29.6478C15.9826 30.0415 16.3481 30.3869 16.761 30.3869H19.2391C19.4408 30.3869 19.6426 30.3035 19.7925 30.1583C19.9401 30.0154 20.0213 29.8317 20.0213 29.6409C20.0208 28.8449 20.3871 28.103 21.0261 27.6054C21.6651 27.1078 22.4744 26.9345 23.2461 27.1299C23.2499 27.1309 23.2536 27.1318 23.2573 27.1329L34.5589 30.1748C35.0528 30.3017 35.4682 30.6126 35.7293 31.0509C35.9914 31.4911 36.0664 32.007 35.9406 32.5036L35.8002 33.0572C35.5404 34.0823 34.4949 34.7046 33.4699 34.445C33.4658 34.4439 33.4618 34.4429 33.4578 34.4418L23.9241 31.8595C23.5653 32.6053 23.0261 33.2662 22.3608 33.7651C21.4633 34.438 20.3959 34.7937 19.2739 34.7937ZM12.5406 30.1589C12.8716 30.1589 13.1766 30.3729 13.279 30.7038C13.7424 32.2011 15.1599 33.2468 16.7262 33.2468H19.2739C20.8402 33.2468 22.2578 32.2011 22.7211 30.7038C22.8442 30.3059 23.2603 30.0772 23.6622 30.1859L33.8543 32.9466C34.051 32.994 34.2509 32.8739 34.3008 32.677L34.4411 32.1235C34.474 31.9938 34.4296 31.8918 34.4002 31.8424C34.3709 31.7931 34.3023 31.7055 34.1726 31.6727C34.169 31.6717 34.1652 31.6708 34.1616 31.6698L22.8614 28.6283C22.5571 28.5529 22.2349 28.6247 21.9765 28.8258C21.7168 29.0281 21.5679 29.325 21.5681 29.6402C21.5685 30.2538 21.32 30.8325 20.8686 31.2696C20.4263 31.6979 19.8476 31.9338 19.2391 31.9338H16.761C15.4888 31.9338 14.444 30.9148 14.4321 29.6624C14.429 29.3288 14.2744 29.0197 14.0081 28.8144C13.8604 28.7007 13.5515 28.5256 13.1386 28.6283L1.83853 31.6698C1.83487 31.6708 1.83122 31.6717 1.82756 31.6727C1.69791 31.7055 1.62928 31.7931 1.59997 31.8424C1.57065 31.8918 1.52621 31.9938 1.55904 32.1235L1.69938 32.6771C1.74931 32.874 1.94899 32.9943 2.14586 32.9466L12.338 30.1859C12.4056 30.1676 12.4736 30.1589 12.5406 30.1589Z" fill="black"></path></g><defs><clipPath id="clip0_504_1723"><rect width="36" height="36" fill="white"></rect></clipPath></defs></svg>
                        <div>
                            <p className='font-[Poppins] font-bold'>Students Discounts</p>
                        </div>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none"><g clip-path="url(#clip0_504_1723)"><path d="M34.087 8.18657L18.2945 1.27146C18.0968 1.1849 17.8719 1.1849 17.674 1.27146L1.88219 8.18657C1.58759 8.31559 1.40352 8.6135 1.42004 8.93475C1.42264 8.98523 1.43066 9.03445 1.44254 9.08226V15.5322C0.602118 15.8424 0.000470143 16.6586 0.000470143 17.6141C0.000470143 18.8357 0.983764 19.8296 2.19233 19.8296C3.4009 19.8296 4.38419 18.8357 4.38419 17.6141C4.38419 16.6766 3.80491 15.8739 2.98937 15.5509V9.96248L8.80307 11.8247C8.80307 11.8247 8.80307 18.1008 8.80307 18.1069C8.80307 18.3484 8.9238 18.5867 9.118 18.7297C9.2492 18.8263 12.3953 21.095 17.9849 21.095C23.5746 21.095 26.7201 18.8263 26.8513 18.7296C27.0454 18.5867 27.1662 18.3481 27.1662 18.1068V11.8246L34.0126 9.63153C34.319 9.53344 34.5326 9.25593 34.5491 8.93468C34.5656 8.61357 34.3816 8.31559 34.087 8.18657ZM2.1924 18.2828C1.8367 18.2828 1.54737 17.9828 1.54737 17.6141C1.54737 17.2454 1.83677 16.9454 2.1924 16.9454C2.54803 16.9454 2.83743 17.2454 2.83743 17.6141C2.83743 17.9828 2.5481 18.2828 2.1924 18.2828ZM25.6193 16.7695C24.2054 16.0725 21.6085 15.1188 17.9843 15.1188C14.3605 15.1188 11.7638 16.0724 10.3499 16.7695V11.0368C11.2261 10.5172 13.89 9.17205 17.9843 9.17205C22.0786 9.17205 24.743 10.5172 25.6193 11.0369V16.7695ZM11.149 18.1069C12.425 17.4989 14.7613 16.6656 17.9843 16.6656C21.2078 16.6656 23.5448 17.4991 24.8203 18.1068C23.5443 18.7149 21.2079 19.5481 17.985 19.5481C14.7615 19.5482 12.4245 18.7147 11.149 18.1069ZM27.0644 10.233C27.0115 10.1397 26.9401 10.0566 26.8514 9.99116C26.7202 9.89456 23.5739 7.62521 17.9843 7.62521C12.3946 7.62521 9.24905 9.89463 9.11786 9.99123C9.02912 10.0566 8.95776 10.1397 8.90481 10.233L4.37709 8.78274L17.9842 2.82427L31.592 8.78274L27.0644 10.233Z" fill="black"></path><path d="M35.4831 26.6878C35.4541 26.3628 35.2147 26.0956 34.8991 26.013L23.1677 22.944C22.2628 22.7053 21.3164 22.7395 20.4308 23.0426C19.4079 23.392 18.5644 24.0679 17.9998 24.93C17.4355 24.0679 16.5922 23.3921 15.5698 23.0428C14.6841 22.7395 13.7376 22.7053 12.8337 22.9436L1.09007 26.0189C0.774449 26.1015 0.535182 26.3688 0.506144 26.6938C0.477246 27.0172 0.644093 27.3196 0.937569 27.4577C1.04451 27.5166 2.34835 28.2817 2.34835 30.5458C2.34835 30.973 2.69463 31.3192 3.12177 31.3192C3.5489 31.3192 3.89518 30.973 3.89518 30.5458C3.89518 28.9459 3.38691 27.8584 2.85149 27.1566L13.2268 24.4397C13.8359 24.2791 14.4728 24.3022 15.0692 24.5064C16.3594 24.9471 17.2262 26.1594 17.2262 27.523V31.1602C17.2262 31.5873 17.5725 31.9336 17.9996 31.9336C18.4268 31.9336 18.773 31.5873 18.773 31.1602V27.523C18.773 26.1596 19.6402 24.9473 20.9312 24.5062C21.5275 24.3022 22.1645 24.2791 22.7747 24.4401L33.1376 27.1511C32.6024 27.8529 32.0941 28.9404 32.0941 30.54C32.0941 30.9671 32.4404 31.3134 32.8675 31.3134C33.2946 31.3134 33.6409 30.9671 33.6409 30.54C33.6409 28.2759 34.9448 27.5108 35.0517 27.452C35.3452 27.3137 35.5121 27.0113 35.4831 26.6878Z" fill="#7659FF"></path><path d="M19.2739 34.7937H16.7262C15.6042 34.7937 14.5368 34.438 13.6394 33.7651C12.974 33.2662 12.4348 32.6053 12.076 31.8596L2.54241 34.4418C2.53833 34.4429 2.53432 34.4439 2.53024 34.445C1.50505 34.7049 0.459809 34.0822 0.199941 33.0572L0.0596013 32.5036C-0.0663249 32.007 0.0087668 31.4911 0.270885 31.0509C0.531948 30.6126 0.947413 30.3017 1.44127 30.1748L12.7429 27.1328C12.7465 27.1318 12.7502 27.1308 12.754 27.1299C13.5204 26.9359 14.3216 27.1032 14.9523 27.5892C15.597 28.0861 15.9712 28.8364 15.9789 29.6478C15.9826 30.0415 16.3481 30.3869 16.761 30.3869H19.2391C19.4408 30.3869 19.6426 30.3035 19.7925 30.1583C19.9401 30.0154 20.0213 29.8317 20.0213 29.6409C20.0208 28.8449 20.3871 28.103 21.0261 27.6054C21.6651 27.1078 22.4744 26.9345 23.2461 27.1299C23.2499 27.1309 23.2536 27.1318 23.2573 27.1329L34.5589 30.1748C35.0528 30.3017 35.4682 30.6126 35.7293 31.0509C35.9914 31.4911 36.0664 32.007 35.9406 32.5036L35.8002 33.0572C35.5404 34.0823 34.4949 34.7046 33.4699 34.445C33.4658 34.4439 33.4618 34.4429 33.4578 34.4418L23.9241 31.8595C23.5653 32.6053 23.0261 33.2662 22.3608 33.7651C21.4633 34.438 20.3959 34.7937 19.2739 34.7937ZM12.5406 30.1589C12.8716 30.1589 13.1766 30.3729 13.279 30.7038C13.7424 32.2011 15.1599 33.2468 16.7262 33.2468H19.2739C20.8402 33.2468 22.2578 32.2011 22.7211 30.7038C22.8442 30.3059 23.2603 30.0772 23.6622 30.1859L33.8543 32.9466C34.051 32.994 34.2509 32.8739 34.3008 32.677L34.4411 32.1235C34.474 31.9938 34.4296 31.8918 34.4002 31.8424C34.3709 31.7931 34.3023 31.7055 34.1726 31.6727C34.169 31.6717 34.1652 31.6708 34.1616 31.6698L22.8614 28.6283C22.5571 28.5529 22.2349 28.6247 21.9765 28.8258C21.7168 29.0281 21.5679 29.325 21.5681 29.6402C21.5685 30.2538 21.32 30.8325 20.8686 31.2696C20.4263 31.6979 19.8476 31.9338 19.2391 31.9338H16.761C15.4888 31.9338 14.444 30.9148 14.4321 29.6624C14.429 29.3288 14.2744 29.0197 14.0081 28.8144C13.8604 28.7007 13.5515 28.5256 13.1386 28.6283L1.83853 31.6698C1.83487 31.6708 1.83122 31.6717 1.82756 31.6727C1.69791 31.7055 1.62928 31.7931 1.59997 31.8424C1.57065 31.8918 1.52621 31.9938 1.55904 32.1235L1.69938 32.6771C1.74931 32.874 1.94899 32.9943 2.14586 32.9466L12.338 30.1859C12.4056 30.1676 12.4736 30.1589 12.5406 30.1589Z" fill="black"></path></g><defs><clipPath id="clip0_504_1723"><rect width="36" height="36" fill="white"></rect></clipPath></defs></svg>
                        <div>
                            <p className='font-[Poppins] font-bold'>Students Discounts</p>
                        </div>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none"><g clip-path="url(#clip0_504_1723)"><path d="M34.087 8.18657L18.2945 1.27146C18.0968 1.1849 17.8719 1.1849 17.674 1.27146L1.88219 8.18657C1.58759 8.31559 1.40352 8.6135 1.42004 8.93475C1.42264 8.98523 1.43066 9.03445 1.44254 9.08226V15.5322C0.602118 15.8424 0.000470143 16.6586 0.000470143 17.6141C0.000470143 18.8357 0.983764 19.8296 2.19233 19.8296C3.4009 19.8296 4.38419 18.8357 4.38419 17.6141C4.38419 16.6766 3.80491 15.8739 2.98937 15.5509V9.96248L8.80307 11.8247C8.80307 11.8247 8.80307 18.1008 8.80307 18.1069C8.80307 18.3484 8.9238 18.5867 9.118 18.7297C9.2492 18.8263 12.3953 21.095 17.9849 21.095C23.5746 21.095 26.7201 18.8263 26.8513 18.7296C27.0454 18.5867 27.1662 18.3481 27.1662 18.1068V11.8246L34.0126 9.63153C34.319 9.53344 34.5326 9.25593 34.5491 8.93468C34.5656 8.61357 34.3816 8.31559 34.087 8.18657ZM2.1924 18.2828C1.8367 18.2828 1.54737 17.9828 1.54737 17.6141C1.54737 17.2454 1.83677 16.9454 2.1924 16.9454C2.54803 16.9454 2.83743 17.2454 2.83743 17.6141C2.83743 17.9828 2.5481 18.2828 2.1924 18.2828ZM25.6193 16.7695C24.2054 16.0725 21.6085 15.1188 17.9843 15.1188C14.3605 15.1188 11.7638 16.0724 10.3499 16.7695V11.0368C11.2261 10.5172 13.89 9.17205 17.9843 9.17205C22.0786 9.17205 24.743 10.5172 25.6193 11.0369V16.7695ZM11.149 18.1069C12.425 17.4989 14.7613 16.6656 17.9843 16.6656C21.2078 16.6656 23.5448 17.4991 24.8203 18.1068C23.5443 18.7149 21.2079 19.5481 17.985 19.5481C14.7615 19.5482 12.4245 18.7147 11.149 18.1069ZM27.0644 10.233C27.0115 10.1397 26.9401 10.0566 26.8514 9.99116C26.7202 9.89456 23.5739 7.62521 17.9843 7.62521C12.3946 7.62521 9.24905 9.89463 9.11786 9.99123C9.02912 10.0566 8.95776 10.1397 8.90481 10.233L4.37709 8.78274L17.9842 2.82427L31.592 8.78274L27.0644 10.233Z" fill="black"></path><path d="M35.4831 26.6878C35.4541 26.3628 35.2147 26.0956 34.8991 26.013L23.1677 22.944C22.2628 22.7053 21.3164 22.7395 20.4308 23.0426C19.4079 23.392 18.5644 24.0679 17.9998 24.93C17.4355 24.0679 16.5922 23.3921 15.5698 23.0428C14.6841 22.7395 13.7376 22.7053 12.8337 22.9436L1.09007 26.0189C0.774449 26.1015 0.535182 26.3688 0.506144 26.6938C0.477246 27.0172 0.644093 27.3196 0.937569 27.4577C1.04451 27.5166 2.34835 28.2817 2.34835 30.5458C2.34835 30.973 2.69463 31.3192 3.12177 31.3192C3.5489 31.3192 3.89518 30.973 3.89518 30.5458C3.89518 28.9459 3.38691 27.8584 2.85149 27.1566L13.2268 24.4397C13.8359 24.2791 14.4728 24.3022 15.0692 24.5064C16.3594 24.9471 17.2262 26.1594 17.2262 27.523V31.1602C17.2262 31.5873 17.5725 31.9336 17.9996 31.9336C18.4268 31.9336 18.773 31.5873 18.773 31.1602V27.523C18.773 26.1596 19.6402 24.9473 20.9312 24.5062C21.5275 24.3022 22.1645 24.2791 22.7747 24.4401L33.1376 27.1511C32.6024 27.8529 32.0941 28.9404 32.0941 30.54C32.0941 30.9671 32.4404 31.3134 32.8675 31.3134C33.2946 31.3134 33.6409 30.9671 33.6409 30.54C33.6409 28.2759 34.9448 27.5108 35.0517 27.452C35.3452 27.3137 35.5121 27.0113 35.4831 26.6878Z" fill="#7659FF"></path><path d="M19.2739 34.7937H16.7262C15.6042 34.7937 14.5368 34.438 13.6394 33.7651C12.974 33.2662 12.4348 32.6053 12.076 31.8596L2.54241 34.4418C2.53833 34.4429 2.53432 34.4439 2.53024 34.445C1.50505 34.7049 0.459809 34.0822 0.199941 33.0572L0.0596013 32.5036C-0.0663249 32.007 0.0087668 31.4911 0.270885 31.0509C0.531948 30.6126 0.947413 30.3017 1.44127 30.1748L12.7429 27.1328C12.7465 27.1318 12.7502 27.1308 12.754 27.1299C13.5204 26.9359 14.3216 27.1032 14.9523 27.5892C15.597 28.0861 15.9712 28.8364 15.9789 29.6478C15.9826 30.0415 16.3481 30.3869 16.761 30.3869H19.2391C19.4408 30.3869 19.6426 30.3035 19.7925 30.1583C19.9401 30.0154 20.0213 29.8317 20.0213 29.6409C20.0208 28.8449 20.3871 28.103 21.0261 27.6054C21.6651 27.1078 22.4744 26.9345 23.2461 27.1299C23.2499 27.1309 23.2536 27.1318 23.2573 27.1329L34.5589 30.1748C35.0528 30.3017 35.4682 30.6126 35.7293 31.0509C35.9914 31.4911 36.0664 32.007 35.9406 32.5036L35.8002 33.0572C35.5404 34.0823 34.4949 34.7046 33.4699 34.445C33.4658 34.4439 33.4618 34.4429 33.4578 34.4418L23.9241 31.8595C23.5653 32.6053 23.0261 33.2662 22.3608 33.7651C21.4633 34.438 20.3959 34.7937 19.2739 34.7937ZM12.5406 30.1589C12.8716 30.1589 13.1766 30.3729 13.279 30.7038C13.7424 32.2011 15.1599 33.2468 16.7262 33.2468H19.2739C20.8402 33.2468 22.2578 32.2011 22.7211 30.7038C22.8442 30.3059 23.2603 30.0772 23.6622 30.1859L33.8543 32.9466C34.051 32.994 34.2509 32.8739 34.3008 32.677L34.4411 32.1235C34.474 31.9938 34.4296 31.8918 34.4002 31.8424C34.3709 31.7931 34.3023 31.7055 34.1726 31.6727C34.169 31.6717 34.1652 31.6708 34.1616 31.6698L22.8614 28.6283C22.5571 28.5529 22.2349 28.6247 21.9765 28.8258C21.7168 29.0281 21.5679 29.325 21.5681 29.6402C21.5685 30.2538 21.32 30.8325 20.8686 31.2696C20.4263 31.6979 19.8476 31.9338 19.2391 31.9338H16.761C15.4888 31.9338 14.444 30.9148 14.4321 29.6624C14.429 29.3288 14.2744 29.0197 14.0081 28.8144C13.8604 28.7007 13.5515 28.5256 13.1386 28.6283L1.83853 31.6698C1.83487 31.6708 1.83122 31.6717 1.82756 31.6727C1.69791 31.7055 1.62928 31.7931 1.59997 31.8424C1.57065 31.8918 1.52621 31.9938 1.55904 32.1235L1.69938 32.6771C1.74931 32.874 1.94899 32.9943 2.14586 32.9466L12.338 30.1859C12.4056 30.1676 12.4736 30.1589 12.5406 30.1589Z" fill="black"></path></g><defs><clipPath id="clip0_504_1723"><rect width="36" height="36" fill="white"></rect></clipPath></defs></svg>
                        <div>
                            <p className='font-[Poppins] font-bold'>Students Discounts</p>
                        </div>
                    </div>
                </div>
                <div>
                    <button className='flex gap-5 px-5 py-2 rounded-full bg-[#FF8C05] items-center text-white font-bold font-[Poppins]'>Explore Courses <div className='bg-white p-3 rounded-full'><ArrowRight color='#FF8C05'></ArrowRight></div></button>
                </div>
            </div>
        </div>
    </div>
      
    </>
  )
}

export default AboutSection
