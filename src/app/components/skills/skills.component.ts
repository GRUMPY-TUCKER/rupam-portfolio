import { Component } from '@angular/core';

interface Skill {
  name: string;
  icon: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class Skills {

  readonly skillRows: Skill[][] = [
    ['Java:java', 'Python:python', 'C++:cplusplus', 'JavaScript:javascript', 'SQL:mysql', 'HTML5:html5', 'CSS3:css3', 'Spring Boot:springboot'],
    ['React.js:react', 'Node.js:nodedotjs', 'Express.js:express', 'Django:django', 'REST APIs:fastapi', 'JWT:jsonwebtokens', 'Bootstrap:bootstrap', 'MySQL:mysql'],
    ['MongoDB:mongodb', 'Redis:redis', 'Prisma ORM:prisma', 'AWS EC2:amazonaws', 'Docker:docker', 'GitHub:github', 'Postman:postman', 'LangGraph:graphql'],
    ['LangChain:chainlink', 'RAG:googlegemini', 'LLaMA:meta', 'Pandas:pandas', 'NumPy:numpy', 'Scikit-learn:scikitlearn', 'Data Structures:leetcode', 'Algorithms:codeforces'],
    ['OOP:cplusplus', 'DBMS:databricks', 'Operating Systems:linux', 'Computer Networks:cisco', 'Distributed Systems:apache', 'System Design:diagramsdotnet']
  ].map(row => row.map(entry => {
    const separator = entry.lastIndexOf(':');
    return {
      name: entry.slice(0, separator),
      icon: `https://cdn.simpleicons.org/${entry.slice(separator + 1)}`
    };
  }));

  hideBrokenIcon(event: Event): void {
    const image = event.target as HTMLImageElement;
    image.style.display = 'none';
    image.nextElementSibling?.classList.add('is-visible');
  }

}