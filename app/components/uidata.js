import automatedSavings from "../../public/images/automatedSavings.avif"
import fixedSavings from "../../public/images/fixedSavings.avif"
import goalOrientedSavings from "../../public/images/goalOrientedSavings.avif"
import flexNaira_phone from "../../public/images/flexNaira_phone.avif"
import flexDollar_phone from "../../public/images/flexDollar_phone.avif"
import techPoint from "../../public/images/techpoint.png"
import theGuardian from "../../public/images/theGuardian.png"
import techCrunch from "../../public/images/techCrunch.png"
import pymnts from "../../public/images/pymnts.svg"
import fastcompany from "../../public/images/fastcompany.svg"
import cio from "../../public/images/cio.svg"
import safelock from "../../public/images/safelock.avif"
import targetsavings from "../../public/images/targetsavings.avif"
import flexnaira from "../../public/images/flexnaira.avif"
import investify from "../../public/images/investify.avif"
import piggybank from "../../public/images/piggybank-icon.png"
import safeLock from "../../public/images/safelock-icon.png"
import targetIcon from "../../public/images/targets-icon.png"
import flexNaira from "../../public/images/flex-naira-icon.png"
import flexDollar from "../../public/images/flex-dollar-icon.png"
import logo from "../../public/images/paves.png"
import thumb from "../../public/images/thumb.inv68202cdd88.jpg"
import thumb1 from "../../public/images/thumb.inv470f16e718.png"
import thumb2 from "../../public/images/thumb.inv88c81f074f.jpg"
import thumb3 from "../../public/images/thumb.inv97031b1a73.jpg"

import Image from 'next/image'
import { AiOutlinePoweroff } from "react-icons/ai"
import { LuPercent, LuUser } from "react-icons/lu"


export const landingPageLogos = [
    {
        images: [safelock, targetsavings],
        time: [1, 1.2]
    },
    {
        images: [investify, flexnaira],
        time: [1.4, 1.6]

    },
]
export const buildSavings = [
    // {
    //     title: "Automated Savings",
    //     subtitle: "Build a dedicated savings faster on your terms, automatically or manually.",
    //     arrowText: "PacePloyt",
    //     textColor: "rgb(0, 51, 153)",
    //     backgroundColor: "#0f60d6",
    //     img: automatedSavings,
    //     hovered: false
    // },
    {
        title: "Daily Save",
        subtitle: "Reach all your savings goals faster. Save towards multiple goals on your own or with a group.",
        arrowText: "Daily Save",
        textColor: "rgb(50, 150, 255)",
        backgroundColor: "#2295f2",
        img: fixedSavings,
        hovered: false
    },
    {
        title: "Fixed Save (Lock)",
        subtitle: "Lock money away for a fixed diration withput having access to it until maturity. It's like having a custom fixed deposit.",
        arrowText: "PaveLock",
        textColor: "#7913e5",
        backgroundColor: "#7913e5",
        img: goalOrientedSavings,
        hovered: false
    },
    // {
    //     title: "Flex Naira",
    //     subtitle: " Save, transfer, manage, organise, and withdraw your money at any time.",
    //     arrowText: "flex naira",
    //     textColor: "rgb(229, 40, 142)",
    //     backgroundColor: "#e5489b",
    //     img: flexNaira_phone,
    //     hovered: false
    // },
    // {
    //     title: "Flex Dollar",
    //     subtitle: "Save and grow your money in foreign currencies such as Dollars.",
    //     arrowText: "flex dollar",
    //     textColor: "rgb(12, 24, 37)",
    //     backgroundColor: "#0c1825",
    //     img: flexDollar_phone,
    //     hovered: false
    // }
]

export const featuredLogos = [
    {
        logo: techPoint,
        href: "/"
    },
    {
        logo: theGuardian,
        href: "/"
    },
    {
        logo: techCrunch,
        href: "/"
    },
    {
        logo: pymnts,
        href: "/"
    },
    {
        logo: fastcompany,
        href: "/"
    },
    {
        logo: cio,
        href: "/"
    }
]

