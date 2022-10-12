/*Odd Sum

Problem Statement

 

Antonio got an array A consisting of N integers as his christmas present.

 

Antonio likes an array if and only if the sum of all elements of that array is odd. Like Antonio likes arrays [4,1,4], [2,2,1] etc. but not arrays [4,4], [2,6,2] etc.

 

Now to make array A of his likeness he can perform the belows operations on it :

 

Operation 1:
Remove exactly one element from the array.
Operation 2:
Divide every element of the array by 2.
 

Given array A, print the minimum number of above operations required to make array A of Antonio’s likeness(i.e. To make the sum of all elements of array A odd).

 

 

 

Input Format

First line contains a single integer denoting N.
Next line contains N space separated integers denoting the elements of array A.
 

Output Format

Print the minimum number of above operations required to make array A of Antonio’s likeness(i.e. To make the sum of all elements of array A odd).
 

Constraints

1<=N<=10^5
1<=Ai<=10^9
 

 

Sample Input 1

3

6 4 10

 

 

Sample Output 1

2

 

 

Explanation of Sample 1

 

One can perform the operations as :

 

First perform operation 1 and remove the first element of the array. Array A becomes = [4 10].
Then perform the second operation and divide each element of the array by 2. A becomes = [2 5].
Now Antonio likes array [2 5] because the sum of all elements of this array is 7, which is odd.

 

Things to Note for the Candidate:

 

 You can use your own IDE like Visual Studio Code, Eclipse, or any other IDE that you are comfortable with to build your solution code.

The IDE provided on the platform is purely for submission. Avoid using the IDE for coding out the solution.

Test against any custom input in your own IDE. In the IDE provided on the platform, you cannot pass custom test cases and see the output.

Use standard input and standard output in your program for the IDE to run the test cases smoothly against your code. We are giving a sample problem statement along with a solution that will pass the test cases in the IDE. - Sample Problem Statement (Right Click and Open in New Tab to view.) */

2nd question

/*Question Name: Police Of Berland
Problem Statement



Today is Christmas eve and the citizens of Berland are in a mood to party. But not every citizen can party because some of them are engineers and they have to go to work the next morning.



The city of Berland has N houses lined in a row from 1 to N. You are given an array A. If Ai is 1, then an engineer lives in the ith house, else if Ai is 0, then a non-engineer lives in the ith house.



All non-engineers are playing Christmas songs in high volume. An engineer in the ith house can’t sleep if both of its neighbors are non-engineers and are playing songs.



More specifically if 1<i<N, Ai-1 = 0, Ai = 1, Ai+1 = 0, then the engineer in the ith house can’t sleep because of loud music.



The city of Berland cares for its engineers as they are the building blocks of a nation. So they want their engineers to sleep well on Christmas eve and come to work the next morning.



For this, the Police department of Berland has got the task to stop some of the citizens from playing music. But the police wants to bother as few citizens as possible and has come to you for help.



Given array A, print the minimum number of citizens whom the police must intervene from playing music so that none of the engineers is disturbed.





Input Format



First line contains a single integer denoting N.
Next line contains N space separated integers. If ith of these integers is 1 then an engineer lives in the ith house, else if it is 0, then a non-engineer lives in the ith house.




Output Format



Print the minimum number of citizens whom the police must intervene from playing music so that none of the engineers is disturbed.


Constraints



3<=N<=105
Ai is either 0 or 1.


Sample Input 1



6

0 0 1 0 1 0



Sample Output 1



1



Explanation of Sample 1



Police can intervene with the 4th citizen to turn off the music. This way none of the engineers get disturberd.



Things to Note for the Candidate :

 

You can use your own IDE like Visual Studio Code, Eclipse, or any other IDE that you are comfortable with to build your solution code.
The IDE provided on the platform is purely for submission. Avoid using the IDE for coding out the solution.
Test against any custom input in your own IDE. In the IDE provided on the platform, you cannot pass custom test cases and see the output. 
Use standard input and standard output in your program for the IDE to run the test cases smoothly against your code. We are giving a sample problem statement along with a solution that will pass the test cases in the IDE. - Sample Problem Statement  (Right Click and Open in New Tab to view.)*/