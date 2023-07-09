import { StaticImageData } from 'next/image';
import ArmyLogo from '../../assets/svgs/army-logo.svg'

interface testimonialSlides {
    quote: string;
    quotee: string;
    logo: string | StaticImageData;
  }

export const testimonialSlides: testimonialSlides[] = [
    {
        quote: "TAG helped us at vero eos et accusamus et iusto odio quod dignissimos ducimus qui blanditiis praesent",
        quotee: "Gen. James C. Mcconville",
        logo: ArmyLogo,
    },
    {
        quote: "TAG helped ",
        quotee: "Gen. James C. Mcconville",
        logo: ArmyLogo,
    },
    {
        quote: "TAG helped us at vero eos et accusamus et iusto odio quod dignissimos ducimus qui blanditiis praesent",
        quotee: "Gen. James C. Mcconville",
        logo: ArmyLogo,
    },
]