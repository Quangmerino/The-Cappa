import { Navigation, Option, cardPricingType, cardServiceType, faciltiesType, newType, reviewType, roomType } from "@/types";
import { AiOutlineGlobal, AiOutlineCar } from "react-icons/ai";
import { TbSwimming, TbBed, TbWifi, TbBread } from "react-icons/tb";

export const menu:Navigation[] = [
    {
        name: "Home",
        path: "/",
        subMenu: [
            {
                name: "Layout 1",
                path: "/layout1",
            },
            {
                name: "Layout 2",
                path: "/layout2",
            },
            {
                name: "Layout 3",
                path: "/layout3",
            },
            {
                name: "Layout 4",
                path: "/layout4",
            },
            {
                name: "Video 1",
                path: "/video1",
            },
            {
                name: "Video 2",
                path: "/video2",
            },
            {
                name: "Video 3",
                path: "/video3",
            },
            {
                name: "Slideshow 1",
                path: "/slideshow1",
            },
            {
                name: "Slideshow 2",
                path: "/slideshow2",
            },
            {
                name: "Slideshow 3",
                path: "/slideshow3",
            },
            {
                name: "Parallax 1",
                path: "/parallax1",
            },
            {
                name: "Parallax 2",
                path: "/parallax2",
            },
            {
                name: "Parallax 3",
                path: "/parallax3",
            },
            {
                name: "Grid Background 1",
                path: "/grid-background1",
            },
            {
                name: "Grid Background 2",
                path: "/grid-background2",
            },
        ]
    },
    {
        name: "About",
        path: "/about",
        subMenu: [],
    },
    {
        name: "Rooms & Suites",
        path: "rooms-suites",
        subMenu: [],
    },
    {
        name: "Restaurant",
        path: "/restaurant",
        subMenu: [],
    },
    {
        name: "Spa",
        path: "/spa",
        subMenu: [],
    },
    {
        name: "Pages",
        path: "/pages",
        subMenu: [
            {
                name: "Services",
                path: "/pages/services",
            },
            {
                name: "Facilites",
                path: "/pages/facilites",
            },
            {
                name: "Gallery",
                path: "/pages/gallery",
            },
            {
                name: "Team",
                path: "/pages/team",
            },
            {
                name: "Pricing",
                path: "/pages/pricing",
            },
            {
                name: "Careers",
                path: "/pages/careers",
            },
            {
                name: "F.A.Qs",
                path: "/pages/faqs",
            },
            {
                name: "404",
                path: "/pages/404",
            },
            {
                name: "Coming Soon",
                path: "/pages/coming-soon",
            },
        ]
    },
    {
        name: "News",
        path: "/news",
        subMenu: [
            {
                name: "New 1",
                path: "/news/new1",
            },
            {
                name: "New 2",
                path: "/news/new2",
            },
            {
                name: "Single Post",
                path: "/news/single-post",
            },
        ]
    },
    {
        name: "Contact",
        path: "/contact",
        subMenu: [],
    },
]

export const sliders = [
    {
        id: 1,
        src: "/sliders/slider1.jpeg",
    },
    {
        id: 2,
        src: "/sliders/slider2.jpeg",
    },
    {
        id: 3,
        src: "/sliders/slider3.jpeg",
    },
]

export const abouts:Navigation[] = [
    {
        name: 'Home',
        path: '/',
    },
    {
        name: 'Rooms & Suites',
        path: '/rooms-suites',
    },
    {
        name: 'Restaurant',
        path: '/restaurant',
    },
    {
        name: 'Spa & Wellness',
        path: '/span',
    },
    {
        name: 'About Hotel',
        path: '/about',
    },
    {
        name: 'Contact',
        path: '/contact',
    },
]

export const languages: Option[] = [
    {
      value: "en",
      label: "English"
    },
    {
      value: "vn",
      label: "Việt Nam",
    }
  ]

export const adults: Option[] = [
    {
        value: "1 Adult",
        label: "1 Adult",
    },
    {
        value: "2 Adult",
        label: "2 Adult",
    },
    {
        value: "3 Adult",
        label: "3 Adult",
    },
    {
        value: "4 Adult",
        label: "4 Adult",
    }
]

