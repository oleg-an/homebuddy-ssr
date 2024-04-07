export interface ContractorModel {
  contractorName: string;
  contractorId: number;
  estimatesGiven: number;
  ratingSource: string;
  ratingValue: string;
  bbbRating: string;
  reviews: {
    author: string;
    content: string;
  }[];
  linkToImage: string;
}

export interface ReviewModel {
  author: string;
  text: string;
  link: {
    title: string;
    url: string;
  }
}

export interface PhotoGalleryModel {
  image: string
}
