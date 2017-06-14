# Grove Two Temperature

A PXT packet for Seeed Studio Grove Two Temperature

## Basic usage

```blocks
// Create a module driver, specify the i2c address
let temperature = Grove_Two_Temperature.create(DEVICE_ID_TYPE.GROVE_TWO_TEMPERATURE_DEF_I2C_ADDR);

// Get temperature event vaule and display
while(true)
{
    temperature.run();
    if(temperature.is(TEMP_EVENT_TYPE.LESS_THAN_THD_0))basic.showString("LESS");
    else if(temperature.is(TEMP_EVENT_TYPE.AMONG_THD_0_AND_THD_1))basic.showString("AMONG");
    else if(temperature.is(TEMP_EVENT_TYPE.MORE_THAN_THD_1))basic.showString("MORE");
}
```
More operation

Use ``getDeviceVID()`` to get vendor ID of device.

Use ``getDevicePID()`` to get product ID of device.

Use ``changeDeviceAddress()`` to change i2c address of device.

Use ``defaultDeviceAddress()`` to restore the i2c address of device to default.

Use ``turnOnLedFlash()`` to trun on the indicator LED flash mode.

Use ``turnOffLedFlash()`` to trun off the indicator LED flash mode.

Use ``enableAutoSleep()`` to enable device auto sleep mode.

Use ``disableAutoSleep()`` to disable device auto sleep mode.

Use ``getEventStatus()`` to get the temperature event status.

Use ``getTemperatureValue()`` to get the temperature sensor value.

Use ``setThreshold0()`` to set the temperature threshold level 0.

Use ``setThreshold1()`` to set the temperature threshold level 1.

## License

MIT

## Supported targets

* for PXT/microbit
(The metadata above is needed for package search.)