export const footerLinks = [
    {
        name: "Products",
        links: [
            { text: "Pave", url: "" },
            { text: "Invest", url: "" },
            { text: "Safelock", url: "" },
            { text: "Target Savings", url: "" },
            { text: "Flex Naira", url: "" },
            { text: "Flex Dollar", url: "" },
        ]
    },
    {
        name: "Company",
        links: [
            { text: "About", url: "" },
            { text: "FAQs", url: "" },
            { text: "Blog", url: "" },


        ]
    },
    {
        name: "Legal",
        links: [
            { text: "Terms", url: "" },
            { text: "Privacy", url: "" },
            { text: "Security", url: "" },
        ]
    }
]

export const saveNavs = [
    {
        img: piggybank,
        title: "PACEPLOYT",
        subtitle: "Automated Savings",
        hover: "hover:text-[#0d60d8"
    },
    {
        img: safeLock,
        title: "Safelock",
        subtitle: "Fixed Savings",
        hover: "hover:text-[#2295f2"
    },
    {
        img: targetIcon,
        title: "Target Savings",
        subtitle: "Goal-oriented Savings",
        hover: "hover:text-[#10b259"
    },
    {
        img: flexNaira,
        title: "Flex naira",
        subtitle: "Flexible Savings",
        hover: "hover:text-[#ea4fa2"
    },
    {
        img: flexDollar,
        title: "Flex dollar",
        subtitle: "Dollar Savings",
        hover: "hover:text-[#000"
    }

];

