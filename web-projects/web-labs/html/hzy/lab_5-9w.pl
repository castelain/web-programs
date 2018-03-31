#!/usr/bin/perl  -w
use CGI qw(:standard);
use strict;
sub error{
	print "Error -file could not be opened in lab_9.pl<br>";
	print end_html;
	exit(1);
}
my($name,$composer,$artist)=
	(param("name"),param("composer"),param("artist"));
print header;
#$LOCK=2;
#$UNLOCK=8;
my $my_file="survey.txt";
open(SURVDATA,">>$my_file") or error();
#flock(SURVDATA,$LOCK);
print SURVDATA "$name\t$composer\t$artist\n";
#flock(SURVDATA,$UNLOCK);
#close(SURVDATA);
print start_html("Thanks");
#print "$name\t$composer\t$artist\n";
print "<big>Thanks for participation in our survey</big><br><br>\n";
print end_html;
