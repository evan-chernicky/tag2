import { StaticImageData } from 'next/image';
import SlidePicture from '../../assets/images/slide-picture.png';

interface AccordionSlide {
    description: string;
    image: string | StaticImageData;
    link: string;
    title: string;
  }

export const accordionSlides: AccordionSlide[] = [
    {
        title: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.",
        description: "Dicta Sunt Explicabo. Nemo Enim Ipsam Voluptatem Quia Voluptas Sit Aspernatur Aut Odit Aut Fugit, Sed Quia. Lorem Ipsum Dolor Sit Amet, Consectetur.",
        image: SlidePicture,
        link: '#'
    },
    {
        title: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.",
        description: "Dicta Sunt Explicabo. Nemo Enim Ipsam Voluptatem Quia Voluptas Sit Aspernatur Aut Odit Aut Fugit, Sed Quia. Lorem Ipsum Dolor Sit Amet, Consectetur.",
        image: SlidePicture,
        link: '#'
    },
    {
        title: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.",
        description: "Dicta Sunt Explicabo. Nemo Enim Ipsam Voluptatem Quia Voluptas Sit Aspernatur Aut Odit Aut Fugit, Sed Quia. Lorem Ipsum Dolor Sit Amet, Consectetur.",
        image: SlidePicture,
        link: '#'
    },
    {
        title: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.",
        description: "Dicta Sunt Explicabo. Nemo Enim Ipsam Voluptatem Quia Voluptas Sit Aspernatur Aut Odit Aut Fugit, Sed Quia. Lorem Ipsum Dolor Sit Amet, Consectetur.",
        image: SlidePicture,
        link: '#'
    },
    {
        title: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.",
        description: "Dicta Sunt Explicabo. Nemo Enim Ipsam Voluptatem Quia Voluptas Sit Aspernatur Aut Odit Aut Fugit, Sed Quia. Lorem Ipsum Dolor Sit Amet, Consectetur.",
        image: SlidePicture,
        link: '#'
    },

]