export const dashboardNavs = [
    {
        left: <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-white w-6 h-6 cursor-pointer" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>,
        right: <Image alt="logo" src={logo} width={70} quality={100} />
    },
    {
        left: <><path d="M9 22H5C4.73478 22 4.48043 21.8946 4.29289 21.7071C4.10536 21.5196 4 21.2652 4 21V11L12 3L20 11V21C20 21.2652 19.8946 21.5196 19.7071 21.7071C19.5196 21.8946 19.2652 22 19 22H15C14.7348 22 14.4804 21.8946 14.2929 21.7071C14.1054 21.5196 14 21.2652 14 21V17C14 16.7348 13.8946 16.4804 13.7071 16.2929C13.5196 16.1054 13.2652 16 13 16H11C10.7348 16 10.4804 16.1054 10.2929 16.2929C10.1054 16.4804 10 16.7348 10 17V21C10 21.2652 9.89464 21.5196 9.70711 21.7071C9.51957 21.8946 9.26522 22 9 22ZM12 13C12.5304 13 13.0391 12.7893 13.4142 12.4142C13.7893 12.0391 14 11.5304 14 11C14 10.4696 13.7893 9.96086 13.4142 9.58579C13.0391 9.21071 12.5304 9 12 9C11.4696 9 10.9609 9.21071 10.5858 9.58579C10.2107 9.96086 10 10.4696 10 11C10 11.5304 10.2107 12.0391 10.5858 12.4142C10.9609 12.7893 11.4696 13 12 13Z"></path><path d="M12.0101 4.42L3.71007 12.72C3.61749 12.8132 3.50745 12.8873 3.38624 12.938C3.26502 12.9888 3.135 13.0151 3.00361 13.0156C2.87221 13.016 2.74202 12.9906 2.62044 12.9407C2.49887 12.8909 2.38831 12.8176 2.29507 12.725C2.20184 12.6324 2.12775 12.5224 2.07703 12.4012C2.02632 12.2799 1.99998 12.1499 1.99952 12.0185C1.99905 11.8871 2.02447 11.7569 2.07433 11.6354C2.12418 11.5138 2.19749 11.4032 2.29007 11.31L11.3101 2.29C11.4974 2.10375 11.7509 1.99921 12.0151 1.99921C12.2793 1.99921 12.5327 2.10375 12.7201 2.29L21.7101 11.31C21.8971 11.4983 22.0016 11.7532 22.0006 12.0185C21.9997 12.2839 21.8934 12.538 21.7051 12.725C21.5168 12.912 21.2619 13.0165 20.9965 13.0156C20.7312 13.0146 20.4771 12.9083 20.2901 12.72L12.0101 4.42Z" ></path></>,
        right: "home",
    },

    {
        left: <><path d="M15.2301 2.52999L14.8801 2.87999C14.4907 3.2649 14.214 3.74906 14.0801 4.27999C12.3759 3.81958 10.5674 3.93505 8.93554 4.60845C7.30373 5.28184 5.94007 6.47543 5.05653 8.00371C4.17299 9.53198 3.81905 11.3093 4.04973 13.0595C4.28042 14.8096 5.08279 16.4346 6.33215 17.6817C7.58151 18.9289 9.20787 19.7284 10.9584 19.9559C12.709 20.1835 14.4857 19.8264 16.0124 18.9402C17.5391 18.0539 18.7303 16.6881 19.4008 15.0551C20.0713 13.4221 20.1835 11.6134 19.7201 9.90999C20.25 9.77891 20.734 9.50577 21.1201 9.11999L21.4701 8.76999C21.9864 10.2758 22.1354 11.8832 21.9046 13.4582C21.6738 15.0332 21.07 16.5303 20.1435 17.8247C19.217 19.1191 17.9945 20.1734 16.578 20.8996C15.1615 21.6259 13.592 22.0032 12.0001 22C10.5499 21.9974 9.11763 21.6795 7.80257 21.0682C6.4875 20.4569 5.32113 19.5669 4.38432 18.4599C3.44752 17.3528 2.76269 16.0553 2.37734 14.6573C1.99198 13.2592 1.91532 11.7941 2.15265 10.3634C2.38999 8.93276 2.93566 7.57086 3.75181 6.37212C4.56797 5.17338 5.63508 4.1665 6.87916 3.4213C8.12325 2.67609 9.51453 2.21039 10.9565 2.05648C12.3985 1.90257 13.8568 2.06414 15.2301 2.52999ZM13.5501 6.19999L11.7501 7.99999C10.982 8.04776 10.244 8.31609 9.62461 8.7728C9.0052 9.2295 8.53069 9.8552 8.25799 10.5748C7.98528 11.2945 7.92596 12.0775 8.08713 12.83C8.24831 13.5825 8.62314 14.2726 9.16667 14.8174C9.7102 15.3622 10.3994 15.7386 11.1515 15.9016C11.9036 16.0645 12.6868 16.007 13.407 15.736C14.1273 15.465 14.7541 14.992 15.2123 14.3737C15.6705 13.7553 15.9405 13.018 15.9901 12.25L17.7901 10.45C18.13 11.7261 18.0394 13.0788 17.5322 14.2982C17.0251 15.5176 16.1299 16.5356 14.9853 17.1944C13.8407 17.8532 12.5107 18.1159 11.2016 17.9419C9.89247 17.7679 8.67733 17.1668 7.7446 16.2318C6.81187 15.2969 6.21365 14.0804 6.04271 12.7708C5.87177 11.4613 6.13765 10.132 6.79914 8.98892C7.46062 7.84589 8.48074 6.95303 9.70133 6.44878C10.9219 5.94454 12.2748 5.85709 13.5501 6.19999Z" ></path><path d="M16 6.58999V4.99999C16.0038 4.73622 16.1116 4.48462 16.3 4.29999L18.3 2.29999C18.4398 2.16295 18.6167 2.06994 18.8088 2.0325C19.001 1.99506 19.1999 2.01483 19.3809 2.08936C19.5619 2.16389 19.717 2.2899 19.8271 2.45178C19.9371 2.61365 19.9973 2.80427 20 2.99999V3.99999H21C21.1958 4.00274 21.3864 4.06287 21.5482 4.17293C21.7101 4.28299 21.8361 4.43814 21.9107 4.61914C21.9852 4.80015 22.005 4.99904 21.9675 5.19117C21.9301 5.3833 21.8371 5.56022 21.7 5.69999L19.7 7.69999C19.5154 7.88841 19.2638 7.99624 19 7.99999H17.41L12.71 12.7C12.5199 12.8653 12.2744 12.9527 12.0226 12.9448C11.7708 12.9369 11.5313 12.8343 11.3519 12.6574C11.1725 12.4805 11.0665 12.2425 11.055 11.9908C11.0435 11.7392 11.1275 11.4924 11.29 11.3L16 6.57999V6.58999Z" ></path></>,
        right: "savings",


    },
    {
        left: <><path d="M6.6399 6.45999H13.7099C13.9077 6.46082 14.1008 6.52028 14.2647 6.63084C14.4287 6.7414 14.5562 6.89811 14.6312 7.08114C14.7061 7.26417 14.7251 7.46531 14.6857 7.65912C14.6463 7.85294 14.5503 8.03072 14.4099 8.16999L10.1699 12.41C9.98527 12.5984 9.73367 12.7062 9.4699 12.71H2.3799C2.18382 12.7053 1.99346 12.6431 1.83249 12.531C1.67152 12.419 1.54706 12.262 1.47458 12.0798C1.40211 11.8975 1.38483 11.698 1.42489 11.506C1.46495 11.314 1.56059 11.138 1.6999 11L5.9399 6.75999C6.12453 6.57158 6.37613 6.46375 6.6399 6.45999ZM17.5399 17.36C17.5393 17.4923 17.5125 17.6232 17.4611 17.7451C17.4096 17.8669 17.3344 17.9774 17.2399 18.07L12.9999 22.31C12.8601 22.447 12.6832 22.54 12.4911 22.5775C12.2989 22.6149 12.1 22.5952 11.919 22.5206C11.738 22.4461 11.5829 22.3201 11.4728 22.1582C11.3628 21.9963 11.3026 21.8057 11.2999 21.61V14.54C11.2991 14.4084 11.3244 14.2779 11.3741 14.1561C11.4239 14.0342 11.4972 13.9234 11.5899 13.83L15.8299 9.58999C15.9697 9.45295 16.1466 9.35994 16.3387 9.3225C16.5308 9.28506 16.7297 9.30483 16.9107 9.37936C17.0917 9.45389 17.2469 9.5799 17.357 9.74178C17.467 9.90365 17.5271 10.0943 17.5299 10.29V17.36H17.5399Z" ></path><path d="M5.78001 13.19C6.87684 10.2249 8.83063 7.65287 11.393 5.801C13.9553 3.94913 17.0105 2.90105 20.17 2.78999C20.3081 2.78434 20.4458 2.80738 20.5746 2.85765C20.7033 2.90792 20.8202 2.98433 20.9179 3.08205C21.0157 3.17977 21.0921 3.29668 21.1423 3.42542C21.1926 3.55415 21.2157 3.6919 21.21 3.82999C21.0989 6.98953 20.0509 10.0447 18.199 12.607C16.3471 15.1694 13.7751 17.1232 10.81 18.22C10.6016 18.2971 10.3734 18.3025 10.1616 18.2355C9.94972 18.1685 9.7662 18.0329 9.64001 17.85C8.68885 16.4861 7.50393 15.3012 6.14001 14.35C5.96101 14.2229 5.82878 14.0405 5.76372 13.8309C5.69866 13.6213 5.70439 13.396 5.78001 13.19ZM6.37001 15.76C7.04326 16.3313 7.66868 16.9567 8.24001 17.63C8.34644 17.7563 8.41993 17.907 8.45392 18.0686C8.48791 18.2302 8.48133 18.3978 8.43478 18.5562C8.38823 18.7147 8.30316 18.8592 8.18715 18.9767C8.07115 19.0943 7.92784 19.1813 7.77001 19.23C6.98001 19.48 6.17001 19.65 5.37001 19.77C5.2158 19.7934 5.05826 19.7804 4.90997 19.732C4.76168 19.6837 4.62676 19.6013 4.51599 19.4915C4.40521 19.3817 4.32166 19.2475 4.272 19.0997C4.22235 18.9518 4.20796 18.7944 4.23001 18.64C4.35001 17.82 4.53001 17.02 4.76001 16.23C4.80868 16.0722 4.89568 15.9288 5.01325 15.8128C5.13082 15.6968 5.27529 15.6118 5.43376 15.5652C5.59223 15.5187 5.75976 15.5121 5.92139 15.5461C6.08302 15.5801 6.23371 15.6536 6.36001 15.76H6.37001Z" ></path><path d="M7.22997 10.26C9.89618 11.8661 12.128 14.1013 13.73 16.77C12.81 17.35 11.83 17.84 10.81 18.22C10.6016 18.2971 10.3734 18.3026 10.1615 18.2356C9.94968 18.1686 9.76616 18.0329 9.63997 17.85C8.68881 16.4861 7.50389 15.3012 6.13997 14.35C5.96097 14.223 5.82875 14.0405 5.76369 13.8309C5.69863 13.6213 5.70435 13.3961 5.77997 13.19C6.15997 12.16 6.64997 11.19 7.22997 10.26ZM17.62 3.1C18.46 2.93 19.32 2.83 20.17 2.8C20.3081 2.79435 20.4458 2.81739 20.5745 2.86766C20.7033 2.91793 20.8202 2.99434 20.9179 3.09206C21.0156 3.18978 21.092 3.30669 21.1423 3.43543C21.1926 3.56416 21.2156 3.70191 21.21 3.84C21.18 4.7 21.08 5.55 20.91 6.39C19.9507 5.16402 18.846 4.05924 17.62 3.1ZM13.71 10.3C13.5241 10.1142 13.3767 9.89358 13.2762 9.65079C13.1756 9.408 13.1239 9.14779 13.1239 8.885C13.1239 8.35427 13.3347 7.84528 13.71 7.47C14.0853 7.09472 14.5942 6.88389 15.125 6.88389C15.3878 6.88389 15.648 6.93565 15.8908 7.03621C16.1335 7.13678 16.3541 7.28418 16.54 7.47C16.9153 7.84528 17.1261 8.35427 17.1261 8.885C17.1261 9.41573 16.9153 9.92472 16.54 10.3C16.1647 10.6753 15.6557 10.8861 15.125 10.8861C14.5942 10.8861 14.0853 10.6753 13.71 10.3Z" ></path></>,
        right: "invest",

    },
    {
        left: < ><circle cx="12" cy="7" r="4" ></circle><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" ></path></>,
        right: "account",


    },
    {
        left: <AiOutlinePoweroff size={24} />,
        right: "logout",

    }
]

