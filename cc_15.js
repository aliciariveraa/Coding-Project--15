// Task 1: Base structure setup

document.addEventListener("DOMContentLoaded", () => {
    const riskDashboard = document.getElementById("riskDashboard");
    console.log("Risk Dashboard Loaded");
});


// Task 2 - Adding Risk Items

document.addEventListener('DOMContentLoaded', () => {
    console.log("Risk Dashboard Loaded");

    const riskDashboard = document.getElementById('riskDashboard');
    const riskForm = document.getElementById('riskForm');

    function addRiskItem(riskName, riskLevel, department) {
        const riskCard = document.createElement('div');
        riskCard.classList.add('riskCard');
        
        const riskNameElement = document.createElement('h3');
        riskNameElement.textContent = riskName;
        riskCard.appendChild(riskNameElement);
        
        const riskLevelElement = document.createElement('p');
        riskLevelElement.textContent = `Risk Level: ${riskLevel}`;
        riskCard.appendChild(riskLevelElement);

        const departmentElement = document.createElement('p');
        departmentElement.textContent = `Department: ${department}`;
        riskCard.appendChild(departmentElement);

        // Resolve button
        const resolveButton = document.createElement('button');
        resolveButton.textContent = 'Resolve';
        resolveButton.addEventListener('click', () => {
            riskCard.remove();
        });
        riskCard.appendChild(resolveButton);

        riskDashboard.appendChild(riskCard);
    }

    // Handle form submission
    riskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const riskName = document.getElementById('riskName').value;
        const riskLevel = document.getElementById('riskLevel').value;
        const department = document.getElementById('department').value;
        
        addRiskItem(riskName, riskLevel, department);

        // Clear input fields after adding risk item
        riskForm.reset();
    });
});


// Task 3 - Removing Risk Items

// Resolve button for removing risk card
const resolveButton = document.createElement('button');
resolveButton.textContent = 'Resolve';
resolveButton.addEventListener('click', () => {
    riskCard.remove(); // Removes the risk card when the button is clicked
});
riskCard.appendChild(resolveButton);


// Task 4 - Risk Categorization

document.addEventListener('DOMContentLoaded', () => {
    console.log("Risk Dashboard Loaded");

    const riskDashboard = document.getElementById('riskDashboard');
    const riskForm = document.getElementById('riskForm');

    function addRiskItem(riskName, riskLevel, department) {
        const riskCard = document.createElement('div');
        riskCard.classList.add('riskCard');
        
        const riskNameElement = document.createElement('h3');
        riskNameElement.textContent = riskName;
        riskCard.appendChild(riskNameElement);
        
        const riskLevelElement = document.createElement('p');
        riskLevelElement.textContent = `Risk Level: ${riskLevel}`;
        riskCard.appendChild(riskLevelElement);

        const departmentElement = document.createElement('p');
        departmentElement.textContent = `Department: ${department}`;
        riskCard.appendChild(departmentElement);

        // Apply background color based on risk level
        switch(riskLevel) {
            case 'Low':
                riskCard.style.backgroundColor = 'green';
                break;
            case 'Medium':
                riskCard.style.backgroundColor = 'yellow';
                break;
            case 'High':
                riskCard.style.backgroundColor = 'red';
                break;
        }

        // Resolve button
        const resolveButton = document.createElement('button');
        resolveButton.textContent = 'Resolve';
        resolveButton.addEventListener('click', () => {
            riskCard.remove();
        });
        riskCard.appendChild(resolveButton);

        riskDashboard.appendChild(riskCard);
    }

    // Handle form submission
    riskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const riskName = document.getElementById('riskName').value;
        const riskLevel = document.getElementById('riskLevel').value;
        const department = document.getElementById('department').value;
        
        addRiskItem(riskName, riskLevel, department);

        // Clear input fields after adding risk item
        riskForm.reset();
    });
});


// Task 5 - Bulk Risk Updates

