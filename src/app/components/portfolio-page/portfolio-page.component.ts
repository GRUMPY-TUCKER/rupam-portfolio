import { Component } from '@angular/core';

import { Navbar } from '../navbar/navbar.component';
import { Hero } from '../hero/hero.component';
import { About } from '../about/about.component';
import { Experience } from '../experience/experience.component';
import { Projects } from '../projects/projects.component';
import { Skills } from '../skills/skills.component';
import { HowIWork } from '../how-i-work/how-i-work.component';
import { Contact } from '../contact/contact.component';

@Component({
    selector: 'app-portfolio-page',
    standalone: true,
    imports: [Navbar, Hero, About, Experience, Projects, Skills, HowIWork, Contact],
    templateUrl: './portfolio-page.component.html',
    styleUrl: './portfolio-page.component.scss'
})
export class PortfolioPage {
}
