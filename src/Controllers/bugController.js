import bugModel from '../Model/bugModel';

export function retrieveBugs() {
    let data = [];

    data.push(new bugModel({
        _id: 321654,
        name: "Crash on load",
        details: "Crashes after 3 seconds",
        steps: "Open app and it crashes",
        version: "v0.0.1",
        assigned: "Dan Yell",
        creator: "John Doe",
        priority: 1,
        time: "13:03:02",
    }));
    data.push(new bugModel({
        _id: 321654,
        name: "Won't load",
        details: "Crashes after 2 seconds",
        steps: "Open app and it will crash",
        version: "v0.0.1",
        assigned: "Jane Dough",
        creator: "John Doe",
        priority: 3,
        time: "16:24:39",
    }));

    let sorted = data.sort((a, b) => { return a.priority - b.priority });
    return sorted;
}