var marks = 85;

if (marks <= 100 && marks >= 80) {
    console.log('You Got GPA A+');
} else if (marks < 80 && marks >= 70) {
    console.log('You Got A Grade');
} else if (marks < 70 && marks >= 60) {
    console.log('You Got A -');
} else if (marks < 60 && marks >= 50) {
    console.log('You Got B Grade');
} else if (marks < 50 && marks >= 40) {
    console.log('You Got C Grade');
} else if (marks < 40 && marks >= 33) {
    console.log('You Got D Grade');
} else if (marks < 33) {
    console.log('Sorry You Are Failed');
} else {
    console.log('Sorry This is Invalid Marks');
}