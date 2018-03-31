use CGI;

#get the parameters

#$ENV{'REQUEST_METHOD'} =~ tr/a-z/A-Z/;
if($ENV{'REQUEST_METHOD'} eq "GET"){
    $buffer = $ENV{'QUERY_STRING'};
}elsif($ENV{'REQUEST_METHOD'} eq "POST"){
    read(STDIN,$buffer,$ENV{'CONTENT_LENGTH'});
}
$buffer=~tr/+/ /;
$buffer=~s/%([\da-fA-F][\da-fA-F])/pack("C",hex($1))/eg;
$string="";
#get the parameter pairs
@pairs=split(/&/,$buffer);

foreach $pair(@pairs){
    ($name,$value)=split(/=/,$pair);
    $string=$string.$value.",";
}

open(FILE,">>lab_5-9.txt") or die "Could not open the file to append something. $!";
print FILE $string."\n";

print("Content-type:text/html\n\n");
print("<html>");
print("<head><title>lab_5-9</title></head>");
print('<meta charset="utf-8">');
print("<body>");
print(p($buffer));
print("<br/>")
print(p("数据已写入lab_5-9.txt。"));
print("</body>");
print("</html>");
