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
            case 'leap-year':
                content = `
                    <h2>Leap Year Check</h2>
                    <div class="form-group">
                        <label for="year">Enter Year:</label>
                        <input type="number" id="year" class="form-control" placeholder="e.g., 2023">
                    </div>
                    <button class="btn btn-primary" onclick="checkLeapYear()">Check</button>
                    <button class="btn btn-secondary" onclick="clearLeapYear()">Clear</button>
                    <div id="leap-year-result" class="result mt-3"></div>
                `;
                break;

            case 'grade-calc':
                content = `
                    <h2>Grade Calculator</h2>
                    <div class="form-group">
                        <label for="marks">Enter Marks:</label>
                        <input type="number" id="marks" class="form-control" placeholder="e.g., 85">
                    </div>
                    <button class="btn btn-primary" onclick="calculateGrade()">Calculate</button>
                    <button class="btn btn-secondary" onclick="clearGrade()">Clear</button>
                    <div id="grade-result" class="result mt-3"></div>
                `;
                break;

            case 'largerst-of-three':
                content = `
                    <h2>Largest of the Three Numbers</h2>
                    <div class="form-group">
                        <label for="num1">Number 1:</label>
                        <input type="number" id="num1" class="form-control" placeholder="e.g., 10">
                    </div>
                    <div class="form-group">
                        <label for="num2">Number 2:</label>
                        <input type="number" id="num2" class="form-control" placeholder="e.g., 20">
                    </div>
                    <div class="form-group">
                        <label for="num3">Number 3:</label>
                        <input type="number" id="num3" class="form-control" placeholder="e.g., 30">
                    </div>
                    <button class="btn btn-primary" onclick="findLargest()">Find Largest</button>
                    <button class="btn btn-secondary" onclick="clearLargest()">Clear</button>
                    <div id="largest-result" class="result mt-3"></div>
                `;
                break;

            case 'trianglr-type':
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
                    <button class="btn btn-primary" onclick="checkTriangleType()">Check Type</button>
                    <button class="btn btn-secondary" onclick="clearTriangleType()">Clear</button>
                    <div id="triangle-type-result" class="result mt-3"></div>
                `;
                break;

            case 'discount-calc':
                content = `
                    <h2>Discount Calculator</h2>
                    <div class="form-group">
                        <label for="price">Original Price:</label>
                        <input type="number" id="price" class="form-control" placeholder="e.g., 100">
                    </div>
                    <div class="form-group">
                        <label for="discount">Discount (%):</label>
                        <input type="number" id="discount" class="form-control" placeholder="e.g., 10">
                    </div>
                    <button class="btn btn-primary" onclick="calculateDiscount()">Calculate</button>
                    <button class="btn btn-secondary" onclick="clearDiscount()">Clear</button>
                    <div id="discount-result" class="result mt-3"></div>
                `;
                break;

            case 'number-type':
                content = `
                    <h2>Number Type Checker</h2>
                    <div class="form-group">
                        <label for="number">Enter Number:</label>
                        <input type="number" id="number" class="form-control" placeholder="e.g., 7">
                    </div>
                    <button class="btn btn-primary" onclick="checkNumberType()">Check</button>
                    <button class="btn btn-secondary" onclick="clearNumberType()">Clear</button>
                    <div id="number-type-result" class="result mt-3"></div>
                `;
                break;

            case 'char-type':
                content = `
                    <h2>Character Type Checker</h2>
                    <div class="form-group">
                        <label for="char">Enter Character:</label>
                        <input type="text" id="char" class="form-control" maxlength="1" placeholder="e.g., A">
                    </div>
                    <button class="btn btn-primary" onclick="checkCharType()">Check</button>
                    <button class="btn btn-secondary" onclick="clearCharType()">Clear</button>
                    <div id="char-type-result" class="result mt-3"></div>
                `;
                break;

            case 'electricity-bill':
                content = `
                    <h2>Electricity Bill Calculator</h2>
                    <div class="form-group">
                        <label for="units">Enter Units Consumed:</label>
                        <input type="number" id="units" class="form-control" placeholder="e.g., 150">
                    </div>
                    <button class="btn btn-primary" onclick="calculateBill()">Calculate</button>
                    <button class="btn btn-secondary" onclick="clearBill()">Clear</button>
                    <div id="bill-result" class="result mt-3"></div>
                `;
                break;

            case 'week-no':
                content = `
                    <h2>Week No. - Week Day</h2>
                    <div class="form-group">
                        <label for="week-number">Enter Week Number (1-7):</label>
                        <input type="number" id="week-number" class="form-control" min="1" max="7" placeholder="e.g., 3">
                    </div>
                    <button class="btn btn-primary" onclick="getWeekDay()">Get Day</button>
                    <button class="btn btn-secondary" onclick="clearWeekDay()">Clear</button>
                    <div id="week-day-result" class="result mt-3"></div>
                `;
                break;

            case 'valid-triangle':
                content = `
                    <h2>Valid Triangle Check</h2>
                    <div class="form-group">
                        <label for="sideA">Side A:</label>
                        <input type="number" id="sideA" class="form-control" placeholder="e.g., 3">
                    </div>
                    <div class="form-group">
                        <label for="sideB">Side B:</label>
                        <input type="number" id="sideB" class="form-control" placeholder="e.g., 4">
                    </div>
                    <div class="form-group">
                        <label for="sideC">Side C:</label>
                        <input type="number" id="sideC" class="form-control" placeholder="e.g., 5">
                    </div>
                    <button class="btn btn-primary" onclick="checkValidTriangle()">Check</button>
                    <button class="btn btn-secondary" onclick="clearValidTriangle()">Clear</button>
                    <div id="valid-triangle-result" class="result mt-3"></div>
                `;
                break;

            default:
                content = `<h2>Select a section from the menu</h2>
                           <p>Click on any section from the left menu to view its content.</p>`;
        }
        contentArea.innerHTML = content;
    }

    // Leap Year Check
    window.checkLeapYear = function() {
        const year = parseInt(document.getElementById('year').value);
        const resultDiv = document.getElementById('leap-year-result');

        if (!isNaN(year)) {
            if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
                resultDiv.innerHTML = `${year} is a leap year.`;
            } else {
                resultDiv.innerHTML = `${year} is not a leap year.`;
            }
            resultDiv.style.display = 'block';
        }
    };

    window.clearLeapYear = function() {
        document.getElementById('year').value = '';
        document.getElementById('leap-year-result').style.display = 'none';
    };

    // Grade Calculator
    window.calculateGrade = function() {
        const marks = parseFloat(document.getElementById('marks').value);
        const resultDiv = document.getElementById('grade-result');

        if (!isNaN(marks)) {
            let grade = '';
            if (marks >= 90) grade = 'A';
            else if (marks >= 80) grade = 'B';
            else if (marks >= 70) grade = 'C';
            else if (marks >= 60) grade = 'D';
            else grade = 'F';

            resultDiv.innerHTML = `Your grade is: ${grade}`;
            resultDiv.style.display = 'block';
        }
    };

    window.clearGrade = function() {
        document.getElementById('marks').value = '';
        document.getElementById('grade-result').style.display = 'none';
    };

    // Largest of Three Numbers
    window.findLargest = function() {
        const num1 = parseFloat(document.getElementById('num1').value);
        const num2 = parseFloat(document.getElementById('num2').value);
        const num3 = parseFloat(document.getElementById('num3').value);
        const resultDiv = document.getElementById('largest-result');

        if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3)) {
            const largest = Math.max(num1, num2, num3);
            resultDiv.innerHTML = `The largest number is: ${largest}`;
            resultDiv.style.display = 'block';
        }
    };

    window.clearLargest = function() {
        document.getElementById('num1').value = '';
        document.getElementById('num2').value = '';
        document.getElementById('num3').value = '';
        document.getElementById('largest-result').style.display = 'none';
    };

    // Triangle Type Checker
    window.checkTriangleType = function() {
        const side1 = parseFloat(document.getElementById('side1').value);
        const side2 = parseFloat(document.getElementById('side2').value);
        const side3 = parseFloat(document.getElementById('side3').value);
        const resultDiv = document.getElementById('triangle-type-result');

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

    window.clearTriangleType = function() {
        document.getElementById('side1').value = '';
        document.getElementById('side2').value = '';
        document.getElementById('side3').value = '';
        document.getElementById('triangle-type-result').style.display = 'none';
    };

    // Discount Calculator
    window.calculateDiscount = function() {
        const price = parseFloat(document.getElementById('price').value);
        const discount = parseFloat(document.getElementById('discount').value);
        const resultDiv = document.getElementById('discount-result');

        if (!isNaN(price) && !isNaN(discount)) {
            const discountAmount = (price * discount) / 100;
            const finalPrice = price - discountAmount;
            resultDiv.innerHTML = `
                Discount Amount: $${discountAmount.toFixed(2)}<br>
                Final Price: $${finalPrice.toFixed(2)}
            `;
            resultDiv.style.display = 'block';
        }
    };

    window.clearDiscount = function() {
        document.getElementById('price').value = '';
        document.getElementById('discount').value = '';
        document.getElementById('discount-result').style.display = 'none';
    };

    // Number Type Checker
    window.checkNumberType = function() {
        const number = parseFloat(document.getElementById('number').value);
        const resultDiv = document.getElementById('number-type-result');

        if (!isNaN(number)) {
            let type = '';
            if (number > 0) type = 'Positive';
            else if (number < 0) type = 'Negative';
            else type = 'Zero';

            resultDiv.innerHTML = `The number is: ${type}`;
            resultDiv.style.display = 'block';
        }
    };

    window.clearNumberType = function() {
        document.getElementById('number').value = '';
        document.getElementById('number-type-result').style.display = 'none';
    };

    // Character Type Checker
    window.checkCharType = function() {
        const char = document.getElementById('char').value;
        const resultDiv = document.getElementById('char-type-result');

        if (char.length === 1) {
            let type = '';
            if (/[a-zA-Z]/.test(char)) {
                type = 'Alphabet';
            } else if (/\d/.test(char)) {
                type = 'Digit';
            } else {
                type = 'Special Character';
            }
            resultDiv.innerHTML = `The character is a: ${type}`;
            resultDiv.style.display = 'block';
        }
    };

    window.clearCharType = function() {
        document.getElementById('char').value = '';
        document.getElementById('char-type-result').style.display = 'none';
    };

    // Electricity Bill Calculator
    window.calculateBill = function() {
        const units = parseFloat(document.getElementById('units').value);
        const resultDiv = document.getElementById('bill-result');

        if (!isNaN(units)) {
            let bill = 0;
            if (units <= 50) {
                bill = units * 0.5;
            } else if (units <= 150) {
                bill = 50 * 0.5 + (units - 50) * 0.75;
            } else if (units <= 250) {
                bill = 50 * 0.5 + 100 * 0.75 + (units - 150) * 1.2;
            } else {
                bill = 50 * 0.5 + 100 * 0.75 + 100 * 1.2 + (units - 250) * 1.5;
            }
            resultDiv.innerHTML = `Your electricity bill is: $${bill.toFixed(2)}`;
            resultDiv.style.display = 'block';
        }
    };

    window.clearBill = function() {
        document.getElementById('units').value = '';
        document.getElementById('bill-result').style.display = 'none';
    };

    // Week Number to Week Day
    window.getWeekDay = function() {
        const weekNumber = parseInt(document.getElementById('week-number').value);
        const resultDiv = document.getElementById('week-day-result');

        if (!isNaN(weekNumber) && weekNumber >= 1 && weekNumber <= 7) {
            const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            resultDiv.innerHTML = `Day of the week: ${days[weekNumber - 1]}`;
            resultDiv.style.display = 'block';
        }
    };

    window.clearWeekDay = function() {
        document.getElementById('week-number').value = '';
        document.getElementById('week-day-result').style.display = 'none';
    };

    // Valid Triangle Check
    window.checkValidTriangle = function() {
        const sideA = parseFloat(document.getElementById('sideA').value);
        const sideB = parseFloat(document.getElementById('sideB').value);
        const sideC = parseFloat(document.getElementById('sideC').value);
        const resultDiv = document.getElementById('valid-triangle-result');

        if (!isNaN(sideA) && !isNaN(sideB) && !isNaN(sideC)) {
            if (sideA + sideB > sideC && sideB + sideC > sideA && sideA + sideC > sideB) {
                resultDiv.innerHTML = 'These sides can form a valid triangle.';
            } else {
                resultDiv.innerHTML = 'These sides cannot form a valid triangle.';
            }
            resultDiv.style.display = 'block';
        }
    };

    window.clearValidTriangle = function() {
        document.getElementById('sideA').value = '';
        document.getElementById('sideB').value = '';
        document.getElementById('sideC').value = '';
        document.getElementById('valid-triangle-result').style.display = 'none';
    };
});