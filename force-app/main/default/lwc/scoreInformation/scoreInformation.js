import { LightningElement, api } from 'lwc';

export default class ScoreInformation extends LightningElement {

   @api score;
   @api attemptId;

   get numberOfQuestionsCorrect(){
        return Math.floor((this.score / 100) * 68);
   }
}