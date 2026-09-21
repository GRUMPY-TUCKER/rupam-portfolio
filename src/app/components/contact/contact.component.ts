import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class Contact {

  viewResumeLink = '/resume/rupam-sadhukhan-resume.html';
  resumeLink = 'https://drive.google.com/file/d/12dvZ59BmeIYpqU-a0sZTJFyraLN3Tl_z/view?usp=drivesdk';
  leetcodeLink = 'https://leetcode.com/u/Grumpy_Tucker3/';
  codeforcesLink = 'https://codeforces.com/profile/Grumpy_Tucker3';
  linkedinLink = 'https://www.linkedin.com/in/rupam-sadhukhan-7058b0240/';
  githubLink = 'https://github.com/GRUMPY-TUCKER';

}