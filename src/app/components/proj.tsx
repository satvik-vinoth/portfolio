import { orbitron } from "../lib/fonts";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import Image from "next/image";

const Proj : React.FC = () => {
    const items = [
        {
          title: "NOCODE ML",
          description: "Developed a full-stack interactive platform to train, evaluate, and compare ML models without writing code. Includes support for regression, classification, preprocessing, and visualization.",
          header: <Image
                    className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl hover:scale-110 transition-transform duration-300"
                    src="/no-code.jpg"
                    alt="No Code ML"
                    width={200}
                    height={300}
                  />,
          link: "https://github.com/satvik-vinoth/nocode",
          website: "https://nocode-blue.vercel.app",
        },
        {
          title: "Smart Email Organizer",
          description: "Built a Gmail activity insights dashboard using Angular and Google APIs to analyze response times, contacts, and email categories.",
          header: <Image
                    className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl hover:scale-110 transition-transform duration-300"
                    src="/email.jpg"        
                    alt="Smart Email Organizer"
                    width={200}
                    height={300}
                  />,
          link: "https://github.com/satvik-vinoth/email-organizer",
          website: "https://satvik-vinoth.github.io/email-organizer",
        },
                

        {
          title: "Stock Price Prediction",
          description: "Stock price prediction website that uses machine learning (ML) models such as Transformer, GRU, and LSTM to forecast future stock prices",
          header: <Image
                    className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl hover:scale-110 transition-transform duration-300"
                    src="/stock.jpeg"        
                    alt="Logo"
                    width={200}
                    height={300}
                    />,
          link:"https://github.com/satvik-vinoth/stock-prediction-website-using-ML",
          website: "https://stock-vision-prediction.vercel.app",
        },
        {
          title: "Dual authenticated smart door locks using ML",
          description: "Published in JODAC journal. Developed a smart door lock system featuring dual authentication using RFID and a keypad.Implemented secure password encryption, incorporated a PIR sensor to optimize energy usage, and integrated a machine learning model to identify irregular access patterns, enhancing overall security.",
          header: <Image
                    className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl hover:scale-110 transition-transform duration-300"
                    src="/door.png"        
                    alt="Logo"
                    width={200}
                    height={300}
                    />,
          link:"https://jodac.org/dual-authenticated-smart-door-locks-using-machine-learning-technique/"
        },
        {
          title: "Traffic sign recognition",
          description: "Developed a traffic sign recognition system using Few-Shot Learning with Prototypical Networks.",
          header: <Image
                    className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl hover:scale-110 transition-transform duration-300"
                    src="/traffic.jpg"        
                    alt="Logo"
                    width={200}
                    height={300}
                    />,
          link:"https://github.com/satvik-vinoth/traffic-sign-recognition-using-fsl"
        },
        
        {
          title: "Parkinson's Disease Classification with CNN",
          description: "Designed a deep learning model leveraging Convolutional Neural Networks (CNN) for MRI analysis.",
          header: <Image
                    className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl hover:scale-110 transition-transform duration-300"
                    src="/brain.jpeg"        
                    alt="Logo"
                    width={200}
                    height={300}
                    />,
          link:"https://github.com/satvik-vinoth/parkinsons-disease-classification",
          
        },
        {
          title: "Emotion Recogniton Website",
          description: "Multi-Modal Emotion Recognition from Video Using Audio and Visual Fusion using LSTM and CNN.",
          header: <Image
                    className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl hover:scale-110 transition-transform duration-300"
                    src="/visual.jpg"        
                    alt="Logo"
                    width={200}
                    height={300}
                    />,
          link:"https://github.com/satvik-vinoth/Emotion-Recognition-website",
        },
      ];

    return (
        <div className="pl-50 pb-20 pt-23 max-w-5xl">
            <span className={`text-[#53FFE5]  text-4xl ${orbitron.className}`}>04.</span>
            <span className={`text-gray-300 text-4xl group-hover:text-white pl-2 ${orbitron.className}`}>Projects and Research</span>
            <BentoGrid className="max-w-4xl mx-auto pt-10">
                {items.map((item, i) => (
                    <BentoGridItem
                    key={i}
                    title={item.title}
                    description={item.description}
                    header={item.header}
                    link={item.link}
                    website={item.website}
                    className={i === 3 || i === 6 ? "md:col-span-2" : ""}
                    />
                ))}
            </BentoGrid>
        </div>
    )
}
export default Proj;