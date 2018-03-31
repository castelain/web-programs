#!/usr/bin/perl

use CGI qw(:standard);

open(OUTDAT,">>20151120051/ZX.TXT") or
     die "Can't open file\n$!";


print OUTDAT "ZHENXIONG! 2017 Fall ", time(), "\n";

print "Content-type: text/html\n\n";
print "<html><h1>Hello!</h1></html>\n";