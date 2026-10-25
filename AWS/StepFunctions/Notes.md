Q.What is step function
    - AWS step functions is a serverless function orchestratort that makes it easy to sequence AWS lamda functions and multiple AWS services into business-critical applications.

Q.What are the aws step functions?
    - Managed workflow service with centrilized state.
    - create visually using workflow studio or via IAC.
    - Flow constructs to control the behaviour of your workflow.
    - Use 200+ AWS service integration to perform tasks.
Q.Use cases?
    - Microservice co-ordination.
    - Large scale data processing.

Q.Advantages and disadvantages?
    - Features
        - chaining,if else workflow
        - We can pause and resume step function (if there is fraud detention in order until that order check from customer service we can pause step function and later we can resume the step functions) so human interactions will be there to handle services.
        - Paraller running multiple tasks and give result at once.
Q.who uses step functions?
    - Simplify implementation by writing workflows insted of code

Q.States of step functions
1.Task
3.Wait
5.Parallel
4.Choice
2.Pass
5.Succeed
6.Fail
7.Map
6.Try
7.Catch

Service Integration with Callback pattern
