const newMember = document.getElementById('login_form')
    existingMember = document.getElementById('registeration_form');

    function registerNow() {
        newMember.style.display = "none";
        existingMember.style.display = "block";
    }

    function loginNow () {
        existingMember.style.display = "none";
        newMember.style.display = "block";
    }