export type Event = {
  id: number;
  name: string;
  date: string;
  location: string;
  category: string;
  imageUrl: string;
};

export type Banner = {
  imgSrc: string;
  imgWidth: number;
  imgHeight: number;
  imgClassName?: string;
  bannerTitle: string;
  bannerDescription: string;
  bannerLink: string;
};
