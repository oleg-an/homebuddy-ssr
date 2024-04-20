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
