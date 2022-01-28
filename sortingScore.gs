/**
 * @customfunction
 */
function sortingScore(hours, dueDate, priority, done) {
  /**
   * Calculates a Final Score based on
   * -How many hours it will take to complete the task
   * -When a task is due
   * -The priority of a task
   * -If the task is done or not
   * This will be used to sort my todo list on google sheets so my most important
   * tasks are on top
   */
  //Ensures that empty
  if(typeof(dueDate)!=="object")
  {
    return -1;
  }
  let finalScore=0;
  /**
   * Makes initial final score based on the time it will take to complete a task
   */
  if(hours<=.5)
  {
    //0-10
    finalScore+=(20*hours);
  }
  else if(hours<=1)
  {
    //10-20
    finalScore+=(10+(20*(hours-.5)));
  }
  else if(hours<=2)
  {
    //20-30
    finalScore+=(20+(10*(hours-1)));
  }
  else if(hours<=5)
  {
    //30-40
    finalScore+=(30+(5*(hours-2)));
  }
  else if(hours<=10)
  {
    //40-45
    finalScore+=(40+(hours-5));
  }
  else
  {
    //50
    finalScore+=50;
  }
  /**
   * Due Date
   * -If it is past due it gets a x10 multiplier
   * -If it is due today it gets a x2 multiplier
   * -Otherwise, it gets divided by the amount of days until due
   */
  let todayDate=new Date();
  todayDate=todayDate.toLocaleDateString();
  let todayMS=new Date();
  todayMS=todayMS.getTime();
  if(todayDate===dueDate.toLocaleDateString())
  {
    finalScore*=2;
  }
  else if(dueDate.getTime()<todayMS)
  {
    finalScore*=10;
  }
  else
  {
    let days=new Date();
    days=dueDate.getTime()-todayMS;
    days/=(86400000);
    days=Math.ceil(days);
    finalScore/=days;
  }
  /**
   * Priority
   * -If "optional" x.5
   * -If "!" x1.5
   * -If "!!" x2.0
   * -If "!!!" X3.0
   */
  switch(priority)
  {
    case"optional":
    finalScore/=2;
    break;
    case "!":
    finalScore*=1.5;
    break;
    case "!!":
    finalScore*=2;
    break;
    case "!!!":
    finalScore*=3;
    break;
  }
  /**
   * If done, the priority should be 0
   */
  if(done==="Yes"||done==="yes")
  {
    finalScore=0;
  }
  return finalScore;
}
