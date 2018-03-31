print "Content-type: text/html\n\n";
print "<html><head>\n";
print "<title>lab_5-4</title></head>\n";
print "<body>\n";

$request_method=$ENV{'REQUEST_METHOD'};
if ($request_method eq "GET") {
	$query_string=$ENV{'QUERY_STRING'};
}elsif($request_method eq "POST"){
	read(STDIN,$query_string,$ENV{'CONTENT_LENGTH'});
}else{
	print "Error - request mothod is illegal \n";
}
%map_query_string={};
@name_value_pairs=split(/&/,$query_string);
foreach $name_value(@name_value_pairs){
	($name,$value)=split(/=/,$name_value);
	$value=~tr/+/ /;
	$value=~s/%([\da-fA-F][\da-fA-F])/pack("C",hex($1))/eg;
	# print "$name => $value";
	# print "<br/>";
	$map_query_string{"$name"}=$value;
}
@price_commodity=($map_query_string{'commoditys0'}+0,$map_query_string{'commoditys1'}+0,$map_query_string{'commoditys2'}+0,$map_query_string{'commoditys3'}+0);
@tax_commodity=();
@price_of_tax=();
# print "@price_commodity<br/>";
for($i=0;$i<=$#price_commodity;$i++){
	$tax_commodity[$i]=0.062*$price_commodity[$i];
	$price_of_tax[$i]=$price_commodity[$i]+$tax_commodity[$i];
	# print "$price_commodity[$i]<br/>";
	# print "$tax_commodity[$i]<br/>";
	# print "$price_of_tax[$i]<br/>";
	# print "<br/>";
}
$total_commoditys=$price_of_tax[0]+$price_of_tax[1]+$price_of_tax[2]+$price_of_tax[3];
# print "\@price_commodity=@price_commodity<br/>";
# print "\@tax_commodity=@tax_commodity<br/>";
# print "\@price_of_tax=@price_of_tax<br/>";

print "<h6>user: $map_query_string{'userName'} </h6>";
print "<table border='1'><tr>\n";
print "<th>商品</th><th>单价</th><th>税</th><th>税后价</th><th>总价</th>\n";
print "</tr>\n";
print "<tr>\n";
print "<td>Four 100-watt light bulbs</td><td>$price_commodity[0]</td><td>$tax_commodity[0]</td><td>$price_of_tax[0]</td><td rowspan='4'>$total_commoditys</td>\n";
print "</tr>\n";
print "<tr>\n";
print "<td>Eight 100-watt light bulbs</td><td>$price_commodity[1]</td><td>$tax_commodity[1]</td><td>$price_of_tax[1]</td>";
print "</tr>\n";
print "<tr>\n";
print "<td>Four 100-watt long-life light bulbs</td><td>$price_commodity[2]</td><td>$tax_commodity[2]</td><td>$price_of_tax[2]</td>";
print "</tr>\n";
print "<tr>\n";
print "<td>Eight 100-watt long-life light bulbs</td><td>$price_commodity[3]</td><td>$tax_commodity[3]</td><td>$price_of_tax[3]</td>";
print "</tr>\n";
print "</table>\n";

print "<h6>pay way is $map_query_string{'payWays'}</h6>\n";
print "<h6>total-commoditys: $total_commoditys</h6>\n";

print "</body></html>\n";