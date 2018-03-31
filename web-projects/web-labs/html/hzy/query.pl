#!/usr/bin/perl  -w

use CGI qw(:standard);
use strict;

sub error{
	print "Error -file could not be opened in query.pl<br>";
	print end_html;
	exit(1);
}

my (@list,$len,@pairs,@firsts,@count);
print header;

my $my_file = "survey.txt";
open(SURVDATA,"<$my_file") or error();
@list = <SURVDATA>;

$len = @list;
for (my $var = 0;$var < $len;$var++){
	@pairs = split(/\t/,$list[$var]);
	$firsts[$var] = $pairs[0];
	$count[$var]=1;
}

for(my $m=0;$m<$len-1;$m++){
      for(my $n=$m+1;$n<$len;$n++){
          if($firsts[$m]eq($firsts[$n])){
              $count[$m]++;
              $firsts[$n]=0;
          }
      }
}
print "name\tcomposer\tartist\t--->HurtPoint",br;
for(my $x=0;$x<$len;$x++){
     if($firsts[$x]gt(0)){
        print "$list[$x]------>$count[$x]",br;
     }
}

print start_html("Thanks");
#print "@count",br;
#print "@firsts",br;
#print "@list[0]\n";

print end_html;
