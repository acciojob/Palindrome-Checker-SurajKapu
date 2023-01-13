// complete the given function

function palindrome(str){
	let left = 0;
	let right = str.length()-1;
	while (left < right) {
		let left_char = str.charAt(left)
		let right_char = str.charAt(right)
		if(left_char != right_char)
			return false
		left++
		right--
	}
	return true
}
module.exports = palindrome
