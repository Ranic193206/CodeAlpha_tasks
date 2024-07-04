function calculateAge() {
    const dobInput = document.getElementById('dob').value;
    const day = parseInt(document.getElementById('day').value, 10);
    const month = parseInt(document.getElementById('month').value, 10);
    const year = parseInt(document.getElementById('year').value, 10);

    let birthDate;

    if (dobInput) {
        birthDate = new Date(dobInput);
    } else if (day && month && year) {
        birthDate = new Date(year, month - 1, day); 
    } else {
        document.getElementById('result').textContent = 'Please enter a valid date of birth.';
        return;
    }

    const today = new Date();

    if (birthDate > today) {
        document.getElementById('result').textContent = 'Birth date cannot be in the future.';
        return;
    }

    const diffInMilliseconds = today - birthDate;
    const diffInSeconds = Math.floor(diffInMilliseconds / 1000);
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    const diffInHours = Math.floor(diffInMinutes / 60);
    const diffInDays = Math.floor(diffInHours / 24);
    const diffInWeeks = Math.floor(diffInDays / 7);
    const diffInMonths = Math.floor(diffInDays / 30.436875);

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
        months--;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    const results = `
        <div class="result-item">Age: ${years} years ${months} months ${days} days</div>
        <div class="result-item">or ${diffInMonths} months ${days} days</div>
        <div class="result-item">or ${diffInWeeks} weeks ${diffInDays % 7} days</div>
        <div class="result-item">or ${diffInDays} days</div>
        <div class="result-item">or ${diffInHours.toLocaleString()} hours</div>
        <div class="result-item">or ${diffInMinutes.toLocaleString()} minutes</div>
        <div class="result-item">or ${diffInSeconds.toLocaleString()} seconds</div>
    `;

    document.getElementById('result').innerHTML = results;
}
