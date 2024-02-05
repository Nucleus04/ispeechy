

export const Capitalize = (str) => {
    return str.split(" ").map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join(" ");
}

export const SanitizeName = (name) => {
    name = name.trim();

    const nameRegex = /^[A-Za-z\s]+$/;

    if (!nameRegex.test(name)) {
        return false
    }
    return true;
}

export const SanitizeEmail = (email) => {
    const testemail = email.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(testemail)) {
        return null;
    } else {
        return true;
    }
}


export const validatePassword = (password) => {
    if (!password.length >= 8) {
        return false;
    }
    return true;
}