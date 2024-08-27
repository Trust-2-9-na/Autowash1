document.addEventListener("DOMContentLoaded", function() {
    // Get all slider elements and their corresponding span elements
    const waterDispensingVolumeSlider = document.getElementById("waterDispensingVolume");
    const waterDispensingVolumeValue = document.getElementById("waterDispensingVolumeValue");
    
    const timeToDispenseWaterSlider = document.getElementById("timeToDispenseWater");
    const timeToDispenseWaterValue = document.getElementById("timeToDispenseWaterValue");
    
    const irSensorDistanceSlider = document.getElementById("irSensorDistance");
    const irSensorDistanceValue = document.getElementById("irSensorDistanceValue");

    // Update the value of the corresponding span element when the slider value changes
    waterDispensingVolumeSlider.addEventListener("input", function() {
        waterDispensingVolumeValue.textContent = waterDispensingVolumeSlider.value;
    });

    timeToDispenseWaterSlider.addEventListener("input", function() {
        timeToDispenseWaterValue.textContent = timeToDispenseWaterSlider.value;
    });

    irSensorDistanceSlider.addEventListener("input", function() {
        irSensorDistanceValue.textContent = irSensorDistanceSlider.value;
    });
});
