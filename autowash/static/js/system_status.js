document.addEventListener("DOMContentLoaded", function() {
    // Get the slider elements and their display value elements
    const waterDispensingVolumeInput = document.getElementById("waterDispensingVolume");
    const waterDispensingVolumeValue = document.getElementById("waterDispensingVolumeValue");

    const timeToDispenseWaterInput = document.getElementById("timeToDispenseWater");
    const timeToDispenseWaterValue = document.getElementById("timeToDispenseWaterValue");

    const irSensorDistanceInput = document.getElementById("irSensorDistance");
    const irSensorDistanceValue = document.getElementById("irSensorDistanceValue");

    // Function to update the display value based on the slider input
    function updateDisplayValue(input, displayValue) {
        displayValue.textContent = input.value;
    }

    // Initialize display values
    updateDisplayValue(waterDispensingVolumeInput, waterDispensingVolumeValue);
    updateDisplayValue(timeToDispenseWaterInput, timeToDispenseWaterValue);
    updateDisplayValue(irSensorDistanceInput, irSensorDistanceValue);

    // Add event listeners to update values in real-time
    waterDispensingVolumeInput.addEventListener("input", function() {
        updateDisplayValue(waterDispensingVolumeInput, waterDispensingVolumeValue);
    });

    timeToDispenseWaterInput.addEventListener("input", function() {
        updateDisplayValue(timeToDispenseWaterInput, timeToDispenseWaterValue);
    });

    irSensorDistanceInput.addEventListener("input", function() {
        updateDisplayValue(irSensorDistanceInput, irSensorDistanceValue);
    });
});
