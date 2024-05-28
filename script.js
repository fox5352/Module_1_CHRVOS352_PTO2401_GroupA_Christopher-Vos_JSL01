function validateSyntax() {
    let input = document.getElementById('petInput').value;
    // Validation logic goes here
    const pattern = new RegExp("pet_[a-zA-Z0-9_\s]*")

    const isValid = input.search(pattern);

    let result = ''; // Placeholder for validation result

    if (isValid !== -1) {
        result = `Valid Syntax <span class="invalid">&#128994;</span>`;
    }else{
        result = `Invalid Syntax <span class="invalid">&#128308;</span>`;
    }

    // Check if input starts with 'pet_' and followed by alphanumeric characters
    document.getElementById('result').innerHTML = result;
}


