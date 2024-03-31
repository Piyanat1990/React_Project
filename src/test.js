const test = [
    { id: 1, title: "code programing" },
    { id: 2, title: "make manual" },

];


const updateTask = test.map((item) => {
    // รายการใดมีรหัสตรงกับรหัสเเก้ไข
    if (item.id === 1) {
        return {...item, title: "blasso", test: "xxx" }
    }
    return item;
})


console.log(updateTask)