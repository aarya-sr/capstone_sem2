const fallbackQuestions = {
  computers: {
    easy: [
      {
        question: "What does CPU stand for?",
        correct_answer: "Central Processing Unit",
        incorrect_answers: ["Computer Personal Unit", "Central Process Utility", "Control Processing Unit"]
      },
      {
        question: "What is the brain of the computer?",
        correct_answer: "CPU",
        incorrect_answers: ["RAM", "Motherboard", "Hard Drive"]
      },
      {
        question: "What type of device is a keyboard?",
        correct_answer: "Input",
        incorrect_answers: ["Output", "Storage", "Processing"]
      }
    ],
    medium: [
      {
        question: "Which protocol is used to send emails?",
        correct_answer: "SMTP",
        incorrect_answers: ["FTP", "HTTP", "POP"]
      },
      {
        question: "Which of these is NOT an operating system?",
        correct_answer: "Python",
        incorrect_answers: ["Linux", "Windows", "macOS"]
      },
      {
        question: "What does HTML stand for?",
        correct_answer: "HyperText Markup Language",
        incorrect_answers: ["Hyperlinks Text Markup Language", "Home Tool Markup Language", "Hyper Transfer Markup Language"]
      }
    ],
    hard: [
      {
        question: "What is the time complexity of binary search?",
        correct_answer: "O(log n)",
        incorrect_answers: ["O(n)", "O(n log n)", "O(1)"]
      },
      {
        question: "Which register stores the address of the next instruction?",
        correct_answer: "Program Counter",
        incorrect_answers: ["Accumulator", "Instruction Register", "Memory Address Register"]
      },
      {
        question: "What is a deadlock in operating systems?",
        correct_answer: "A state where no process can proceed",
        incorrect_answers: ["A virus attack", "High CPU usage", "Infinite loop"]
      }
    ]
  },

  math: {
    easy: [
      {
        question: "What is 2 + 2?",
        correct_answer: "4",
        incorrect_answers: ["3", "5", "2"]
      },
      {
        question: "What is the square root of 9?",
        correct_answer: "3",
        incorrect_answers: ["2", "4", "6"]
      },
      {
        question: "How many sides does a triangle have?",
        correct_answer: "3",
        incorrect_answers: ["4", "5", "6"]
      }
    ],
    medium: [
      {
        question: "What is the derivative of x²?",
        correct_answer: "2x",
        incorrect_answers: ["x", "x²", "1"]
      },
      {
        question: "If f(x) = 3x + 2, what is f(2)?",
        correct_answer: "8",
        incorrect_answers: ["6", "7", "9"]
      },
      {
        question: "What is the sum of interior angles of a hexagon?",
        correct_answer: "720°",
        incorrect_answers: ["540°", "360°", "900°"]
      }
    ],
    hard: [
      {
        question: "What is the integral of 1/x dx?",
        correct_answer: "ln|x| + C",
        incorrect_answers: ["1/x + C", "x + C", "ln(x²) + C"]
      },
      {
        question: "Solve for x: 2x² - 4x + 2 = 0",
        correct_answer: "x = 1",
        incorrect_answers: ["x = 2", "x = -1", "x = 0"]
      },
      {
        question: "What is the limit of (1 + 1/n)^n as n → ∞?",
        correct_answer: "e",
        incorrect_answers: ["1", "∞", "0"]
      }
    ]
  },

  gk: {
    easy: [
      {
        question: "Which planet is known as the Red Planet?",
        correct_answer: "Mars",
        incorrect_answers: ["Jupiter", "Saturn", "Earth"]
      },
      {
        question: "How many continents are there on Earth?",
        correct_answer: "7",
        incorrect_answers: ["5", "6", "8"]
      },
      {
        question: "What color is the sky on a clear day?",
        correct_answer: "Blue",
        incorrect_answers: ["Green", "Red", "Yellow"]
      }
    ],
    medium: [
      {
        question: "Who wrote the national anthem of India?",
        correct_answer: "Rabindranath Tagore",
        incorrect_answers: ["Bankim Chandra Chattopadhyay", "Mahatma Gandhi", "Sarojini Naidu"]
      },
      {
        question: "Which year did World War II end?",
        correct_answer: "1945",
        incorrect_answers: ["1939", "1941", "1942"]
      },
      {
        question: "What is the currency of Japan?",
        correct_answer: "Yen",
        incorrect_answers: ["Won", "Dollar", "Peso"]
      }
    ],
    hard: [
      {
        question: "What is the capital of Kazakhstan?",
        correct_answer: "Astana (now Nur-Sultan)",
        incorrect_answers: ["Almaty", "Tashkent", "Bishkek"]
      },
      {
        question: "Which country has the highest number of time zones?",
        correct_answer: "France",
        incorrect_answers: ["USA", "Russia", "UK"]
      },
      {
        question: "Who discovered penicillin?",
        correct_answer: "Alexander Fleming",
        incorrect_answers: ["Marie Curie", "Isaac Newton", "Albert Einstein"]
      }
    ]
  }
};

export default fallbackQuestions;
