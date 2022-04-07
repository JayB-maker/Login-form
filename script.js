const newMember = document.getElementById('login_form')
    existingMember = document.getElementById('registeration_form');

    function registerNow(e) {
        e.preventdefault();
        newMember.style.display = "none";
        existingMember.style.display = "block";
    }

    function loginNow (e) {
        e.preventdefault();
        existingMember.style.display = "none";
        newMember.style.display = "block";
    }