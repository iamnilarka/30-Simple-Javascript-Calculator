
document.addEventListener('DOMContentLoaded', function () {
    const contentArea = document.getElementById('content-area');
    const buttons = document.querySelectorAll('.list-group-item');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            buttons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            loadSection(this.getAttribute('data-section'));
        });
    });

    // Function to load sections dynamically
    function loadSection(section) {
        let content = '';
        switch (section) {
            case 'temp-converter':
                content = `
                        <h2>Temperature Converter</h2>
                        <div class="form-group">
                            <label for="temp">Enter Temperature:</label>
                            <input type="number" id="temp" class="form-control" placeholder="e.g., 100">
                        </div>
                        <div class="form-group">
                            <label for="unit">Select Unit:</label>
                            <select id="unit" class="form-control">
                                <option value="celsius">Celsius</option>
                                <option value="fahrenheit">Fahrenheit</option>
                            </select>
                        </div>
                        <button class="btn btn-primary" onclick="convertTemp()">Convert</button>
                        <button class="btn btn-secondary" onclick="clearTemp()">Clear</button>
                        <div id="temp-result" class="result mt-3"></div>
                    `;
                break;

            case 'interest-calc':
                content = `
                        <h2>Simple Interest Calculator</h2>
                        <div class="form-group">
                            <label for="principal">Principal Amount:</label>
                            <input type="number" id="principal" class="form-control" placeholder="e.g., 1000">
                        </div>
                        <div class="form-group">
                            <label for="rate">Rate of Interest (%):</label>
                            <input type="number" id="rate" class="form-control" placeholder="e.g., 5">
                        </div>
                        <div class="form-group">
                            <label for="time">Time (years):</label>
                            <input type="number" id="time" class="form-control" placeholder="e.g., 2">
                        </div>
                        <button class="btn btn-primary" onclick="calculateInterest()">Calculate</button>
                        <button class="btn btn-secondary" onclick="clearInterest()">Clear</button>
                        <div id="interest-result" class="result mt-3"></div>
                    `;
                break;

            case 'number-swap':
                content = `
                        <h2>Number Swapper</h2>
                        <div class="form-group">
                            <label for="num1">Number 1:</label>
                            <input type="number" id="num1" class="form-control" placeholder="e.g., 10">
                        </div>
                        <div class="form-group">
                            <label for="num2">Number 2:</label>
                            <input type="number" id="num2" class="form-control" placeholder="e.g., 20">
                        </div>
                        <button class="btn btn-primary" onclick="swapNumbers()">Swap</button>
                        <button class="btn btn-secondary" onclick="clearSwap()">Clear</button>
                        <div id="swap-result" class="result mt-3"></div>
                    `;
                break;

            case 'ascii-convert':
                content = `
                        <h2>ASCII Converter</h2>
                        <div class="form-group">
                            <label for="ascii-input">Enter Character or ASCII Code:</label>
                            <input type="text" id="ascii-input" class="form-control" placeholder="e.g., A or 65">
                        </div>
                        <button class="btn btn-primary" onclick="convertAscii()">Convert</button>
                        <button class="btn btn-secondary" onclick="clearAscii()">Clear</button>
                        <div id="ascii-result" class="result mt-3"></div>
                    `;
                break;

            case 'triangle-check':
                content = `
                        <h2>Triangle Type Checker</h2>
                        <div class="form-group">
                            <label for="side1">Side 1:</label>
                            <input type="number" id="side1" class="form-control" placeholder="e.g., 5">
                        </div>
                        <div class="form-group">
                            <label for="side2">Side 2:</label>
                            <input type="number" id="side2" class="form-control" placeholder="e.g., 5">
                        </div>
                        <div class="form-group">
                            <label for="side3">Side 3:</label>
                            <input type="number" id="side3" class="form-control" placeholder="e.g., 5">
                        </div>
                        <button class="btn btn-primary" onclick="checkTriangle()">Check Type</button>
                        <button class="btn btn-secondary" onclick="clearTriangle()">Clear</button>
                        <div id="triangle-result" class="result mt-3"></div>
                    `;
                break;

            case 'quadratic':
                content = `
                        <h2>Quadratic Equation Roots</h2>
                        <div class="form-group">
                            <label for="a">Coefficient a:</label>
                            <input type="number" id="a" class="form-control" placeholder="e.g., 1">
                        </div>
                        <div class="form-group">
                            <label for="b">Coefficient b:</label>
                            <input type="number" id="b" class="form-control" placeholder="e.g., -3">
                        </div>
                        <div class="form-group">
                            <label for="c">Coefficient c:</label>
                            <input type="number" id="c" class="form-control" placeholder="e.g., 2">
                        </div>
                        <button class="btn btn-primary" onclick="findRoots()">Find Roots</button>
                        <button class="btn btn-secondary" onclick="clearRoots()">Clear</button>
                        <div id="roots-result" class="result mt-3"></div>
                    `;
                break;

            case 'even-odd':
                content = `
                        <h2>Even Odd Checker</h2>
                        <div class="form-group">
                            <label for="number">Enter Number:</label>
                            <input type="number" id="number" class="form-control" placeholder="e.g., 7">
                        </div>
                        <button class="btn btn-primary" onclick="checkEvenOdd()">Check</button>
                        <button class="btn btn-secondary" onclick="clearEvenOdd()">Clear</button>
                        <div id="even-odd-result" class="result mt-3"></div>
                    `;
                break;

            case 'bmi':
                content = `
                        <h2>BMI Calculator</h2>
                        <div class="form-group">
                        <label for="weight">Weight (kg):</label>
                        <input type="number" id="weight" class="form-control" placeholder="e.g., 70">
                    </div>
                     <div class="form-group">
            <label for="height">Height (cm):</label>
            <input type="number" id="height" class="form-control" placeholder="e.g., 170">
        </div>
        <button class="btn btn-primary" onclick="calculateBMI()">Calculate</button>
        <button class="btn btn-secondary" onclick="clearBMI()">Clear</button>
        <div id="bmi-result" class="result mt-3"></div>
    `;
                break;

            case 'sum':
                content = `
                        <h2>Sum Calculator</h2>
                        <div class="form-group">
                            <label for="num1">Number 1:</label>
                            <input type="number" id="num1" class="form-control" placeholder="e.g., 10">
                        </div>
                        <div class="form-group">
                            <label for="num2">Number 2:</label>
                            <input type="number" id="num2" class="form-control" placeholder="e.g., 20">
                        </div>
                        <button class="btn btn-primary" onclick="calculateSum()">Calculate</button>
                        <button class="btn btn-secondary" onclick="clearSum()">Clear</button>
                        <div id="sum-result" class="result mt-3"></div>
                    `;
                break;

            case 'voting':
                content = `
                        <h2>Voting Eligibility Check</h2>
                        <div class="form-group">
                            <label for="age">Enter Age:</label>
                            <input type="number" id="age" class="form-control" placeholder="e.g., 18">
                        </div>
                        <button class="btn btn-primary" onclick="checkVotingEligibility()">Check</button>
                        <button class="btn btn-secondary" onclick="clearVoting()">Clear</button>
                        <div id="voting-result" class="result mt-3"></div>
                    `;
                break;

            default:
                content = `<h2>Select a section from the menu</h2>
                               <p>Click on any section from the left menu to view its content.</p>`;
        }
        contentArea.innerHTML = content;
    }

    // Temperature Converter
    window.convertTemp = function () {
        const temp = parseFloat(document.getElementById('temp').value);
        const unit = document.getElementById('unit').value;
        const resultDiv = document.getElementById('temp-result');

        if (!isNaN(temp)) {
            let convertedTemp = '';
            if (unit === 'celsius') {
                convertedTemp = (temp * 9 / 5) + 32;
                resultDiv.innerHTML = `${temp}°C is ${convertedTemp.toFixed(2)}°F`;
            } else {
                convertedTemp = (temp - 32) * 5 / 9;
                resultDiv.innerHTML = `${temp}°F is ${convertedTemp.toFixed(2)}°C`;
            }
            resultDiv.style.display = 'block';
        }
    };

    window.clearTemp = function () {
        document.getElementById('temp').value = '';
        document.getElementById('temp-result').style.display = 'none';
    };

    // Simple Interest Calculator
    window.calculateInterest = function () {
        const principal = parseFloat(document.getElementById('principal').value);
        const rate = parseFloat(document.getElementById('rate').value);
        const time = parseFloat(document.getElementById('time').value);
        const resultDiv = document.getElementById('interest-result');

        if (!isNaN(principal) && !isNaN(rate) && !isNaN(time)) {
            const interest = (principal * rate * time) / 100;
            resultDiv.innerHTML = `Simple Interest: $${interest.toFixed(2)}`;
            resultDiv.style.display = 'block';
        }
    };

    window.clearInterest = function () {
        document.getElementById('principal').value = '';
        document.getElementById('rate').value = '';
        document.getElementById('time').value = '';
        document.getElementById('interest-result').style.display = 'none';
    };

    // Number Swapper
    window.swapNumbers = function () {
        let num1 = document.getElementById('num1').value;
        let num2 = document.getElementById('num2').value;
        const resultDiv = document.getElementById('swap-result');

        if (num1 && num2) {
            [num1, num2] = [num2, num1];
            resultDiv.innerHTML = `Swapped Values: Number 1 = ${num1}, Number 2 = ${num2}`;
            resultDiv.style.display = 'block';
        }
    };

    window.clearSwap = function () {
        document.getElementById('num1').value = '';
        document.getElementById('num2').value = '';
        document.getElementById('swap-result').style.display = 'none';
    };

    // ASCII Converter
    window.convertAscii = function () {
        const input = document.getElementById('ascii-input').value;
        const resultDiv = document.getElementById('ascii-result');

        if (input.length === 1) {
            const ascii = input.charCodeAt(0);
            resultDiv.innerHTML = `ASCII Code: ${ascii}`;
        } else if (!isNaN(input)) {
            const char = String.fromCharCode(parseInt(input));
            resultDiv.innerHTML = `Character: ${char}`;
        }
        resultDiv.style.display = 'block';
    };

    window.clearAscii = function () {
        document.getElementById('ascii-input').value = '';
        document.getElementById('ascii-result').style.display = 'none';
    };

    // Triangle Type Checker
    window.checkTriangle = function () {
        const side1 = parseFloat(document.getElementById('side1').value);
        const side2 = parseFloat(document.getElementById('side2').value);
        const side3 = parseFloat(document.getElementById('side3').value);
        const resultDiv = document.getElementById('triangle-result');

        if (!isNaN(side1) && !isNaN(side2) && !isNaN(side3)) {
            if (side1 === side2 && side2 === side3) {
                resultDiv.innerHTML = 'Equilateral Triangle';
            } else if (side1 === side2 || side2 === side3 || side1 === side3) {
                resultDiv.innerHTML = 'Isosceles Triangle';
            } else {
                resultDiv.innerHTML = 'Scalene Triangle';
            }
            resultDiv.style.display = 'block';
        }
    };

    window.clearTriangle = function () {
        document.getElementById('side1').value = '';
        document.getElementById('side2').value = '';
        document.getElementById('side3').value = '';
        document.getElementById('triangle-result').style.display = 'none';
    };

    // Quadratic Equation Roots
    window.findRoots = function () {
        const a = parseFloat(document.getElementById('a').value);
        const b = parseFloat(document.getElementById('b').value);
        const c = parseFloat(document.getElementById('c').value);
        const resultDiv = document.getElementById('roots-result');

        if (!isNaN(a) && !isNaN(b) && !isNaN(c)) {
            const discriminant = b * b - 4 * a * c;
            if (discriminant > 0) {
                const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
                const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
                resultDiv.innerHTML = `Roots: ${root1.toFixed(2)} and ${root2.toFixed(2)}`;
            } else if (discriminant === 0) {
                const root = -b / (2 * a);
                resultDiv.innerHTML = `Root: ${root.toFixed(2)} (repeated)`;
            } else {
                resultDiv.innerHTML = 'No real roots';
            }
            resultDiv.style.display = 'block';
        }
    };

    window.clearRoots = function () {
        document.getElementById('a').value = '';
        document.getElementById('b').value = '';
        document.getElementById('c').value = '';
        document.getElementById('roots-result').style.display = 'none';
    };

    // Even Odd Checker
    window.checkEvenOdd = function () {
        const number = parseFloat(document.getElementById('number').value);
        const resultDiv = document.getElementById('even-odd-result');

        if (!isNaN(number)) {
            const type = number % 2 === 0 ? 'Even' : 'Odd';
            resultDiv.innerHTML = `The number is: ${type}`;
            resultDiv.style.display = 'block';
        }
    };

    window.clearEvenOdd = function () {
        document.getElementById('number').value = '';
        document.getElementById('even-odd-result').style.display = 'none';
    };

    // BMI Calculator
    window.calculateBMI = function () {
        const weight = parseFloat(document.getElementById('weight').value);
        const height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to m
        const resultDiv = document.getElementById('bmi-result');

    if (!isNaN(weight) && !isNaN(height) && height > 0) {
        const bmi = weight / (height * height);
        let category = '';

        if (bmi < 18.5) {
            category = 'Underweight';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            category = 'Normal weight';
        } else if (bmi >= 25 && bmi < 29.9) {
            category = 'Overweight';
        } else {
            category = 'Obese';
        }

        resultDiv.innerHTML = `Your BMI is: <strong>${bmi.toFixed(2)}</strong> (${category})`;
        resultDiv.style.display = 'block';
    } else {
        resultDiv.innerHTML = '<span style="color: red;">Please enter valid weight and height.</span>';
        resultDiv.style.display = 'block';
    }
};

