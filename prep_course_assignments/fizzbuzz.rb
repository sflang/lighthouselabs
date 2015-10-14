1.upto(100) do |i|
	if i%3 == 0 && i%5 == 0
		puts "FizzBuzz"
	elsif i%3 == 0
		puts "Fizz"
	else 
		i%5 == 0 ? (puts "Buzz") : (puts i)
	end
end