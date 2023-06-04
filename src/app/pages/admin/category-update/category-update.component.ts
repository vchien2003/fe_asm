import { Component } from '@angular/core';
import { ICategory } from 'src/app/interfaces/category';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-category-update',
  templateUrl: './category-update.component.html',
  styleUrls: ['./category-update.component.scss'],
})
export class CategoryUpdateComponent {
  id: string = '';

  categoryForm = this.formBuilder.group({
    name: ['', [Validators.required]],
  });

  constructor(
    private categoryService: CategoryService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.route.paramMap.subscribe((param) => {
      const id = String(param.get('id'));
      this.categoryService.getCategoryById(id).subscribe(({ category }) => {
        this.id = category._id || '';
        this.categoryForm.patchValue(category);
      });
    });
  }

  onHandleSubmit() {
    if (this.categoryForm.invalid) return;

    const category: ICategory = {
      _id: this.id,
      name: this.categoryForm.value.name || '',
    };
    this.categoryService.updateCategory(category).subscribe(() => {
      this.router.navigate(['/admin/categories']);
      alert('Sửa danh mục thành công!');
    });
  }
}