window.clearBMI = function () {
    document.getElementById('weight').value = '';
    document.getElementById('height').value = '';
    const resultDiv = document.getElementById('bmi-result');
    resultDiv.style.display = 'none';
    resultDiv.innerHTML = '';
};

    // Sum Calculator
    window.calculateSum = function () {
        const num1 = parseFloat(document.getElementById('num1').value);
        const num2 = parseFloat(document.getElementById('num2').value);
        const resultDiv = document.getElementById('sum-result');

        if (!isNaN(num1) && !isNaN(num2)) {
            const sum = num1 + num2;
            resultDiv.innerHTML = `Sum: ${sum}`;
            resultDiv.style.display = 'block';
        }
    };
    window.clearSum = function () {
        document.getElementById('num1').value = '';
        document.getElementById('num2').value = '';
        document.getElementById('sum-result').style.display = 'none';
    };

    // Voting Eligibility Checker
    window.checkVotingEligibility = function () {
        const age = parseInt(document.getElementById('age').value);
        const resultDiv = document.getElementById('voting-result');

        if (!isNaN(age)) {
            if (age >= 18) {
                resultDiv.innerHTML = `Eligible to vote.`;
            } else {
                resultDiv.innerHTML = `Not eligible to vote.`;
            }
            resultDiv.style.display = 'block';
        }
    };

    window.clearVoting = function () {
        document.getElementById('age').value = '';
        document.getElementById('voting-result').style.display = 'none';
    };


});
