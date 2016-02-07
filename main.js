/**
 * Created by hannaBar on 13.01.2016.
 */
//alert('hochu pisat na russkom');
var result = 0;
var anulik = 'barsik';
for (var i = 0; i < 100; i++) {
    result += i;
    if (result % 10 === 0)
        anulik = 'krasotka';
}
alert(result);