import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cat, CatService } from 'src/app/services/cat.service';

@Component({
  selector: 'app-cat-list',
  templateUrl: './cat-list.page.html',
  styleUrls: ['./cat-list.page.scss'],
})

export class CatListPage implements OnInit {

  cats: Cat[] = [];
  links: any;
  page_url: any;
  index: number = 0;
  first_page: string = '';
  last_page: string = '';
  currentPage: number = 1;

  isOpen: boolean = false;
  catSearchAttr: string = 'breed';
  searchQuery: string = '';

  constructor(
    private catService: CatService
  ) { }

  ngOnInit() {
    this.loadCats();
  }

  async loadCats(url?: string) {
    this.catService.getAllCat(url).subscribe(
      {
        next: (res) => {
          this.cats = res.data;
          this.links = res.links;
          this.index = res.from;
          this.first_page = res.first_page_url;
          this.last_page = res.last_page_url;
          console.log(this.cats);
          console.log(res);

        },
        complete: () => {
          console.log(`get all cats`);
        },
        error: (err) => {
          console.log(err);
        }
      }
    );
  }

  async filterCats(url?: string) {
    this.catService.getAllCat(url).subscribe(
      {
        next: (res) => {
          this.cats = res.data;
          this.links = res.links;
          this.index = res.from;
          this.first_page = res.first_page_url;
          this.last_page = res.last_page_url;

          this.cats = this.searchFilterCats(this.cats, this.searchQuery, this.catSearchAttr);
        },
        complete: () => {
          console.log(`filter all cats`);
        },
        error: (err) => {
          console.log(err);
        }
      }
    );
  }

  searchFilterCats(cats: Cat[], query: string, attribute: string) {
    return cats.filter(cat =>
      cat[attribute].toLowerCase().includes(query.toLowerCase())
    )
  }

  onClickSearch() {
    console.log(this.searchQuery);
    this.filterCats();
  }

  onOpenDropwdown() {
    this.isOpen = !this.isOpen;
  }

  onPageChange(url: string) {
    this.loadCats(`${url}&limit=10`);
  }

  onSetSearchAttr(attr: string) {
    this.catSearchAttr = attr;
  }

}
