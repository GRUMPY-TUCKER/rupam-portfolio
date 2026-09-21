import { Component } from '@angular/core';

interface Project {
  number: string;
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class Projects {

  projects: Project[] = [

    {
      number: '01',
      title: 'Namma Food Platform',
      description:
        'A scalable food delivery platform built with Java, Spring Boot, React.js, and AWS, serving 1K+ concurrent users with resilient backend services.',
      technologies: [
        'Java',
        'Spring Boot',
        'React.js',
        'AWS'
      ],
      githubLink: 'https://github.com/GRUMPY-TUCKER/NammaFood'
    },

    {
      number: '02',
      title: 'AIVA Mock Interviewer',
      description:
        'An AI-powered interview simulation platform using NLP, Python, and Scikit-Learn to support adaptive interview workflows and reusable service components.',
      technologies: [
        'Python',
        'NLP',
        'Scikit-Learn',
        'AI'
      ],
      githubLink: 'https://github.com/GRUMPY-TUCKER/AIVA-Mock-Interviewer'
    },

    {
      number: '03',
      title: 'Project Kshitij',
      description:
        'A beach safety application built with Java, Kafka, Redis, and REST APIs to enable real-time alerts and predictive safety workflows.',
      technologies: [
        'Java',
        'Kafka',
        'Redis',
        'REST API'
      ],
      githubLink: 'https://github.com/GRUMPY-TUCKER/Kshitij'
    },

    {
      number: '04',
      title: 'Face Recognition - ComputerVision',
      description:
        'A compact, easy-to-follow repository with utilities and notebooks to build and experiment with classical and deep learning face recognition pipelines.',
      technologies: [
        'Python',
        'OpenCV',
        'TensorFlow',
        'Computer Vision'
      ],
      githubLink: 'https://github.com/GRUMPY-TUCKER/Face_Recognition_ComputerVision'
    },

  ];

}