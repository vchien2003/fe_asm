import { Component } from '@angular/core';
import { ICategory } from 'src/app/interfaces/category';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.scss'],
})
export class CategoryAddComponent {
  categoryForm = this.formBuilder.group({
    name: ['', [Validators.required]],
  });

  constructor(
    private categoryService: CategoryService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  onHandleSubmit() {
    if (this.categoryForm.invalid) return;
    const category: ICategory = {
      name: this.categoryForm.value.name || '',
    };

    this.categoryService.createCategory(category).subscribe(() => {
      this.router.navigate(['/admin/categories']);
      alert(`Thêm danh mục thành công!`);
    });
  }
}
