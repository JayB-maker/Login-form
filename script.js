const newMember = document.getElementById('login_form')
    existingMember = document.getElementById('registeration_form');

    function registerNow(e) {
        e.preventDefault();
        newMember.style.display = "none";
        existingMember.style.display = "block";
    }

    function loginNow (e) {
        e.preventDefault();
        existingMember.style.display = "none";
        newMember.style.display = "block";
    }
