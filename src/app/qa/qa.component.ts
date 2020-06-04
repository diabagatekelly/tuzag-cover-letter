import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qa',
  templateUrl: './qa.component.html',
  styleUrls: ['./qa.component.css']
})
export class QAComponent implements OnInit {
  authorSearch = '';
  authorDetail = [];

  public show: boolean[] = [];

  qaArr = [
    {question:'What makes you excited about working for a small digital health firm with under 10 employees?',
    answer: 'I have a Biology degree and worked in healthcare research for several years. Even though ultimately I did not go into the medical field, it is something I have always been passionate about and my hope, even as a web developer, is that my work should once again be related to healthcare.'},

    {question:'What do you think about working fully remote?',
    answer: 'I love the idea of working remotely. Besides not having to commute, which I truly dislike, it also allows me to be a part of amazing teams based anywhere in the world, and to contribute to great projects I might not otherwise have found locally.'},

    {question:'Are you excited about our tech stack? Does your previous experience match the stack? If not, how do you think you’ll do transitioning to something else?',
    answer: 'Yes, I am very excited about your tech stack. I have a lot of experience with Angular for front-end development, and learning React was already on my todo list, as both are similar. I think it will be a fairly easy transition.'},

    {question:'What do you look for in a company you’d like to work for?',
    answer: 'I like small companies with a well-organized team and great communication. I am also looking for a company with an environment that encourages junior developers like myself to learn from those more experienced.'},

    {question:'What are the top 3 things you think are cool about tuzag?',
    answer: "1. I like that this is a digital health firm. I firmly believe in using technology to empower patients to be healthier. 2. I like that the work is remote, for the reasons stated previously. 3. I like that this is a small company. In large firms, each developer is often just another anonymous cog is a large machine. However, small companies have heart. On a small team, each developer is an indivial, which I greatly value."},

    {question:'Why will you work well with a bunch of self-proclaimed nerds/geeks?',
    answer: "Because I am a self-proclaimed nerd myself; I hope my 'cover letter' speaks to that. If it does not, it's OK, because for me when it comes to coding, the journey IS its own reward. I love learning in general, and I especially love coding."},

    {question:'What questions do you have for us as you embark on the interview process?',
    answer: '1. Beyond technical skills, what qualities do you look for in your developers? 2. Given that your team is remote and spread across multiple timezones, what does a typical day look like for your developers? What are your hours of operation?'},

    {question:"What's a fun fact that will help us remember you?",
    answer: "People are often confused about where I am from. My first name is American but my last name clearly is not. I was born in West Africa and came to the US with my family when I was 14. My first language is French, and besides that and English, I also speak Spanish and Arabic, to varying degrees of fluency. I am now married and live in St. Louis with my husband and 3 little boys."}
  ]

  constructor() { }

  ngOnInit(): void {
    console.log(this.qaArr);
  }

  flipCard() {
    // console.log(e);
    // console.log(this.question)
  }

}
