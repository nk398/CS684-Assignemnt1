<script src={window.location.href='index.html'}>{
    function validateForm() {
        let x = document.forms["myForm"]["fname"].value;
        if (x == "" || x == null || x != "Avengers") {
            alert("Valid team name must be filled out");
            return false;
        }else
            return window.location.href="teammembers.html";
    }
}
</script>
