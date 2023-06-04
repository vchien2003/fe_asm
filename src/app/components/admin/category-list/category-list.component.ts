import { Component } from '@angular/core';
import { ICategory } from 'src/app/interfaces/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
})
export class CategoryListComponent {
  categories: ICategory[] = [];

  constructor(private categoryService: CategoryService) {
    this.categoryService.getCategories().subscribe(
      ({ categories }) => (this.categories = categories.data),
      (error) => console.log(error)
    );
  }

  onHandleRemove(id: any) {
    if (window.confirm('Bạn muốn xóa danh mục?')) {
      this.categoryService.deleteCategory(id).subscribe(() => {
        this.categories = this.categories.filter((cate) => cate._id !== id);
      });
    }
  }
}
