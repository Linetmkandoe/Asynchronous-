function delay(time){
    return new Promise(resolve=>setTimeout(resolve,time));
}
async function logAfterDelay(message, delayTime){
    await delay(delayTime);
    console.log(message);
}
logAfterDelay("Shoping hours!",5000);


async function getUserData(id){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(`user data for ID ${id}`);
        },6000);
    });
}
async function fetchLogUser(userIds){
    for(const id of userIds){
        const userData = await getUserData(id);
        console.log(userData);
    }
}

const usersIds = [1,3,4,7,10];
fetchLogUser(usersIds).then(()=>
console.log(`All the users data has been checked.`));

async function performTask(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(`The task was successfully`);
        },2000);

    })
}

function unstableTask(taskName, failureProbability) {
   
    const randomNumber = Math.random();
    if (randomNumber > failureProbability) {
        return Promise.resolve(`Task ${taskName} succeeded`);
    }
    else {
        return Promise.reject(`Task ${taskName} failed.`);
    }
}


function executeWithRetry(taskName, retries, failureProbability) {
    let attempts = 0;
    let success = false;

}