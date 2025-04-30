
const tasks = [
    { name: "Study", priority: 3 },
    { name: "Shop", priority: 1 },
    { name: "Call", priority: 2 }
  ];
  

  const createPrioritizer = () => {
    let callCount = 0;
    
    const prioritizeTasks = (tasks, minPriority = 1) => {
      callCount++;
      return tasks
        .filter(task => task.priority >= minPriority)
        .sort((a, b) => b.priority - a.priority);
    };
  
    const getCount = () => callCount;
    
    return { prioritizeTasks, getCount };
  };
  

  const { prioritizeTasks, getCount } = createPrioritizer();

  console.log(`Call ${getCount()}:`, prioritizeTasks(tasks, 2));
  console.log(`Call ${getCount()}:`, prioritizeTasks(tasks));