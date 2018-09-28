module.exports = function check(str, bracketsConfig) {


let stack = [];

  let i = 0, j =0, k=0;

  let open = false, close = false;



  while(i < str.length){

  	j = 0; 

  	k = 0;

  	//поиск открывающейся скобки

	while (j < bracketsConfig.length) {

		if (str[i]==bracketsConfig[j][0]) {

			open = true;

			break;

		}

		j++;

	}

	//поиск закрывающей скобки

	while (k < bracketsConfig.length) {

		if (str[i]==bracketsConfig[k][1]) {

			close = true;

			break;

		}

		k++;

	}

	if (open & close) {

		if (stack[stack.length-1] == str[i]) {

			stack.pop();

		} else {

			stack.push(str[i]);	

		}

		i++;

		open = false;

		close = false;

		continue;

	}

	//добавляем в стек

	if (open) {

		stack.push(str[i]);

	}

	if (close && stack[stack.length-1]==bracketsConfig[k][0]) {

		stack.pop();

	}

  	i++;

  	open = false;

  	close = false;

  }





  if (stack.length == 0) {

  	return true;

  }	else {

	return false;  	

  }



}
