import SerialNumber from '@salesforce/schema/Asset.SerialNumber';
import { LightningElement } from 'lwc';
    const devFundWeight = 0.23;
    const processAutoWeight = 0.30;
    const userIntWeight = 0.25;
    const testDebugWeight = 0.22;

export default class PlatformDevCertCalculator extends LightningElement {
    
    devFundamentalScore = 50;
    processAutomationScore = 50;
    userInterfaceScore = 50;
    testingScore = 50;

    certificationScore = 90;

    calculateScore() {
        let devFundWeight = this.devFundamentalScore * devFundWeight;
        let processAutoWeight = this.processAutomationScore * processAutoWeight;
        let userIntWeight = this.userInterfaceScore * userIntWeight;
        let testDebugWeight = this.testingScore * testDebugWeight;
        this.certificationScore = devFundWeight + processAutoWeight + userIntWeight + testDebugWeight;
    }

    handleChange(event) {
        console.log(event.target.name, event.target.value);
        console.log(event.target.type);
        console.log(event.target.label);
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
}