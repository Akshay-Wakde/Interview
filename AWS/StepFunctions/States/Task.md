YT : https://www.youtube.com/watch?v=jXxKRd_9nC0&t=1464s
1.Task state have retry and catch.
Catch for catching the error and retry for if something fails we can retry it multiple times.
2.Task state will be in json format.


Wait State: (Standard Workflow)

"wait_ten_seconds" : {
    "Type":"Wait",
    "Seconds":10,
    "Next":"NextState" 
}

Parallel State : when two state wanted to execute at same time. if one of thes state in any branch fails thr parallel state failed.

Choice State :  Its Type will be choice , as per choices it will check and go for next state.

Pass State :  This will be applicable to append new attributes to the current/execution state.

Succeed State : This is successfully completed the state machine.

Fail State : Fail state machine.

Map State : Insted of one input we will get array of input.
            -  The MaxConcurrency is 0 then it will pass one after another , if it was 5 then all 5 inside shipped will be pass at once.

Callback pattern: 
    - When we are scheduling a task into SQS queue, the step functions will send task token along with the message, once that message executed like into the lamda function, after completion it will use that task token to send the message back to the state machine, where that task was successful or not so depending upon that message we can either move to the success state or failure state. and the state machine will not have to check the progress of the task , it will be the lamda who will callback.