export const childs: Option[] = [
    {
        value: "Children",
        label: "Children",
    },
    {
        value: "1 Child",
        label: "1 Child",
    },
    {
        value: "2 Children",
        label: "2 Children",
    },
    {
        value: "3 Children",
        label: "3 Children",
    },
    {
        value: "4 Children",
        label: "4 Children",
    }
]

export const roomSelect: Option[] = [
    {
        value: "Room 1",
        label: "Room 1",
    },
    {
        value: "Room 2",
        label: "Room 2",
    },
    {
        value: "Room 3",
        label: "Room 3",
    },
    {
        value: "Room 4",
        label: "Room 4",
    }
]

export const rooms:roomType[] = [
    {
        image: "/images/rooms/room1.jpeg",
        price: "150",
        time: "Night",
        name: "Junior Suite",
    },
    {
        image: "/images/rooms/room2.jpeg",
        price: "200",
        time: "Night",
        name: "Family Room",
    },
    {
        image: "/images/rooms/room3.jpeg",
        price: "250",
        time: "Night",
        name: "Double Room",
    },
    {
        image: "/images/rooms/room4.jpeg",
        price: "300",
        time: "Night",
        name: "Deluxe Room",
    },
    {
        image: "/images/rooms/room7.jpeg",
        price: "150",
        time: "Night",
        name: "Superior Room",
    },
]

export const pricings:cardPricingType[] = [
    {
        image: "/images/pricings/pricings-3.jpeg",
        price: "50",
        time: "month",
        name: "Room cleaning",
        benefits: [
            {
                status: true,
                text: 'Hotel ut nisan the duru',
            },
            {
                status: true,
                text: 'Orci miss natoque vasa ince',
            },
            {
                status: false,
                text: 'Clean sorem ipsum morbin',
            },
        ]
    },
    {
        image: "/images/pricings/pricings-4.jpeg",
        price: "30",
        time: "daily",
        name: "Drinks included",
        benefits: [
            {
                status: true,
                text: 'Hotel ut nisan the duru',
            },
            {
                status: true,
                text: 'Orci miss natoque vasa ince',
            },
            {
                status: false,
                text: 'Clean sorem ipsum morbin',
            },
        ]
    },
    {
        image: "/images/pricings/pricings-2.jpeg",
        price: "30",
        time: "daily",
        name: "Room Breakfast",
        benefits: [
            {
                status: true,
                text: 'Hotel ut nisan the duru',
            },
            {
                status: true,
                text: 'Orci miss natoque vasa ince',
            },
            {
                status: false,
                text: 'Clean sorem ipsum morbin',
            },
        ]
    },
    {
        image: "/images/pricings/pricings-1.jpeg",
        price: "30",
        time: "daily",
        name: "Safe & Secure",
        benefits: [
            {
                status: true,
                text: 'Hotel ut nisan the duru',
            },
            {
                status: true,
                text: 'Orci miss natoque vasa ince',
            },
            {
                status: false,
                text: 'Clean sorem ipsum morbin',
            },
        ]
    },
]

export const cardFacilties:faciltiesType[] = [
    {
        icon: <AiOutlineGlobal className="text-[#aa8453] text-[45px]"/>,
        title: 'Pick Up & Drop',
        description: 'We’ll pick up from airport while you comfy on your ride, mus nellentesque habitant.'
    },
    {
        icon: <AiOutlineCar className="text-[#aa8453] text-[45px]"/>,
        title: 'Parking Space',
        description: 'Fusce tincidunt nis ace park norttito sit amet space, mus nellentesque habitant.'
    },
    {
        icon: <TbBed className="text-[#aa8453] text-[45px]"/>,
        title: 'Room Service',
        description: 'Room tincidunt nis ace park norttito sit amet space, mus nellentesque habitant.'
    },
    {
        icon: <TbSwimming className="text-[#aa8453] text-[45px]"/>,
        title: 'Swimming Pool',
        description: 'Swimming pool tincidunt nise ace park norttito sit space, mus nellentesque habitant.'
    },
    {
        icon: <TbWifi className="text-[#aa8453] text-[45px]"/>,
        title: 'Fibre Internet',
        description: 'Wifi tincidunt nis ace park norttito sit amet space, mus nellentesque habitant.'
    },
    {
        icon: <TbBread className="text-[#aa8453] text-[45px]"/>,
        title: 'Breakfast',
        description: 'Eat tincidunt nisa ace park norttito sit amet space, mus nellentesque habitant'
    },
]

