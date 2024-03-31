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
