let plants = [
    { element: document.getElementById('plant1'), height: 0, flower: document.getElementById('flower1') },
    { element: document.getElementById('plant2'), height: 0, flower: document.getElementById('flower2') },
    { element: document.getElementById('plant3'), height: 0, flower: document.getElementById('flower3') }
];
let isPlanted = false;
let flowerClass = 'flower-rose';

document.getElementById('flower-select').addEventListener('change', (e) => {
    switch (e.target.value) {
        case 'rose':
            flowerClass = 'flower-rose';
            break;
        case 'sunflower':
            flowerClass = 'flower-sunflower';
            break;
        case 'orchid':
            flowerClass = 'flower-orchid';
            break;
    }
});

function plantSeed() {
    if (!isPlanted) {
        plants.forEach(plant => {
            plant.height = 20;
            plant.element.style.height = plant.height + 'px';
            plant.element.style.background = '#388e3c';
        });
        isPlanted = true;
        updateStatus('Seeds planted! Water them to grow.');
    } else {
        updateStatus('Seeds are already planted.');
    }
}

function waterPlants() {
    if (isPlanted) {
        plants.forEach(plant => {
            if (plant.height < 100) {
                plant.height += 20;
                plant.element.style.height = plant.height + 'px';

                if (plant.height >= 60) {
                    plant.flower.className = 'flower ' + flowerClass;
                }
            }
        });
        updateStatus('You watered the plants!');
    } else {
        updateStatus('Plant seeds first.');
    }
}

function harvestPlants() {
    if (isPlanted && plants.every(plant => plant.height >= 100)) {
        plants.forEach(plant => {
            plant.height = 0;
            plant.element.style.height = plant.height + 'px';
            plant.flower.className = 'flower';
        });
        isPlanted = false;
        updateStatus('Plants harvested! You can plant new seeds.');
    } else if (isPlanted) {
        updateStatus('The plants are not fully grown yet.');
    } else {
        updateStatus('Plant seeds first.');
    }
}

function updateStatus(message) {
    document.getElementById('status').textContent = message;
}
