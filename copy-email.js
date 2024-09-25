<script>
var c = document.getElementsByTagName("a");
for(var i = 0; i < c.length; i++) {
    if((typeof(c[i]) !== undefined) && (c[i].href.indexOf('mailto') !== -1)) {
        c[i].addEventListener('copy', function(evt) {
            dataLayer.push({
            'event': 'copyText', 
            'copy-class' : evt.target.className
            });
        });
        c[i].addEventListener('contextmenu', function(evt) {
            dataLayer.push({
            'event': 'rightClick', 
            'copy-class' : evt.target.className
            });
        });
    }
}
</script>