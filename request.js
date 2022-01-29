axios.get('https://jsonplaceholder.typicode.com/user')
    .then(response => {

        }, err=> {

        }
        )

$(document).ready(function() {
        $.ajax({
                url:'https://jsonplaceholder.typicode.com/user',
                type:"GET",
                success:function (index) {
                        console.log(index)
                },
                error:function(err) {
                        console.log(err);
                }
            })
})
