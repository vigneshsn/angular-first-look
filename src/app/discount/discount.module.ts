import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DiscountComponent } from './discount.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [DiscountComponent],
    imports: [CommonModule, FormsModule],
    exports: [DiscountComponent]
})
export class DiscountModule {}