export const dashboardHome = [
    {
        href: "",
        text: "Total Savings",
        amount: "₦0.00",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"  ><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>,
        bg: "#0D60D8"
    },
    {
        href: "",
        text: "Total Savings",
        amount: "₦0.00",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>,
        bg: "#7913E5"
    },
    {
        href: "",
        text: "Daily Save",
        amount: "₦0.00",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"  ><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>,
        bg: "#222222"
    },
    {
        href: "",
        text: "Fixed Save (Lock)",
        amount: "₦0.00",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#E7439C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"  ><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line></svg>,
        bg: "#7913E5"
    },
    {
        href: "",
        text: "Link PocketApp",
        amount: "₦***",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"  ><circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path></svg>,
        bg: "#753FF6"
    }
]

export const toDoList = [
    {
        title: "Add your BVN or NIN now",
        isChecked: false,
        href: "bvn"
    },
    {
        title: "Tell us more about yourself",
        isChecked: false,
        href: "moreinfo"
    },
    {
        title: "Securely add a valid debit card",
        isChecked: false,
        href: "adddebit"
    },
    {
        title: "Set your security question now!",
        isChecked: false,
        href: "securityquestion"
    },
    {
        title: "Refer a friend, earn ₦1,000.00 bonus 🎉",
        isChecked: false,
        href: "referfriend"
    }
]

