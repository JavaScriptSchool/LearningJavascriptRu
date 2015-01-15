var iterator = a.entries();
while (!(val = iterator.next()).done)
    console.log(val.value[2]);