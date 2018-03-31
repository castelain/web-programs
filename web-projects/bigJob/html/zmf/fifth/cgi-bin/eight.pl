#!/usr/bin/perl

use CGI qw(:standard);

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

foreach $pair(@pairs){
    ($name,$value)=split(/=/,$pair);
    $string=$string.$value.",";
}

open(OUTPUT,">>20151120051/fifth/data.dat") or die "Could not open the OUTPUT to append something. $!";
print OUTPUT $string,"\n";

print("Content-type:text/html\n\n");
print("<html>");
print("<head><title>Hello</title></head>");
print('<meta charset="utf-8">');
print('<meta name="viewport" content="width=device-width, initial-scale=1">');
print('<link href="https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">');
print("<body>");
print(div({-class=>"container"},
        div({-class=>"page-header"},h1("You hava submitted the data successfully. Thank you!"))
    ));
print("</body>");
print("</html>");
close(OUTPUT);
