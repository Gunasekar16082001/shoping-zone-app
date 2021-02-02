import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shoping-card',
  templateUrl: './shoping-card.component.html',
  styleUrls: ['./shoping-card.component.css']
})
export class ShopingCardComponent implements OnInit {

  listOfCards = [
    {
      title:  "Title 1",
      desc: "Description 1",
      imageScr: "../../assets/card/Latest-blouse-design.jpg",
      price: "1000"
    },
    {
      title:  "Title 2",
      desc: "Description 2",
      imageScr: "../../assets/card/blouse-back-neck-designs.jpg",
      price: "2000"
    },
    {
      title:  "Title 3",
      desc: "Description 3",
      imageScr: "../../assets/card/3b69de9032e09be98571563857cbc237.jpg",
      price: "3000"
    },
  
    {
      title:  "Title 4",
      desc: "Description 1",
      imageScr: "../../assets/card/Fancy-Back-Side-Blouse-Designs-with-frill-sleeves.jpg ",
      price: "4000"
    },
    {
      title:  "Title 5",
      desc: "Description 1",
      imageScr: "../../assets/card/4-front-open-blouse-pattern.jpg",
      price: "4000"
    },
    {
      title:  "Title 6",
      desc: "Description 1",
      imageScr: "../../assets/card/5uRMuVfWy7D_XIc0t8EU5Ex7vWjBpmF-9xmb_DIv8MfkvpBMLttIKmH6PAk577SRwk-3C78bujpmlBU5RxV8wLEN2WXczZYGC8qjpebKwPN3_rd6ZNRfuNavZjm_QHuAyzgh1QyP.jpg",
      price: "4000"
    },
    {
      title:  "Title 7",
      desc: "Description 1",
      imageScr: "../../assets/card/7a33e393f889c26a0b6b78ba7482bff8.jpeg",
      price: "4000"
    },
    {
      title:  "Title 8",
      desc: "Description 1",
      imageScr: "../../assets/card/27ea93cb62ca3239f6afad2288aaa546.jpg",
      price: "4000"
    },
    {
      title:  "Title 9",
      desc: "Description 1",
      imageScr: "../../assets/card/83b3eeec5f760632407e14b35b50f158.jpg",
      price: "4000"
    },
    {
      title:  "Title 1",
      desc: "Description 1",
      imageScr: "../../assets/card/04707d61f069d457df67463b19ab2336.jpg",
      price: "4000"
    },
    {
      title:  "Title 1",
      desc: "Description 1",
      imageScr: "../../assets/card/Basic-back-cut-blouse-with-elbow-length-sleeves-749x1024.jpg",
      price: "4000"
    },
    {
      title:  "Title 1",
      desc: "Description 1",
      imageScr: "../../assets/card/blouse-back-design.jpg",
      price: "4000"
    },
    {
      title:  "Title 10",
      desc: "Description 1",
      imageScr: "../../assets/card/blouse-back-design25.jpg",
      price: "4000"
    },
    {
      title:  "Title 11",
      desc: "Description 1",
      imageScr: "../../assets/card/Deep-Cut-Blouse-Back-Designs-1024x1024.jpg",
      price: "4000"
    },
    {
      title:  "Title 12",
      desc: "Description 1",
      imageScr: "../../assets/card/e4d9a425e2ccaa64225b3159a9c18897.jpg",
      price: "4000"
    },
    {
      title:  "Title 13",
      desc: "Description 1",
      imageScr: "../../assets/card/f9efdc13bde3376406665a33758489c9.jpg",
      price: "4000"
    },
    {
      title:  "Title 14",
      desc: "Description 1",
      imageScr: "../../assets/card/f19aa832f57f87bb737e9daf48f805be.jpeg",
      price: "4000"
    },
    {
      title:  "Title 15",
      desc: "Description 1",
      imageScr: "../../assets/card/Fancy-Back-Side-Blouse-Designs-with-frill-sleeves.jpg",
      price: "4000"
    },
    {
      title:  "Title 16",
      desc: "Description 1",
      imageScr: "../../assets/card/latest-blouse-designs-images-22.jpg",
      price: "4000"
    },
    {
      title:  "Title 16",
      desc: "Description 1",
      imageScr: "../../assets/card/81103100_144795270304080_6728612924300757821_n.jpg",
      price: "4000"
    },
    {
      title:  "Title 16",
      desc: "Description 1",
      imageScr: "../../assets/card/7a33e393f889c26a0b6b78ba7482bff8.jpeg",
      price: "4000"
    },
    {
      title:  "Title 1",
      desc: "Description 1",
      imageScr: "../../assets/card/Latest-blouse-design.jpg",
      price: "1000"
    },
    {
      title:  "Title 2",
      desc: "Description 2",
      imageScr: "../../assets/card/blouse-back-neck-designs.jpg",
      price: "2000"
    },
    {
      title:  "Title 3",
      desc: "Description 3",
      imageScr: "../../assets/card/3b69de9032e09be98571563857cbc237.jpg",
      price: "3000"
    },
  
    {
      title:  "Title 4",
      desc: "Description 1",
      imageScr: "../../assets/card/Fancy-Back-Side-Blouse-Designs-with-frill-sleeves.jpg ",
      price: "4000"
    },
    {
      title:  "Title 5",
      desc: "Description 1",
      imageScr: "../../assets/card/4-front-open-blouse-pattern.jpg",
      price: "4000"
    },
    {
      title:  "Title 6",
      desc: "Description 1",
      imageScr: "../../assets/card/5uRMuVfWy7D_XIc0t8EU5Ex7vWjBpmF-9xmb_DIv8MfkvpBMLttIKmH6PAk577SRwk-3C78bujpmlBU5RxV8wLEN2WXczZYGC8qjpebKwPN3_rd6ZNRfuNavZjm_QHuAyzgh1QyP.jpg",
      price: "4000"
    },
    {
      title:  "Title 7",
      desc: "Description 1",
      imageScr: "../../assets/card/7a33e393f889c26a0b6b78ba7482bff8.jpeg",
      price: "4000"
    },
    {
      title:  "Title 8",
      desc: "Description 1",
      imageScr: "../../assets/card/27ea93cb62ca3239f6afad2288aaa546.jpg",
      price: "4000"
    },
    {
      title:  "Title 9",
      desc: "Description 1",
      imageScr: "../../assets/card/83b3eeec5f760632407e14b35b50f158.jpg",
      price: "4000"
    },
    {
      title:  "Title 1",
      desc: "Description 1",
      imageScr: "../../assets/card/04707d61f069d457df67463b19ab2336.jpg",
      price: "4000"
    },
    {
      title:  "Title 1",
      desc: "Description 1",
      imageScr: "../../assets/card/Basic-back-cut-blouse-with-elbow-length-sleeves-749x1024.jpg",
      price: "4000"
    },
    {
      title:  "Title 1",
      desc: "Description 1",
      imageScr: "../../assets/card/blouse-back-design.jpg",
      price: "4000"
    },
    {
      title:  "Title 10",
      desc: "Description 1",
      imageScr: "../../assets/card/blouse-back-design25.jpg",
      price: "4000"
    },
    {
      title:  "Title 11",
      desc: "Description 1",
      imageScr: "../../assets/card/Deep-Cut-Blouse-Back-Designs-1024x1024.jpg",
      price: "4000"
    },
    {
      title:  "Title 12",
      desc: "Description 1",
      imageScr: "../../assets/card/e4d9a425e2ccaa64225b3159a9c18897.jpg",
      price: "4000"
    },
    {
      title:  "Title 13",
      desc: "Description 1",
      imageScr: "../../assets/card/f9efdc13bde3376406665a33758489c9.jpg",
      price: "4000"
    },
    {
      title:  "Title 14",
      desc: "Description 1",
      imageScr: "../../assets/card/f19aa832f57f87bb737e9daf48f805be.jpeg",
      price: "4000"
    },
    {
      title:  "Title 15",
      desc: "Description 1",
      imageScr: "../../assets/card/Fancy-Back-Side-Blouse-Designs-with-frill-sleeves.jpg",
      price: "4000"
    },
    {
      title:  "Title 16",
      desc: "Description 1",
      imageScr: "../../assets/card/latest-blouse-designs-images-22.jpg",
      price: "4000"
    },
    {
      title:  "Title 16",
      desc: "Description 1",
      imageScr: "../../assets/card/81103100_144795270304080_6728612924300757821_n.jpg",
      price: "4000"
    },
    {
      title:  "Title 16",
      desc: "Description 1",
      imageScr: "../../assets/card/7a33e393f889c26a0b6b78ba7482bff8.jpeg",
      price: "4000"
    },
    {
      title:  "Title 1",
      desc: "Description 1",
      imageScr: "../../assets/card/Latest-blouse-design.jpg",
      price: "1000"
    },
    {
      title:  "Title 2",
      desc: "Description 2",
      imageScr: "../../assets/card/blouse-back-neck-designs.jpg",
      price: "2000"
    },
    {
      title:  "Title 3",
      desc: "Description 3",
      imageScr: "../../assets/card/3b69de9032e09be98571563857cbc237.jpg",
      price: "3000"
    },
  
    {
      title:  "Title 4",
      desc: "Description 1",
      imageScr: "../../assets/card/Fancy-Back-Side-Blouse-Designs-with-frill-sleeves.jpg ",
      price: "4000"
    },
    {
      title:  "Title 5",
      desc: "Description 1",
      imageScr: "../../assets/card/4-front-open-blouse-pattern.jpg",
      price: "4000"
    },
    {
      title:  "Title 6",
      desc: "Description 1",
      imageScr: "../../assets/card/5uRMuVfWy7D_XIc0t8EU5Ex7vWjBpmF-9xmb_DIv8MfkvpBMLttIKmH6PAk577SRwk-3C78bujpmlBU5RxV8wLEN2WXczZYGC8qjpebKwPN3_rd6ZNRfuNavZjm_QHuAyzgh1QyP.jpg",
      price: "4000"
    },
    {
      title:  "Title 7",
      desc: "Description 1",
      imageScr: "../../assets/card/7a33e393f889c26a0b6b78ba7482bff8.jpeg",
      price: "4000"
    },
    {
      title:  "Title 8",
      desc: "Description 1",
      imageScr: "../../assets/card/27ea93cb62ca3239f6afad2288aaa546.jpg",
      price: "4000"
    },
    {
      title:  "Title 9",
      desc: "Description 1",
      imageScr: "../../assets/card/83b3eeec5f760632407e14b35b50f158.jpg",
      price: "4000"
    },
    {
      title:  "Title 1",
      desc: "Description 1",
      imageScr: "../../assets/card/04707d61f069d457df67463b19ab2336.jpg",
      price: "4000"
    },
    {
      title:  "Title 1",
      desc: "Description 1",
      imageScr: "../../assets/card/Basic-back-cut-blouse-with-elbow-length-sleeves-749x1024.jpg",
      price: "4000"
    },
    {
      title:  "Title 1",
      desc: "Description 1",
      imageScr: "../../assets/card/blouse-back-design.jpg",
      price: "4000"
    },
    {
      title:  "Title 10",
      desc: "Description 1",
      imageScr: "../../assets/card/blouse-back-design25.jpg",
      price: "4000"
    },
    {
      title:  "Title 11",
      desc: "Description 1",
      imageScr: "../../assets/card/Deep-Cut-Blouse-Back-Designs-1024x1024.jpg",
      price: "4000"
    },
    {
      title:  "Title 12",
      desc: "Description 1",
      imageScr: "../../assets/card/e4d9a425e2ccaa64225b3159a9c18897.jpg",
      price: "4000"
    },
    {
      title:  "Title 13",
      desc: "Description 1",
      imageScr: "../../assets/card/f9efdc13bde3376406665a33758489c9.jpg",
      price: "4000"
    },
    {
      title:  "Title 14",
      desc: "Description 1",
      imageScr: "../../assets/card/f19aa832f57f87bb737e9daf48f805be.jpeg",
      price: "4000"
    },
    {
      title:  "Title 15",
      desc: "Description 1",
      imageScr: "../../assets/card/Fancy-Back-Side-Blouse-Designs-with-frill-sleeves.jpg",
      price: "4000"
    },
    {
      title:  "Title 16",
      desc: "Description 1",
      imageScr: "../../assets/card/latest-blouse-designs-images-22.jpg",
      price: "4000"
    },
    {
      title:  "Title 16",
      desc: "Description 1",
      imageScr: "../../assets/card/81103100_144795270304080_6728612924300757821_n.jpg",
      price: "4000"
    },
    {
      title:  "Title 16",
      desc: "Description 1",
      imageScr: "../../assets/card/7a33e393f889c26a0b6b78ba7482bff8.jpeg",
      price: "4000"
    },


   


   
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
