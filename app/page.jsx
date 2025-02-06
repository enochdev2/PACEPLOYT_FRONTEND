"use client"
// Dependencises Imports
import Image from "next/image";
import Link from "next/link";

// Image Imports
import playStore from "../public/images/google-icon.svg";
import myInvestments from "../public/images/myInvestments.avif";
import womanPicture from "../public/images/pexels-ketut-subiyanto-4350099.avif";
import piggybank from "../public/images/piggybank.avif";
import securityLock from "../public/images/securitylock.svg";
// import stories_phone from '../public/images/stories_phones.jpg';

// Components Imports
import { motion } from "framer-motion";
import { AiFillApple } from "react-icons/ai";
import BuildSavings from "./components/BuildSavings";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { buildSavings, featuredLogos, landingPageLogos } from "./components/uidata";

// import { useInView } from "react-intersection-observer";
export default function Home() {
  const fadeUp = {
    initial: { translateY: "100%", opacity: 0 },
    animate: { translateY: "0%", opacity: 1 }
  }
  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 }
  }
  return (
    <main 
    className="bg-gradient-to-tr from-[#bbb9bf] to-[#c8b5f5] "
    // className="bg-[#f2f7f8] "
    >
      <Navbar />
      {/* Header */}
      <header className="relative top-[200px] lg:top-0 grid grid-cols-2  items-end lg:grid-cols-6  px-5  md:px-20 md:pr-20 gap-y-20">
        <div className="col-span-2 flex flex-col lg:ml-16  gap-y-7 text-center lg:text-left ">
          <motion.h1
            initial={{ translateY: "100%", opacity: 0 }}
            animate={{ translateY: "0%", opacity: 1 }}
            className=" text-4xl md:text-5xl font-bold leading-tight  "
            transition={{ duration: 0.3 }}
          >The Better Way to Save & Invest </motion.h1>

          <motion.p className="leading-relaxed text-lg md:text-xl"
            initial={{ translateY: "50%", opacity: 0 }}
            animate={{ translateY: "0%", opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.4 }}
          >PACEPLOYT helps over 4 million customers achieve their financial goals by helping them save and invest with ease.</motion.p>
          <div className="flex justify-center lg:justify-normal items-center gap-x-5 my-5">

            <Link href={"/signup"} className='flex items-center btn bg-[#122231] text-white normal-case hover:bg-[#122231] '>
              <AiFillApple size={25} /> Get on iPhone
            </Link>
            <Link href={"/signup"} className='flex items-center btn bg-[#122231] text-white normal-case hover:bg-[#122231] '>
              <Image src={playStore} width={20} alt="playstore" />
              Get on Andriod
            </Link>
          </div>
        </div>
        <div className="col-span-4 lg:flex justify-end  ">
          <div className="relative cursor-pointer animate-bounceSmall flex justify-center lg:top-20">
            <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Image src={womanPicture} width={500} quality={100} alt="Woman Picture" />
            </motion.div>

            {
              landingPageLogos.map((logo, logoIndex) => (

                <div key={logoIndex} className={`flex h-[150px]  absolute justify-between w-[100%] ${logoIndex == 0 ? "top-[15%]" : "top-[55%]"}`}>
                  {
                    logo.images.map((image, imageIndex) => (
                      <motion.div
                        initial={{ translateY: "100%", opacity: 0 }}
                        animate={{ translateY: "0%", opacity: 1 }}
                        transition={{ duration: 0.3, delay: logo.time[imageIndex] }}
                        key={imageIndex} className={`relative ${imageIndex == 0 ? "-left-2  md:left-20 lg:-left-4 top-[60%]" : "-right-2 md:right-20  lg:-right-4 top-[50%]"}`}>
                        <Image src={image} key={imageIndex} alt="landingPageLogos" width={200} quality={100} />
                      </motion.div>
                    ))
                  }

                </div>
              ))
            }

            <motion.div
              initial={{ translateY: "100%", opacity: 0 }}
              animate={{ translateY: "0%", opacity: 1 }}
              transition={{ duration: 0.3, delay: 1.8 }}
              className="flex items-center absolute justify-center w-[100%] top-[100%]">

              <Image src={piggybank} width={100} quality={100} alt="PACEPLOYT" className="w-[40%] md:w-[30%] absolute " />
            </motion.div>

          </div>
        </div>
      </header>
      {/* Header ENds */}

      {/* Build your savings */}
      <main className="px-5  md:px-32 lg:px-10 py-40">
        <div className="grid grid-cols-1 lg:grid-cols-3 py-40 lg:py-32">
          <div className="flex flex-col lg:flex-row items-center gap-x-5 col-span-2 text-center lg:text-left gap-y-10">
            <Image src={securityLock} width={100} alt="securitylock" />
            <div>
              <motion.h1 viewport={{ once: true }} transition={{ delay: 0.5, type: "spring" }} variants={fadeUp} initial={"initial"} whileInView={"animate"} className="text-3xl lg:text-2xl font-bold ">Your security is our priority</motion.h1>
              <p className="my-3 text-lg lg:text-sm">PACEPLOYT uses the highest level of Internet Security and it is secured by 256 bits SSL security encryption to ensure that your information is comepletely protected from fraud.</p>
              <div className="flex gap-x-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 10L20 15L15 20" stroke="#122231" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M4 4V11C4 12.0609 4.42143 13.0783 5.17157 13.8284C5.92172 14.5786 6.93913 15 8 15H20" stroke="#122231" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                <Link href="/security" className="font-bold">
                  More on security measures
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-10 gap-x-10 items-center">
          <div className=" md:px-28  col-span-2 text-right">
            <h1 className="font-bold text-3xl  lg:text-4xl leading-snug mb-5">2 ways to build your savings</h1>

            <motion.p
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1, transition: { type: "spring" } }}
              viewport={{ amount: "all", once: true }}
              className="leading-relaxed text-xl  lg:text-xl" >Earn 5%-15% when you save with any of these PACEPLOYT plans.</motion.p>
          </div>

          {
            buildSavings.map((item, index) => (
              <BuildSavings item={{ item, index }} key={index} variant={{
                initial: { opacity: 0 },
                animate: { opacity: 1 }
              }} />
            ))
          }
        </div>
      </main>
      {/* Build your savings ends  */}


      {/* Diverse ways to invests */}
      <main className="px-5  md:px-32 lg:px-10 py-40 bg-white">
        <div className="text-center mb-20">
          <motion.h1 className="font-bold text-2xl lg:text-5xl mb-3"
            viewport={{ once: true, amount: "all" }} transition={{ type: "spring", duration: 0.5 }} variants={fadeUp} initial={"initial"} whileInView={"animate"}>Diverse ways to invest</motion.h1>
          <p className="text-lg lg:text-2xl font-light">Grow your money and invest for your future confidently</p>
        </div>

        <div className="text-center lg:text-left bg-[#7913e5] text-white rounded-3xl grid grid-cols-1 md:grid-cols-2 h-[80vh] overflow-hidden ">
          <div className="flex flex-col items-center lg:items-start justify-between px-[2rem] py-[4rem] lg:p-[4rem] gap-y-5 lg:gap-y-0">
            <div>
              <motion.h1
                viewport={{ once: true, amount: "all" }}
                transition={{ type: "spring", duration: 0.8 }}
                variants={fadeUp} initial={"initial"}
                whileInView={"animate"}
                className="text-2xl lg:text-4xl font-bold mb-10 lg:mb-5">Earn Up to 25% returns</motion.h1>
              <p className="text-[#fed6f1] lg:pr-40 text-lg lg:text-xl font-light">Invest securely and confidently on the go. Grow your money confidently by investing in pre-vetted investment opportunities.</p>
            </div>
            <div className="flex gap-x-3">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 10L20 15L15 20" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M4 4V11C4 12.0609 4.42143 13.0783 5.17157 13.8284C5.92172 14.5786 6.93913 15 8 15H20" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
              <Link href="/security" className="font-bold">
                More on security measures
              </Link>
            </div>
          </div>
          <motion.div
            viewport={{ once: true, amount: 0.5 }}
            transition={{ type: "spring", duration: 1 }}
            variants={fadeIn} initial={"initial"}
            whileInView={"animate"} className="flex justify-end p-[1rem]  lg:p-[4rem] lg:pb-0">
            <Image src={myInvestments} width={400} className="" alt="myinvestments" />
          </motion.div>
        </div>
      </main>
      {/* Diverse ways to invests ends*/}


      {/* Meet our saver of the month */}
      <main className="px-5  md:px-32 lg:px-10 pt-40 bg-gradient-to-tl from-[#bca3f6] to-[#c8b5f5]">
        <div className="text-center mb-20  px-3 lg:px-32">
          <motion.h1 viewport={{ once: true }} transition={{ delay: 0.5, type: "spring" }} variants={fadeUp} initial={"initial"} whileInView={"animate"} className="font-bold text-3xl lg:text-5xl mb-5">Meet Our Saver of the Month</motion.h1>
          <motion.p viewport={{ once: true, amount: "all" }} transition={{ delay: 0.5, type: "spring" }} variants={fadeUp} initial={"initial"} whileInView={"animate"} className="text-lg lg:text-2xl font-light">Every month, we shine a spotlight on one saver, asking them about their savings culture and how PACEPLOYT has helped them.</motion.p>
        </div>
        <div className="flex lg:justify-center">
          <iframe className="w-[100%] lg:w-[50%] h-[400px] rounded-xl" src="https://www.youtube.com/embed/8XzCzC9pFGM?si=iZFqVYUILv6Tefsg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen></iframe>
        </div>

        <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-5 pt-20 lg:pt-40 items-center ">
          <div className="col-span-2 order-2 lg:order-1">
            <Image src='/images/stories_phones.jpg' width={450} height={100} className="w-50% md:ml-14  rounded-3xl h-[600px] -mb-1" alt="stories phone" />
          </div>
          <motion.div
            initial={{ scale: 0 }}
            transition={{ duration: 0.2 }}
            whileInView={{ scale: 1 }}
            className="col-span-3 lg:px-20 order-1 lg:order-2">
            <h1 className="text-center lg:text-left text-3xl lg:text-4xl font-bold  mb-10">Join 4+ million people who save and invest with us</h1>
            <div className="flex gap-x-10">
              <Link href={"/signup"} className='duration-500 hover:-translate-y-3 flex items-center btn text-xs  bg-transparent border-[#ccc] text-black normal-case hover:bg-transparent hover:border-[#ccc]  rounded-2xl'>
                <AiFillApple size={25} /> Get on iPhone
              </Link>
              <Link href={"/signup"} className='duration-500 hover:-translate-y-3 flex items-center btn  text-xs bg-transparent border-[#ccc] text-black normal-case hover:bg-transparent hover:border-[#ccc] rounded-2xl'>
                <Image src={playStore} width={20} alt="playstore" />
                Get on Andriod
              </Link>
            </div>
          </motion.div>
        </div>
      </main>
      {/* Meet our saver of the month ends */}

      {/* Featured in  */}
      <main className=" px-10   md:px-32 lg:px-10 py-10 " style={{
        background: "linear-gradient(180deg,#f2f8f4,#fff 33.01%)"
      }}>
        <motion.h1 transition={{ type: "spring" }} variants={fadeUp} initial={"initial"} whileInView={"animate"} className="text-center font-bold text-3xl">As featured in</motion.h1>
        <div className="py-10 gap-16 grid  grid-cols-2 lg:grid-cols-6 items-center lg:px-10">
          {
            featuredLogos.map((item, index) => (
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{
                duration: 1,
                delay: (index + 1) * 0.1
              }} key={index}>
                <Link href={""} className=" flex justify-center" key={index}>
                  <Image src={item.logo} width={0} className={`${index <= 2 ? "w-[200px]" : "w-[90px]"}`} alt="techPoint" />
                </Link>
              </motion.div>
            ))
          }


        </div>
      </main>
      {/* Featured in ends here */}

      {/* Footer */}
      <Footer fadeUp={fadeUp} />
      {/* Footer Ends */}
    </main>
  )
}
