module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  if(item.enhancement === 20){
    return { ...item }
  }else {
    return {...item, enhancement: item.enhancement + 1}
  }
}

function fail(item) {
  if(item.enhancement < 15){
    return {...item, durability: item.durability - 5}
  }
  if(item.enhancement >= 15) {
    if (item.enhancement > 16) {
      return {
        ...item,
        durability: item.durability - 10,
        enhancement: item.enhancement - 1,
      };
    } else {
      return { ...item, durability: item.durability - 10 };
    }
  }
}

function repair(item) {
  return { ...item, durability: item.durability = 100 };
}

function get(item) {
  if(item.enhancement === 0){
    return { ...item }
  }
  // if(item.name > 0){
  //   return {...item, name: item.name}
  // }
}
