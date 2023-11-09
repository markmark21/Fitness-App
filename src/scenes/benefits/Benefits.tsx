import {BenefitType, SelectedPage} from "@/shared/types.ts";
import {motion} from "framer-motion";
import Htext from "@/shared/Htext.tsx";
import {AcademicCapIcon, HomeModernIcon, UserGroupIcon} from "@heroicons/react/24/solid";
import Benefit from "@/scenes/benefits/Benefit.tsx";


const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className='h-6 w-6'/>,
        title: 'State of the Art Facilities',
        description: 'Some text, some text some text some text some text'
    },
    {
        icon: <UserGroupIcon className='h-6 w-6'/>,
        title: '100`s of Diverse Classes',
        description: 'Some text, some text some text some text some text'
    },
    {
        icon: <AcademicCapIcon className='h-6 w-6'/>,
        title: 'Expert and Pro Trainers',
        description: 'Some text, some text some text some text some text'
    },
]

const container = {
    hidden: {},
    visible: {
        transition: {staggerChildren: 0.2}
    }
}

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}
const Benefits = ({setSelectedPage}: Props) => {
    return <section
        id='benefits'
        className='mx-auto min-h-full w-5/6 py-20'
    >
        <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
        >
            {/* HEADER */}
            <div className='md:my-5 md:w-3/5'>
                <Htext>MORE THAN JUST A GYM.</Htext>
                <p className='my-5 text-sm'>
                    We provide world class fitness equipment, trainers and classes to
                    get you to your ultimate fitness goals with ease. We provide true
                    care into each and every member.
                </p>
            </div>
            {/* BENEFITS */}
            <motion.div
                className='md:flex items-center justify-between gap-8 mt-5'
                initial='hidden'
                whileInView-='visible'
                viewport={{once: true, amount: 0.5}}
                variants={container}
            >
                {benefits.map((benefit: BenefitType) => (
                    <Benefit
                        key={benefit.title}
                        icon={benefit.icon}
                        title={benefit.title}
                        description={benefit.description}
                        setSelectedPage={setSelectedPage}
                    />
                ))}
            </motion.div>
        </motion.div>
    </section>
        ;
};

export default Benefits;