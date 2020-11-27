import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UrlYoutubePipe } from './url-youtube.pipe';
import { SafePipe } from './safe.pipe';



@NgModule({
  declarations: [UrlYoutubePipe, SafePipe],
  imports: [
    CommonModule
  ]
})
export class PipeModule { }
