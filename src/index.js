module.exports = function check(str, bracketsConfig) {

    if (str.length % 2 !== 0) {
        return false;
    }

    if (str[0] === ')' || str[0] === ']' || str[0] === '}') {
        return false;
    }

    let stack = [];

    let brackets = '';
    let isThereStick = false;

    for (let i = 0; i < bracketsConfig.length; i++) {
        for (let j = 0; j < bracketsConfig[i].length; j++) {
            if (bracketsConfig[i][j] === '|') {
                isThereStick = true;
            }
            brackets += bracketsConfig[i][j];
        }
    }

    console.log(brackets);

    for (let bracket of str) {
        if (isThereStick) {
            if (bracket !== '|') {
                let bracketIndex = brackets.indexOf(bracket);

                if (bracketIndex === -1) {
                    continue;
                }

                if (bracketIndex % 2 === 0) {
                    stack.push(bracketIndex + 1);
                }
                else {
                    let br = stack.pop();
                    if (br !== bracketIndex) {
                        return false;
                    }
                }
            }
            else {
                let br = stack.pop();
                if (br === '|') {
                    continue;
                }
                else {
                    if (br !== undefined) {
                        stack.push(br);
                    }
                    
                    stack.push('|');
                }
            }
        }
        else {
            if (bracket !== '8' && bracket !== '7') {
                let bracketIndex = brackets.indexOf(bracket);

                if (bracketIndex === -1) {
                    continue;
                }

                if (bracketIndex % 2 === 0) {
                    stack.push(bracketIndex + 1);
                }
                else {
                    if (stack.pop() !== bracketIndex) {
                        return false;
                    }
                }
            }
            else {
                if (bracket === '8') {
                    let br = stack.pop();
                    if (br === '8') {
                        continue;
                    }
                    else {
                        if (br !== undefined) {
                            stack.push(br);
                        }

                        stack.push('8');
                    }
                }
                else {
                    let br = stack.pop();
                    if (br === '7') {
                        continue;
                    }
                    else {
                        if (br !== undefined) {
                            stack.push(br);
                        }

                        stack.push('7');
                    }
                }
            }
        }
    }

    return stack.length === 0;
}
