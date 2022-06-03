import BugModel from '../Models/bugModel';

export function retrieveBugs() {
    let data = [];

    data.push(new BugModel({
        _id: 321654,
        bugname: "Crash on load",
        details: "Crashes after 3 seconds",
        steps: "Open app and it crashes",
        version: "v0.0.1",
        assigned: "Gerald Bullard Jr",
        creator: "Dan Yell",
        priority: 1,
        time: "13:03:02",
    }));
    data.push(new BugModel({
        _id: 321655,
        bugname: "Loads but freezes",
        details: "Freezes after loading",
        steps: "Open app and it will freeze",
        version: "v0.0.1",
        assigned: "Gerald Bullard Jr",
        creator: "John Doe",
        priority: 2,
        time: "16:24:39",
    }));
    data.push(new BugModel({
        _id: 321656,
        bugname: "Won't load",
        details: "Crashes after 2 seconds",
        steps: "Open app and it will crash",
        version: "v0.0.1",
        assigned: "Gerald Bullard Jr",
        creator: "Jane Dough",
        priority: 3,
        time: "16:24:39",
    }));

    let sorted = data.sort((a, b) => { return a.priority - b.priority });
    return sorted;
}