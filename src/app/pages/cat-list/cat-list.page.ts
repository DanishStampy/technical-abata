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

  from: number = 0;
  to: number = 0;
  total: number = 0;

  first_page: number = 1;
  last_page: number = 0;
  currentPage: number = 1;

  isOpen: boolean = false;
  catSearchAttr: string = 'breed';
  searchQuery: string = '';
  numOfRow: number = 10;
  isLoading: boolean | undefined;

  constructor(
    private catService: CatService
  ) { }

  ngOnInit() {
    this.isLoading = true;
    this.loadCats(this.currentPage);
  }

  async loadCats(currentPage?: number, limit?: number) {
    this.catService.getAllCat(currentPage, limit).subscribe(
      {
        next: (res) => {
          this.cats = res.data;
          this.links = res.links;
          this.from = res.from;
          this.to = res.to;
          this.total = res.total;
          this.last_page = res.last_page;
          this.isLoading = false;
          console.log(this.cats);
          console.log(res);

        },
        complete: () => {
          this.isLoading = false;
          console.log(`get all cats`);
        },
        error: (err) => {
          this.isLoading = false;
          console.log(err);
        }
      }
    );
  }

  async filterCats(currentPage?: number, limit?: number) {
    this.catService.getAllCat(currentPage, limit).subscribe(
      {
        next: (res) => {
          this.cats = res.data;
          this.links = res.links;
          this.from = res.from;
          this.to = res.to;
          this.total = res.total;
          this.last_page = res.last_page;
          this.isLoading = false;

          this.cats = this.searchFilterCats(this.cats, this.searchQuery, this.catSearchAttr);
          console.log(this.cats);
        },
        complete: () => {
          this.isLoading = false;
          console.log(`filter all cats`);
        },
        error: (err) => {
          this.isLoading = false;
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
    this.isLoading = true;
    this.filterCats();
  }

  onOpenDropwdown() {
    this.isOpen = !this.isOpen;
  }

  onPageChange(currentPage: number) {
    this.loadCats(currentPage, this.numOfRow);
  }

  onCheckLinkLabel(label: string) {
    if(label === 'Next') {
      this.currentPage += 1;
    } else if (label === 'Previous') {
      this.currentPage -= 1;
    } else {
      let page = Number(label);
      this.currentPage = page;
    }
    this.loadCats(this.currentPage, this.numOfRow);
  }

  onSetSearchAttr(attr: string) {
    this.catSearchAttr = attr;
  }

  setLimitRow(value: any) {
    console.log(value);
    console.log(this.numOfRow);
    this.filterCats(undefined, this.numOfRow);
  }

}