export const reviews:reviewType[] = [
    {
        content: 'Hotel dapibus asue metus the nec feusiate eraten miss hendreri net ve ante the lemon sanleo nectan feugiat erat hendrerit necuis ve ante otel inilla duiman at finibus viverra neca the sene on satien the miss drana inc fermen norttito sit space, mus nellentesque habitan.',
        avatar: '/images/teams/team4.jpeg',
        name: 'Emily Brown',
        description: 'Guest review',
        rating: 5,
    },
    {
        content: 'Hotel dapibus asue metus the nec feusiate eraten miss hendreri net ve ante the lemon sanleo nectan feugiat erat hendrerit necuis ve ante otel inilla duiman at finibus viverra neca the sene on satien the miss drana inc fermen norttito sit space, mus nellentesque habitan.',
        avatar: '/images/teams/team1.jpeg',
        name: 'Nolan White',
        description: 'Guest review',
        rating: 5,
    },
    {
        content: 'Hotel dapibus asue metus the nec feusiate eraten miss hendreri net ve ante the lemon sanleo nectan feugiat erat hendrerit necuis ve ante otel inilla duiman at finibus viverra neca the sene on satien the miss drana inc fermen norttito sit space, mus nellentesque habitan.',
        avatar: '/images/teams/team5.jpeg',
        name: 'Olivia Martin',
        description: 'Guest review',
        rating: 5,
    }
]

export const services:cardServiceType[] = [
    {
        image: '/images/restaurants/restaurant1.jpeg',
        title: 'The Restaurant',
        subTitle: 'Discover',
        content: 'Restaurant inilla duiman at elit finibus viverra nec a lacus themo the nesudea seneoice misuscipit non sagie the fermen ziverra tristiue duru the ivite dianne onen nivami acsestion augue artine.',
        link: ''
    },
    {
        image: '/images/spa/spa3.jpeg',
        title: 'Spa Center',
        subTitle: 'Experiences',
        content: 'Spa center inilla duiman at elit finibus viverra nec a lacus themo the nesudea seneoice misuscipit non sagie the fermen ziverra tristiue duru the ivite dianne onen nivami acsestion augue artine.',
        link: ''
    },
    {
        image: '/images/spa/spa2.jpeg',
        title: 'Fitness Center',
        subTitle: 'Modern',
        content: 'Restaurant inilla duiman at elit finibus viverra nec a lacus themo the nesudea seneoice misuscipit non sagie the fermen ziverra tristiue duru the ivite dianne onen nivami acsestion augue artine.',
        link: ''
    },
    {
        image: '/images/spa/spa1.jpeg',
        title: 'The Health Club & Pool',
        subTitle: 'Experiences',
        content: 'Restaurant inilla duiman at elit finibus viverra nec a lacus themo the nesudea seneoice misuscipit non sagie the fermen ziverra tristiue duru the ivite dianne onen nivami acsestion augue artine.',
        link: ''
    },
]

export const news:newType[] = [
    {
        image: '/images/news/new1.jpeg',
        date: '02',
        title: 'Historic restaurant renovated',
        subTitle: 'Restaurant',
    },
    {
        image: '/images/news/new2.jpeg',
        date: '04',
        title: 'Benefits of Spa Treatments',
        subTitle: 'Spa',
    },
    {
        image: '/images/news/new3.jpeg',
        date: '06',
        title: 'Hotel Bathroom Collections',
        subTitle: 'Bathrooms',
    },
    {
        image: '/images/news/new4.jpeg',
        date: '08',
        title: 'Weight Loss with Fitness Health Club',
        subTitle: 'Health',
    },
    {
        image: '/images/news/new5.jpeg',
        date: '08',
        title: 'Retro Lighting Design in The Hotels',
        subTitle: 'Design',
    },
    {
        image: '/images/news/new6.jpeg',
        date: '08',
        title: 'Benefits of Swimming for Your Health',
        subTitle: 'Health',
    },
]

export const clients = [
    {
        logo: '/logo/clients/client1.png',
        link: '',
    },
    {
        logo: '/logo/clients/client2.png',
        link: '',
    },
    {
        logo: '/logo/clients/client3.png',
        link: '',
    },
    {
        logo: '/logo/clients/client4.png',
        link: '',
    },
    {
        logo: '/logo/clients/client5.png',
        link: '',
    },
    {
        logo: '/logo/clients/client6.png',
        link: '',
    },
]