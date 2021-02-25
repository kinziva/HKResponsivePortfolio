$(document).ready(function () {
    function project1() {
        $('#project1Code').click(function (e) { 
            e.preventDefault();
            window.open('https://github.com/kinziva/Project1G4');
        });
        $('#project1App').click(function (e) {
            e.preventDefault();
            window.open('https://kinziva.github.io/Project1G4/')
        });
    };
    function weatherApp() {
        $('#weatherCode').click(function (e) { 
            e.preventDefault();
            window.open('https://github.com/kinziva/HKweatherDashboard');
        });
        $('#weatherApp').click(function (e) {
            e.preventDefault();
            window.open('https://kinziva.github.io/HKweatherDashboard/')
        });
    };
    function passwordApp() {
        $('#passwordCode').click(function (e) { 
            e.preventDefault();
            window.open('https://github.com/kinziva/HKPasswordGenerateJS');
        });
        $('#passwordApp').click(function (e) {
            e.preventDefault();
            window.open('https://kinziva.github.io/HKPasswordGenerateJS/')
        });
    };
    function burgerApp() {
        $('#burgerCode').click(function (e) { 
            e.preventDefault();
            window.open('https://github.com/kinziva/burgerHandleBars');
        });
        $('#burgerApp').click(function (e) {
            e.preventDefault();
            window.open('https://hidden-gorge-50321.herokuapp.com/')
        });
    }
    function quizApp() {
        $('#quizCode').click(function (e) { 
            e.preventDefault();
            window.open('https://github.com/kinziva/HKcodeQuiz');
        });
        $('#quizApp').click(function (e) {
            e.preventDefault();
            window.open('https://kinziva.github.io/HKcodeQuiz/')
        });
    }
    function noteTakerApp() {
        $('#noteTakerCode').click(function (e) { 
            e.preventDefault();
            window.open('https://github.com/kinziva/noteTakeApp');
        });
        $('#noteTakerApp').click(function (e) {
            e.preventDefault();
            window.open('https://secret-mesa-44468.herokuapp.com/')
        });
    }

    project1();
    weatherApp();
    passwordApp();
    burgerApp();
    quizApp();
    noteTakerApp();

});

