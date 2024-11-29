class Person {
  #name = "";

  constructor(name) {
    this.#name = name;
  }

  get name() {
    return this.#name;
  }

  // set name(value) {
  //   if (this.#name.length > 10) {
  //     console.log("non");
  //     return;
  //   }
  //   this.#name = value;
  // }

  direBonjour() {
    return `Bonjour, je m'appelle ${this.#name}`;
  }
}

class Professor extends Person {
  #teaches = "";

  constructor(name, subject) {
    super(name);
    this.#teaches = subject;
  }

  get teaches() {
    return this.#teaches;
  }

  direBonjour() {
    return super.direBonjour() + " et j'enseigne " + this.#teaches;
  }
}


class Student extends Person {
  #year = "";

  constructor(name, year) {
    super(name);
    this.#year = year;
  }

  get year() {
    return this.#year;
  }

  direBonjour() {
    return super.direBonjour() + " et je suis en année " + this.#year;
  }
}




class Salle {
  #nom = "";
  #professor = null;
  #students = [];

  constructor(nom) {
    this.#nom = nom;
  }

  get nom() {
    return this.#nom;
  }

  get professor() {
    return this.#professor;
  }

  set professor(prof) {
    if (prof instanceof Professor) {
      this.#professor = prof;
    } else {
      throw new Error("Le professeur doit être une instance de la classe Professor.");
    }
  }

  get students() {
    return this.#students;
  }

  addStudent(student) {
    if (student instanceof Student) {
      this.#students.push(student);
    } else {
      throw new Error("L'étudiant doit être une instance de la classe Student.");
    }
  }
}



