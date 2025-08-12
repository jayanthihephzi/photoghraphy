import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { SkillsComponent } from './skills/skills.component';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
import { GalleryItemComponent } from './gallery-item/gallery-item.component';
import { VideoPortfolioComponent } from './video-portfolio/video-portfolio.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SafeUrlPipe } from './safe-url.pipe';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PortfolioShowcaseComponent } from './portfolio-showcase/portfolio-showcase.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    SkillsComponent,
    PhotoGalleryComponent,
    GalleryItemComponent,
    VideoPortfolioComponent,
    AboutComponent,
    ContactComponent,
    SafeUrlPipe,
    HeaderComponent,
    FooterComponent,
    PortfolioShowcaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
