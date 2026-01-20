document.addEventListener('DOMContentLoaded', function() {
    const contentArea = document.getElementById('content-area');
    const buttons = document.querySelectorAll('.list-group-item');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            buttons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            loadSection(this.getAttribute('data-section'));
        });
    });

    // Function to load sections dynamically
    function loadSection(section) {
        let content = '';
        switch (section) {
            case 'multiplication-table':
                content = `
                    <h2>Multiplication Table</h2>
                    <div class="form-group">
                        <label for="multiplication-number">Enter a number:</label>
                        <input type="number" id="multiplication-number" class="form-control" placeholder="e.g., 5">
                    </div>
                    <button class="btn btn-primary" onclick="generateMultiplicationTable()">Generate Table</button>
                    <button class="btn btn-secondary" onclick="clearMultiplicationTable()">Clear</button>
                    <div id="multiplication-table-result" class="result mt-3"></div>
                `;
                break;

            case 'fibonacci':
                content = `
                    <h2>Fibonacci Series</h2>
                    <div class="form-group">
                        <label for="fibonacci-length">Enter the length of the series:</label>
                        <input type="number" id="fibonacci-length" class="form-control" placeholder="e.g., 10">
                    </div>
                    <button class="btn btn-primary" onclick="generateFibonacciSeries()">Generate Series</button>
                    <button class="btn btn-secondary" onclick="clearFibonacciSeries()">Clear</button>
                    <div id="fibonacci-result" class="result mt-3"></div>
                `;
                break;

            case 'prime-generator':
                content = `
                    <h2>Prime Number Generator</h2>
                    <div class="form-group">
                        <label for="prime-limit">Enter the limit:</label>
                        <input type="number" id="prime-limit" class="form-control" placeholder="e.g., 50">
                    </div>
                    <button class="btn btn-primary" onclick="generatePrimeNumbers()">Generate Primes</button>
                    <button class="btn btn-secondary" onclick="clearPrimeNumbers()">Clear</button>
                    <div id="prime-result" class="result mt-3"></div>
                `;
                break;

            case 'fact-generator':
                content = `
                    <h2>Factorial Generator</h2>
                    <div class="form-group">
                        <label for="factorial-number">Enter a number:</label>
                        <input type="number" id="factorial-number" class="form-control" placeholder="e.g., 5">
                    </div>
                    <button class="btn btn-primary" onclick="calculateFactorial()">Calculate Factorial</button>
                    <button class="btn btn-secondary" onclick="clearFactorial()">Clear</button>
                    <div id="factorial-result" class="result mt-3"></div>
                `;
                break;

            case 'armstrong':
                content = `
                    <h2>Armstrong Number Check</h2>
                    <div class="form-group">
                        <label for="armstrong-number">Enter a number:</label>
                        <input type="number" id="armstrong-number" class="form-control" placeholder="e.g., 153">
                    </div>
                    <button class="btn btn-primary" onclick="checkArmstrongNumber()">Check</button>
                    <button class="btn btn-secondary" onclick="clearArmstrongNumber()">Clear</button>
                    <div id="armstrong-result" class="result mt-3"></div>
                `;
                break;

            case 'pyramid-pattern':
                content = `
                    <h2>Pyramid Pattern Print</h2>
                    <div class="form-group">
                        <label for="pyramid-rows">Enter number of rows:</label>
                        <input type="number" id="pyramid-rows" class="form-control" placeholder="e.g., 5">
                    </div>
                    <button class="btn btn-primary" onclick="printPyramidPattern()">Print Pattern</button>
                    <button class="btn btn-secondary" onclick="clearPyramidPattern()">Clear</button>
                    <div id="pyramid-result" class="result mt-3"></div>
                `;
                break;

            case 'perfect-number':
                content = `
                    <h2>Perfect Number Checker</h2>
                    <div class="form-group">
                        <label for="perfect-number">Enter a number:</label>
                        <input type="number" id="perfect-number" class="form-control" placeholder="e.g., 28">
                    </div>
                    <button class="btn btn-primary" onclick="checkPerfectNumber()">Check</button>
                    <button class="btn btn-secondary" onclick="clearPerfectNumber()">Clear</button>
                    <div id="perfect-number-result" class="result mt-3"></div>
                `;
                break;

            case 'reversal':
                content = `
                    <h2>Reverse Number</h2>
                    <div class="form-group">
                        <label for="reverse-number">Enter a number:</label>
                        <input type="number" id="reverse-number" class="form-control" placeholder="e.g., 123">
                    </div>
                    <button class="btn btn-primary" onclick="reverseNumber()">Reverse</button>
                    <button class="btn btn-secondary" onclick="clearReverseNumber()">Clear</button>
                    <div id="reverse-result" class="result mt-3"></div>
                `;
                break;

            case 'digit-counter':
                content = `
                    <h2>Digit Counter</h2>
                    <div class="form-group">
                        <label for="digit-number">Enter a number:</label>
                        <input type="number" id="digit-number" class="form-control" placeholder="e.g., 12345">
                    </div>
                    <button class="btn btn-primary" onclick="countDigits()">Count Digits</button>
                    <button class="btn btn-secondary" onclick="clearDigitCounter()">Clear</button>
                    <div id="digit-counter-result" class="result mt-3"></div>
                `;
                break;

            case 'sum-of-naturals':
                content = `
                    <h2>Sum of Natural Numbers</h2>
                    <div class="form-group">
                        <label for="natural-number">Enter a number:</label>
                        <input type="number" id="natural-number" class="form-control" placeholder="e.g., 10">
                    </div>
                    <button class="btn btn-primary" onclick="calculateSumOfNaturals()">Calculate Sum</button>
                    <button class="btn btn-secondary" onclick="clearSumOfNaturals()">Clear</button>
                    <div id="sum-of-naturals-result" class="result mt-3"></div>
                `;
                break;

            default:
                content = `<h2>Select a section from the menu</h2>
                           <p>Click on any section from the left menu to view its content.</p>`;
        }
        contentArea.innerHTML = content;
    }

    // Multiplication Table
    window.generateMultiplicationTable = function() {
        const number = parseInt(document.getElementById('multiplication-number').value);
        const resultDiv = document.getElementById('multiplication-table-result');

        if (!isNaN(number)) {
            let table = `<p>Multiplication Table for ${number}:</p><ul>`;
            for (let i = 1; i <= 10; i++) {
                table += `<li>${number} x ${i} = ${number * i}</li>`;
            }
            table += '</ul>';
            resultDiv.innerHTML = table;
            resultDiv.style.display = 'block';
        }
    };

    window.clearMultiplicationTable = function() {
        document.getElementById('multiplication-number').value = '';
        document.getElementById('multiplication-table-result').style.display = 'none';
    };

    // Fibonacci Series
    window.generateFibonacciSeries = function() {
        const length = parseInt(document.getElementById('fibonacci-length').value);
        const resultDiv = document.getElementById('fibonacci-result');

        if (!isNaN(length) && length > 0) {
            let series = [0, 1];
            for (let i = 2; i < length; i++) {
                series.push(series[i - 1] + series[i - 2]);
            }
            resultDiv.innerHTML = `<p>Fibonacci Series: ${series.join(', ')}</p>`;
            resultDiv.style.display = 'block';
        }
    };

    window.clearFibonacciSeries = function() {
        document.getElementById('fibonacci-length').value = '';
        document.getElementById('fibonacci-result').style.display = 'none';
    };

    // Prime Number Generator
    window.generatePrimeNumbers = function() {
        const limit = parseInt(document.getElementById('prime-limit').value);
        const resultDiv = document.getElementById('prime-result');

        if (!isNaN(limit) && limit > 1) {
            let primes = [];
            for (let i = 2; i <= limit; i++) {
                let isPrime = true;
                for (let j = 2; j <= Math.sqrt(i); j++) {
                    if (i % j === 0) {
                        isPrime = false;
                        break;
                    }
                }
                if (isPrime) primes.push(i);
            }
            resultDiv.innerHTML = `<p>Prime Numbers up to ${limit}: ${primes.join(', ')}</p>`;
            resultDiv.style.display = 'block';
        }
    };

    window.clearPrimeNumbers = function() {
        document.getElementById('prime-limit').value = '';
        document.getElementById('prime-result').style.display = 'none';
    };

    // Factorial Generator
    window.calculateFactorial = function() {
        const number = parseInt(document.getElementById('factorial-number').value);
        const resultDiv = document.getElementById('factorial-result');

        if (!isNaN(number) && number >= 0) {
            let factorial = 1;
            for (let i = 2; i <= number; i++) {
                factorial *= i;
            }
            resultDiv.innerHTML = `<p>Factorial of ${number} is: ${factorial}</p>`;
            resultDiv.style.display = 'block';
        }
    };

    window.clearFactorial = function() {
        document.getElementById('factorial-number').value = '';
        document.getElementById('factorial-result').style.display = 'none';
    };

    // Armstrong Number Check
    window.checkArmstrongNumber = function() {
        const number = parseInt(document.getElementById('armstrong-number').value);
        const resultDiv = document.getElementById('armstrong-result');

        if (!isNaN(number)) {
            const digits = String(number).split('');
            const sum = digits.reduce((acc, digit) => acc + Math.pow(Number(digit), digits.length), 0);
            if (sum === number) {
                resultDiv.innerHTML = `<p>${number} is an Armstrong number.</p>`;
            } else {
                resultDiv.innerHTML = `<p>${number} is not an Armstrong number.</p>`;
            }
            resultDiv.style.display = 'block';
        }
    };

    window.clearArmstrongNumber = function() {
        document.getElementById('armstrong-number').value = '';
        document.getElementById('armstrong-result').style.display = 'none';
    };

    // Pyramid Pattern Print
    window.printPyramidPattern = function() {
        const rows = parseInt(document.getElementById('pyramid-rows').value);
        const resultDiv = document.getElementById('pyramid-result');

        if (!isNaN(rows) && rows > 0) {
            let pattern = '';
            for (let i = 1; i <= rows; i++) {
                pattern += ' '.repeat(rows - i) + '*'.repeat(2 * i - 1) + '<br>';
            }
            resultDiv.innerHTML = `<pre>${pattern}</pre>`;
            resultDiv.style.display = 'block';
        }
    };

    window.clearPyramidPattern = function() {
        document.getElementById('pyramid-rows').value = '';
        document.getElementById('pyramid-result').style.display = 'none';
    };

    // Perfect Number Checker
    window.checkPerfectNumber = function() {
        const number = parseInt(document.getElementById('perfect-number').value);
        const resultDiv = document.getElementById('perfect-number-result');

        if (!isNaN(number) && number > 0) {
            let sum = 0;
            for (let i = 1; i <= number / 2; i++) {
                if (number % i === 0) {
                    sum += i;
                }
            }
            if (sum === number) {
                resultDiv.innerHTML = `<p>${number} is a perfect number.</p>`;
            } else {
                resultDiv.innerHTML = `<p>${number} is not a perfect number.</p>`;
            }
            resultDiv.style.display = 'block';
        }
    };

    window.clearPerfectNumber = function() {
        document.getElementById('perfect-number').value = '';
        document.getElementById('perfect-number-result').style.display = 'none';
    };

    // Reverse Number
    window.reverseNumber = function() {
        const number = parseInt(document.getElementById('reverse-number').value);
        const resultDiv = document.getElementById('reverse-result');

        if (!isNaN(number)) {
            const reversed = parseInt(String(number).split('').reverse().join(''));
            resultDiv.innerHTML = `<p>Reversed Number: ${reversed}</p>`;
            resultDiv.style.display = 'block';
        }
    };

    window.clearReverseNumber = function() {
        document.getElementById('reverse-number').value = '';
        document.getElementById('reverse-result').style.display = 'none';
    };

    // Digit Counter
    window.countDigits = function() {
        const number = parseInt(document.getElementById('digit-number').value);
        const resultDiv = document.getElementById('digit-counter-result');

        if (!isNaN(number)) {
            const digitCount = String(number).length;
            resultDiv.innerHTML = `<p>Number of Digits: ${digitCount}</p>`;
            resultDiv.style.display = 'block';
        }
    };

    window.clearDigitCounter = function() {
        document.getElementById('digit-number').value = '';
        document.getElementById('digit-counter-result').style.display = 'none';
    };

    // Sum of Natural Numbers
    window.calculateSumOfNaturals = function() {
        const number = parseInt(document.getElementById('natural-number').value);
        const resultDiv = document.getElementById('sum-of-naturals-result');

        if (!isNaN(number) && number > 0) {
            const sum = (number * (number + 1)) / 2;
            resultDiv.innerHTML = `<p>Sum of first ${number} natural numbers: ${sum}</p>`;
            resultDiv.style.display = 'block';
        }
    };

    window.clearSumOfNaturals = function() {
        document.getElementById('natural-number').value = '';
        document.getElementById('sum-of-naturals-result').style.display = 'none';
    };
});