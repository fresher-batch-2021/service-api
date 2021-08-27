class Validator {
  static isValidString(input, message) {
    if (input == "" || input == null ) {
      throw new Error(message);
    }
  }
  static isValidPassword(input, message) {
    if (input == "" || input == null || input.trim() == "") {
      throw new Error(message);
    }

  }
  static isValidPasswordStrength(input, message) {
    if (input.length <= 6) {
      throw new Error(message);
    }
  }
}
