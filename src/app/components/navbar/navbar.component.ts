import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class Navbar {

  menuOpen = false;

  readonly hireMeLink = 'https://mail.google.com/mail/?view=cm&fs=1&to=rsadhukhan859%40gmail.com&su=Opportunity%20to%20work%20with%20Rupam%20Sadhukhan&body=Hi%20Rupam%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss%20an%20opportunity%20with%20you.%0A%0ACompany%3A%20%5Bcompany%5D%0ARole%20title%3A%20%5Brole%5D%0ALocation%20%2F%20remote%3A%20%5Blocation%5D%0AJob%20description%3A%20%5Blink%5D%0A%0ABest%20time%20for%20a%20call%3A%20%5Btime%5D%0A%0ALooking%20forward%20to%20hearing%20from%20you.%0A%0AThanks%2C%0A%5Bname%5D';

  scrollTo(section: string): void {
    this.menuOpen = false;

    document
      .getElementById(section)
      ?.scrollIntoView({
        behavior: 'smooth'
      });
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

}