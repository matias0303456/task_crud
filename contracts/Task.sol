// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

import "hardhat/console.sol";

contract Task {
    struct TaskType {
        uint256 index;
        string content;
        bool done;
    }

    TaskType[] private tasks;

    function getTasks() public view returns (TaskType[] memory) {
        return tasks;
    }

    function getTaskByIndex(
        uint256 _index
    ) public view returns (TaskType memory) {
        require(_index < tasks.length, "Index out of bounds.");
        return tasks[_index];
    }

    function addTask(string memory _content) public {
        TaskType memory newTask = TaskType({
            index: tasks.length,
            content: _content,
            done: false
        });
        console.log(newTask.index, newTask.content, newTask.done);
        tasks.push(newTask);
    }

    function updateTask(
        uint256 _index,
        string memory _content,
        bool _done
    ) public {
        require(_index < tasks.length, "Index out of bounds.");
        tasks[_index].content = _content;
        tasks[_index].done = _done;
    }

    function deleteTask(uint256 _index) public {
        require(_index < tasks.length, "Index out of bounds.");
        for (uint256 i = _index; i < tasks.length - 1; i++) {
            tasks[i] = tasks[i + 1];
        }
        tasks.pop();
    }
}
