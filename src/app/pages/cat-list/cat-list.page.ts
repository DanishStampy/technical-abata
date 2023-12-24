import { Component, OnInit } from '@angular/core';
import { CatService } from 'src/app/services/cat.service';

@Component({
  selector: 'app-cat-list',
  templateUrl: './cat-list.page.html',
  styleUrls: ['./cat-list.page.scss'],
})
export class CatListPage implements OnInit {

  cats: any;
  currentPage = 1;

  constructor(
    private catService: CatService
  ) { }

  ngOnInit() {
    this.loadCats();
  }

  async loadCats() {
    this.catService.getAllCat(this.currentPage).subscribe(
     {
      next: (res) => {
        this.cats = res.data;
        console.log(this.cats);
      },
      complete: () => {
        console.log('done!');
      },
      error: (err) => {
        console.log(err);
      }
     }
    );
  }

}