export const dashboardSavings = [
    {
        title: "PACEPLOYT",
        subtitle: "Strict savings automatically. Daily, weekly or Monthly. 10% p.a",
        amount: "₦0.00",
        bgColor: "rgb(204, 240, 254)",
        textColor: "rgb(13, 96, 216)",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"  ><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
    },
    {
        title: "Fixed Lock",
        subtitle: "Flexible savings for emergencies. Free transfers, withdrawals etc. 8% p.a",
        amount: "₦0.00",
        bgColor: "rgb(255, 234, 245)",
        textColor: "rgb(231, 67, 156)",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"  ><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line></svg>
    },
    {
        title: "Daily Lock",
        subtitle: "Lock funds to avoid temptations. Upfront interest. Up to 13% p.a",
        amount: "₦0.00",
        bgColor: "rgb(231, 246, 255)",
        textColor: "rgb(34, 149, 242)",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"  ><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
    },
    {
        title: "targets",
        subtitle: "Reach your unique individual saving goals. 9% p.a",
        amount: "₦0.00",
        bgColor: "rgb(220, 255, 235)",
        textColor: "rgb(39, 174, 96)",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
    },
    {
        title: "flex dollar",
        subtitle: "Save & grow your wealth in dollars. Up to 7% p.a in dollars",
        amount: "₦0.00",
        bgColor: "rgb(239, 244, 245)",
        textColor: "rgb(0, 0, 0)",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"  ><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
    },
    {
        title: "PocketApp",
        subtitle: "Withdraw your savings to your pocket faster ⚡️",
        amount: "Connect Account",
        bgColor: "rgb(241, 236, 254)",
        textColor: "rgb(117, 63, 246)",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"  ><circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path></svg>
    }
]

