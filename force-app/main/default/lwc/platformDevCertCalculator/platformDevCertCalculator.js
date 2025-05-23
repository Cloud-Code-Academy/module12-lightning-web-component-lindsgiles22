import { LightningElement } from 'lwc';

export default class PlatformDevCertCalculator extends LightningElement {
    
    devFundamentalScore = 50;
    processAutomationScore = 50;
    userInterfaceScore = 50;
    testingScore = 50;

    certificationScore = 90;

    calculateScore() {
        this.certificationScore = this.devFundamentalScore + this.processAutomationScore + this.userInterfaceScore + this.testingScore;
    }

    handleChange(event) {
        console.log(event.target.name, event.target.value);
        console.log(event.target.type);
        console.log(event.target.label);
        const inputName = event.target.name;
        if (inputName === 'processAuto') {
            this.processAutomationScore = event.target.value;
        } else if (inputName === 'devFundamentals') {
            this.devFundamentalScore = event.target.value;
        } else if (inputName === 'userInterface') {
            this.userInterfaceScore = event.target.value;
        } else if (inputName === 'testDebugDeploy') {
            this.testingScore = event.target.value;
        }
}
}