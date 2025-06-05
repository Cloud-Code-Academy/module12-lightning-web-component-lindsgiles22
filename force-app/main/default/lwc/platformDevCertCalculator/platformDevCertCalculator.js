import { LightningElement, track } from 'lwc';
const devFundWeight = 0.23;
const processAutoWeight = 0.30;
const userIntWeight = 0.25;
const testDebugWeight = 0.22;
const passingScore = 68;

export default class PlatformDevCertCalculator extends LightningElement {
    
    devFundamentalScore = 50;
    processAutomationScore = 50;
    userInterfaceScore = 50;
    testingScore = 50;

    certificationScore = 90;
    numberOfQuestions = 60;

    showResources = false;

    @track attemptHistory = [
        {Id: 1, Score:50},
        {Id: 2, Score:70},
        {Id: 3, Score:80},
    ];

    calculateScore() {
        let devFundWeightScore = this.devFundamentalScore * devFundWeight;
        let processAutoWeightScore = this.processAutomationScore * processAutoWeight;
        let userIntWeightScore = this.userInterfaceScore * userIntWeight;
        let testDebugWeightScore = this.testingScore * testDebugWeight;
        this.certificationScore = devFundWeightScore + processAutoWeightScore + userIntWeightScore + testDebugWeightScore;

        this.showResourceIfFailed();
        this.addAttemptHistory(this.certificationScore);
    }

    handleChange(event) {
        console.log(event.target.name, event.target.value);
        const inputName = event.target.name;
        let value = Number(event.target.value);
        if (inputName === 'processAuto') {
            this.processAutomationScore = value;
        } else if (inputName === 'devFundamentals') {
            this.devFundamentalScore = value;
        } else if (inputName === 'userInterface') {
            this.userInterfaceScore = value;
        } else if (inputName === 'testDebugDeploy') {
            this.testingScore = value;
        }
}

    showResourceIfFailed(){
        if (this.certificationScore < passingScore){
            this.showResources = true;
        } else {
            this.showResources = false;
        }
        this.showGoodJob = !this.showResources;
    }   

    addAttemptHistory(Score){
        const attempt =
            {
                Id: this.attemptHistory.length + 1, Score
            }
        this.attemptHistory = [...this.attemptHistory, attempt];
    }
    deleteAttemptHandler(){
        console.log('This is called fromm parent to handle delete');
    }
}