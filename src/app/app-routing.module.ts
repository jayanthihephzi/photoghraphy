import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { SkillsComponent } from './skills/skills.component';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
import { VideoPortfolioComponent } from './video-portfolio/video-portfolio.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioShowcaseComponent } from './portfolio-showcase/portfolio-showcase.component';

const routes: Routes = [
  { path: '', component: HeroComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'portfolio', component: PhotoGalleryComponent },
  { path: 'videos', component: VideoPortfolioComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'portfolio-showcase', component: PortfolioShowcaseComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
