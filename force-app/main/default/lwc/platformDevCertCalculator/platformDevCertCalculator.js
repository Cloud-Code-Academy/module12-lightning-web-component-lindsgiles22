import { LightningElement } from 'lwc';

export default class PlatformDevCertCalculator extends LightningElement {
    
    devFundamentalScore = 50;
    processAutomationScore = 50;
    userInterfaceScore = 50;
    testingScore = 50;

    certificationScore = 90;

    calculateScore() {
        certificationScore = this.devFundamentalScore + this.processAutomationScore + this.userInterfaceScore + this.testingScore;
    }
}