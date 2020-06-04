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
    answer: 'i am answer 1'},

    {question:'What do you think about working fully remote?',
    answer: 'i am answer2'},

    {question:'Are you excited about our tech stack? Does your previous experience match the stack? If not, how do you think you’ll do transitioning to something else?',
    answer: 'i am answer2'},

    {question:'What do you look for in a company you’d like to work for?',
    answer: 'i am answer2'},

    {question:'What are the top 3 things you think are cool about tuzag?',
    answer: 'i am answer2'},

    {question:'Why will you work well with a bunch of self-proclaimed nerds/geeks?',
    answer: 'i am answer2'},

    {question:'What questions do you have for us as you embark on the interview process?',
    answer: 'i am answer2'},

    {question:"What's a fun fact that will help us remember you?",
    answer: 'i am answer2'}
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