export const dashboardInvest = [
    {
        title: "My investments",
        href: "/dashboard/investify",
        icon: <>
            <circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle>
        </>
    },

    {
        title: "Explore",
        href: "/dashboard/investify/explore",
        icon: <>
            <circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
        </>
    },
    {
        title: "Completed",
        href: "/dashboard/investify/completed",
        icon: <>
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </>
    }
]

export const dashboardFilterInvest = ["All", "Fixed Income", "Real-Estate", "Agriculture", "Transportation"];

export const dashboardInvestments = [
    {
        img: thumb,
        title: "Cashew Nut Investment ",

        category: "Agriculture"
    },
    {
        img: thumb1,
        title: "Corportate debt notes series xvi",
        category: "Transportation"

    },
    {
        img: thumb3,
        title: "Corportate debt notes series xvi",
        category: "Fixed Income"

    }
]

export const myAccount = [
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><line x1="19" y1="5" x2="5" y2="19"></line><circle cx="6.5" cy="6.5" r="2.5"></circle><circle cx="17.5" cy="17.5" r="2.5"></circle></svg>,
        title: "Today's Rates",
        href: "/rate"
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>,
        title: "My account settings",
        href: "/rate"
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path></svg>,
        title: "Today's Rates",
        href: "/rate"
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>,
        title: "add your BVN or NIN",
        href: "/rate"
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>,
        title: "refer & earn  ₦1,000.00",
        href: "/rate"
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"  ><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>,
        title: "withdraw funds",
        href: "/rate"
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>,
        title: "my card & bank settings",
        href: "/rate"
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>,
        title: "my story",
        href: "/rate"
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>,
        title: "view pave library",
        href: "/rate"
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>,
        title: "contact us",
        href: "/rate"
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>,
        title: "log out",
        href: "/rate"
    },
]

const generateYears = () => {
    const years = [];
    let startYear = 1938;
    for (let i = 1; i <= 70; i++) {
        years.push(`Year ${startYear}`);
        startYear++;
    }
    return years;
}
export const moreInfoInputs = [
    {
        title: "Gender",
        options: ["Gender", "Male", "Female"]
    },
    {
        title: "Year of Birth",
        options: generateYears()
    }
];