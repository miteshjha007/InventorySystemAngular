import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { ApiServiceService } from './Services/api-service.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  displayedColumns: string[] = ['productName', 'category', 'date', 'price', 'freshness', 'comment', 'Actions'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  title = 'CrudOperation';
  constructor(private dialog: MatDialog, private api: ApiServiceService) {

  }
  ngOnInit(): void {
    this.getProducts();
  }
  openDialog() {
    this.dialog.open(DialogComponent, {
      width: '30%'
    }).afterClosed().subscribe(val => {
      if (val == "Save") {
        this.getProducts();
      }
    });
  }

  productList: [] = [];
  getProducts() {
    return this.api.getProduct().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        // this.productList = res;
      },
      error: () => {
        alert("Something went wrong while getting product list.");
      }
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  editProduct(obj: any) {
    this.dialog.open(DialogComponent, {

      width: '30%',
      data: obj
    }).afterClosed().subscribe(obj => {
      if (obj == "Updated") {
        this.getProducts();
      }
    })
  }

  deleteProduct(id: number) {
    this.api.deleteData(id).subscribe({
      next: (res) => {
        alert("Product deleted successfully.");
        this.getProducts();
      },
      error: () => {
        alert("Error while deleting the record.");
      }
    })
  }
  d: any;
  referUrl(id: number) {
    this.d = id;
  }
}