document.addEventListener('DOMContentLoaded', () => {
    console.log("Risk Dashboard Loaded");

    const riskDashboard = document.getElementById('riskDashboard');
    const riskForm = document.getElementById('riskForm');
    const increaseRiskButton = document.getElementById('increaseRiskButton');

    function addRiskItem(riskName, riskLevel, department) {
        const riskCard = document.createElement('div');
        riskCard.classList.add('riskCard');
        
        const riskNameElement = document.createElement('h3');
        riskNameElement.textContent = riskName;
        riskCard.appendChild(riskNameElement);
        
        const riskLevelElement = document.createElement('p');
        riskLevelElement.textContent = `Risk Level: ${riskLevel}`;
        riskCard.appendChild(riskLevelElement);

        const departmentElement = document.createElement('p');
        departmentElement.textContent = `Department: ${department}`;
        riskCard.appendChild(departmentElement);

        // Apply background color based on risk level
        switch(riskLevel) {
            case 'Low':
                riskCard.style.backgroundColor = 'green';
                break;
            case 'Medium':
                riskCard.style.backgroundColor = 'yellow';
                break;
            case 'High':
                riskCard.style.backgroundColor = 'red';
                break;
        }

        // Resolve button
        const resolveButton = document.createElement('button');
        resolveButton.textContent = 'Resolve';
        resolveButton.addEventListener('click', () => {
            riskCard.remove();
        });
        riskCard.appendChild(resolveButton);

        riskCard.setAttribute('data-level', riskLevel); // Store risk level in the card
        riskDashboard.appendChild(riskCard);
    }

    function increaseRiskLevels() {
        const riskCards = document.querySelectorAll('.riskCard');
        riskCards.forEach(card => {
            const level = card.getAttribute('data-level');
            if (level === 'Low') {
                card.setAttribute('data-level', 'Medium');
                card.querySelector('p').textContent = 'Risk Level: Medium';
                card.style.backgroundColor = 'yellow';
            } else if (level === 'Medium') {
                card.setAttribute('data-level', 'High');
                card.querySelector('p').textContent = 'Risk Level: High';
                card.style.backgroundColor = 'red';
            }
        });
    }

    // Handle form submission
    riskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const riskName = document.getElementById('riskName').value;
        const riskLevel = document.getElementById('riskLevel').value;
        const department = document.getElementById('department').value;
        
        addRiskItem(riskName, riskLevel, department);

        // Clear input fields after adding risk item
        riskForm.reset();
    });

    // Increase Risk Levels Button
    increaseRiskButton.addEventListener('click', increaseRiskLevels);
});


// Task 6 - Event Propagation Fix

document.addEventListener('DOMContentLoaded', () => {
    console.log("Risk Dashboard Loaded");

    const riskDashboard = document.getElementById('riskDashboard');
    const riskForm = document.getElementById('riskForm');
    const increaseRiskButton = document.getElementById('increaseRiskButton');

    function addRiskItem(riskName, riskLevel, department) {
        const riskCard = document.createElement('div');
        riskCard.classList.add('riskCard');
        
        const riskNameElement = document.createElement('h3');
        riskNameElement.textContent = riskName;
        riskCard.appendChild(riskNameElement);
        
        const riskLevelElement = document.createElement('p');
        riskLevelElement.textContent = `Risk Level: ${riskLevel}`;
        riskCard.appendChild(riskLevelElement);

        const departmentElement = document.createElement('p');
        departmentElement.textContent = `Department: ${department}`;
        riskCard.appendChild(departmentElement);

        // Apply background color based on risk level
        switch(riskLevel) {
            case 'Low':
                riskCard.style.backgroundColor = 'green';
                break;
            case 'Medium':
                riskCard.style.backgroundColor = 'yellow';
                break;
            case 'High':
                riskCard.style.backgroundColor = 'red';
                break;
        }

        // Resolve button
        const resolveButton = document.createElement('button');
        resolveButton.textContent = 'Resolve';
        resolveButton.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent bubbling
            riskCard.remove();
        });
        riskCard.appendChild(resolveButton);

        riskCard.setAttribute('data-level', riskLevel);
        riskDashboard.appendChild(riskCard);
    }

    function increaseRiskLevels() {
        const riskCards = document.querySelectorAll('.riskCard');
        riskCards.forEach(card => {
            const level = card.getAttribute('data-level');
            if (level === 'Low') {
                card.setAttribute('data-level', 'Medium');
                card.querySelector('p').textContent = 'Risk Level: Medium';
                card.style.backgroundColor = 'yellow';
            } else if (level === 'Medium') {
                card.setAttribute('data-level', 'High');
                card.querySelector('p').textContent = 'Risk Level: High';
                card.style.backgroundColor = 'red';
            }
        });
    }

    // Handle form submission
    riskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const riskName = document.getElementById('riskName').value;
        const riskLevel = document.getElementById('riskLevel').value;
        const department = document.getElementById('department').value;
        
        addRiskItem(riskName, riskLevel, department);
        riskForm.reset();
    });

    // Increase Risk Levels Button
    increaseRiskButton.addEventListener('click', increaseRiskLevels);
});
