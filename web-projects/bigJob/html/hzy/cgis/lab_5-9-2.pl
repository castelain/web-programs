
use CGI qw(:standard);

#get the parameters

$ENV{'REQUEST_METHOD'} =~ tr/a-z/A-Z/;
if($ENV{'REQUEST_METHOD'} eq "GET"){
    $buffer = $ENV{'QUERY_STRING'};
}elsif($ENV{'REQUEST_METHOD'} eq "POST"){
   read(STDIN,$buffer,$ENV{'CONTENT_LENGTH'});
}

open(FILE,"lab_5-9.txt") or die "can not open lab_5-9.txt.$!";
@lines=<FILE>;

print("Content-type:text/html\n\n");
print("<html>");
print("<head><title>lab_5-9-2.pl</title></head>");
print('<meta charset="utf-8">');
print('<meta name="viewport" content="width=device-width, initial-scale=1">');
# print('<link href="https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">');
print("<body>");

print('<div class="container">');
print(div({-class=>"page-header"},h1("Here are the data:")));
print('<table class="table-bordered">');
print(Tr(th("name"),th("composer"),th("performer")));
foreach $line(@lines){
    ($name,$composer,$performer)=split(/,/,$line);
    print(Tr(td($name),td($composer),td($performer)));
}
print("</table>");

print("</div>");

print("</body>");
print("</html>");
