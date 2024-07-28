function checkAge(age) {
    if (age < 0) {
        throw new Error('Age cannot be negative.');
    }
    return age;
}

try {
    console.log(checkAge(-5));
} catch (error) {
    console.error('Error:', error.message);
}
finally {
    console.log("THE EHT")
}