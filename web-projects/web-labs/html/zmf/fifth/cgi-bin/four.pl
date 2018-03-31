#!/usr/bin/perl

#get the parameters

$ENV{'REQUEST_METHOD'} =~ tr/a-z/A-Z/;
if($ENV{'REQUEST_METHOD'} eq "GET"){
    $buffer = $ENV{'QUERY_STRING'};
}elsif($ENV{'REQUEST_METHOD'} eq "POST"){
    read(STDIN,$buffer,$ENV{'CONTENT_LENGTH'});
}
$buffer=~s/\+/ /g;
$buffer=~s/%([\da-fA-F][\da-fA-F])/pack("C",hex($1))/eg;
#get the parameter pairs
@pairs=split(/&/,$buffer);

$total=0;
$index=0;
foreach $pair(@pairs){
    ($name,$value)=split(/=/,$pair);
    $all{$name}=$value;
    if( $value!~ /[a-z]+/){
        $items[$index]=$name;
        $prices[$index]=$value;
        $index+=1;
        $total=$total+$value;
    }
}

print("Content-type:text/html\n\n");
print("<html>");
print("<head><title>Hello</title></head>");
print('<meta charset="utf-8">');
print('<meta name="viewport" content="width=device-width, initial-scale=1">');
print('<link href="https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">');
print("<body>");
print('<div class="container">');
$total=$total*1.06;
print("<h2>Hello, $all{'name'}.</h2>");
print("<h4>You hava selected:</h4>");

print('<table width=600px class="table-bordered">');
print("<tr><th>What you hava selected</th><th>price</th></tr>");
for($i=0;$i<=$#items;$i=$i+1){
    print("<tr><td>$items[$i]</td><td>$prices[$i]</td></tr>");
}
print("</table>");

print("<br/>");
printf("<p>They are total %5.2f dollars.</p>",$total);
print("<p>Thank you!</p>");
print("</div>");
print("</body>");
print("</html>");
