/**setTimeout() = function in js that allows you to schedule
 *                the execution of a functionafter an amount of time(ms)
 *                Times are approximate ( caries based on the workload of the JS runtime env)
   
                    setTimeout(callback,delay)

*/


function sayHello(){
    window.alert("Hello  ")
}

const t= setTimeout(sayHello,3000)


setTimeout(function(){window.alert("Hello 1")},1000)



//setTimeout(() => {window.alert("Hello 3")},10000)


//cleartimeout

clearTimeout(t)