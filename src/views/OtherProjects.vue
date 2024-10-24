<template>
  <div style="margin-bottom: 80px;">
    <h1>Other Projects</h1>

    <div class="project-list">
      <div class="project-item">
        <h2>Flutter ToDo App</h2>
        <p>
          This Flutter project is a simple To-Do List application that allows users to manage their daily tasks. The app provides the following core functionalities:

Add Tasks: Users can input tasks in the provided text field and add them to the task list by pressing the enter key.

Task Completion: Each task has a status (completed or not), which users can toggle by tapping on the task item. Completed tasks are displayed with a checkmark and a strikethrough effect.

Delete Tasks: Users can remove tasks from the list by pressing the delete button next to each task.

Key Features:
Dynamic Task Management: Tasks are stored in a list that supports adding, marking as complete/incomplete, and deletion.
State Management: The app uses Flutter's StatefulWidget to handle dynamic changes in the task list and UI updates.
Customizable UI: The app has a custom AppBar with a title and settings icon, though the settings function is currently a placeholder. Each task is presented in a stylized container with shadow effects and rounded corners for visual appeal.
Responsive Design: The ListView.builder efficiently displays an unlimited number of tasks by building only the visible items.
The app is designed with clean UI elements and customizable colors by importing constants, providing a polished and functional user experience.
        </p>
        <a href="https://github.com/adag21044/Flutter-ToDo-App" target="_blank">View on GitHub</a>
      </div>

      <div class="project-item">
        <h2>Flutter Calculator</h2>
        <p>
          
This Flutter project is a simple calculator application that allows users to perform basic arithmetic operations. The app features a clean and intuitive interface with buttons for digits, operators, and a clear function. The main functionalities of the calculator include:

Key Features:
Basic Arithmetic Operations: Users can perform addition, subtraction, multiplication, and division.

Interactive Buttons: The calculator buttons are styled differently based on their function:

Number Buttons: Displayed with a dark theme, allowing users to input digits.
Operator Buttons: Shown in an orange accent, representing arithmetic operations (+, -, *, /).
Clear Button: Displayed in red, allowing users to reset the calculator.
Error Handling: The app gracefully handles division by zero by displaying an "Error" message on the screen.

Display Screen: The calculator screen shows the current input, and when an operation is performed, it updates with the result.

Core Functionality:
Input and Display: Users can input numbers and operators, which are displayed on the screen.
Operations: The app supports chaining of operations with proper handling of operands.
Clear Function: The clear button (C) resets the display, operands, and result.
Responsive UI:
The app is designed to be responsive, with buttons arranged in rows for easy access. Each button is styled using Flutter's ElevatedButton with a circular shape and padding for better user experience.

This calculator serves as an excellent example of a basic Flutter application with state management and custom UI components.
        </p>
        <a href="https://github.com/adag21044/Flutter-Calculator" target="_blank">View on GitHub</a>
      </div>

      <div class="project-item">
        <h2>Elevator Control Periodic Application Form</h2>
        <p>
          This HTML project implements a responsive web application.
        </p>  
        <a href="https://github.com/adag21044/Elevator-Control-Periodic-Application-Form" target="_blank">View on GitHub</a>
      </div>

      <!-- Add more project items as needed -->
    </div>

    <div style="clear:both"></div>
  </div>
</template>

<style scoped>
.project-list {
  max-width: 800px;
  margin-top: 20px;
}

.project-item {
  margin-bottom: 30px;
}

.project-item h2 {
  font-size: 1.8em;
  margin: 0;
}

.project-item p {
  margin: 10px 0;
  line-height: 1.6;
}

.project-item a {
  color: #007BFF; /* Link color */
  text-decoration: none;
  font-weight: bold;
}

.project-item a:hover {
  text-decoration: underline; /* Add underline on hover */
}
</style>