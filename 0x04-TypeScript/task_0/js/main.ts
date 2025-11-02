interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "Alice",
    lastName: "Johnson",
    age: 22,
    location: "New York"
};

const student2: Student = {
    firstName: "Bob",
    lastName: "Smith",
    age: 24,
    location: "London"
};

const studentsList: Student[] = [student1, student2];

function renderTable(students: Student[]): void {
    const table = document.createElement("table");
    const header = table.insertRow();
    header.insertCell().innerText = "First Name";
    header.insertCell().innerText = "Location";

    students.forEach(student => {
        const row = table.insertRow();
        row.insertCell().innerText = student.firstName;
        row.insertCell().innerText = student.location;
    });

    document.body.appendChild(table);
}

renderTable(studentsList);
