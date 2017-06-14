{
    let temperature = Grove_Two_Temperature.create(GROVE_TWO_TEMPERATURE.DEF_I2C_ADDR);
    
    temperature.turnOnLedFlash();
    basic.pause(3000);
    temperature.turnOffLedFlash();
    
    while(true)
    {
        temperature.run();
        if(temperature.is(TEMP_EVENT_TYPE.LESS_THAN_THD_0))basic.showString("LESS");
        else if(temperature.is(TEMP_EVENT_TYPE.AMONG_THD_0_AND_THD_1))basic.showString("AMONG");
        else if(temperature.is(TEMP_EVENT_TYPE.MORE_THAN_THD_1))basic.showString("MORE");
        
        // let value = temperature.getTemperatureValue();
        // basic.showNumber(value);
    }
}