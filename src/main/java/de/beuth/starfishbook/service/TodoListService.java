package de.beuth.starfishbook.service;

import java.util.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import de.beuth.starfishbook.model.TodoList;
import de.beuth.starfishbook.repository.TodoListRepository;

@Service
public class TodoListService {

    public final TodoListRepository todoListRepository;

    @Autowired
    public TodoListService(TodoListRepository todoListRepository) {
        this.todoListRepository = todoListRepository;
    }

    public List<TodoList> getTodoList() {
        List<TodoList> allTodos = new ArrayList<>();
        todoListRepository.findAll().forEach(allTodos::add);
        return allTodos;
    }

    public TodoList findTodoListById(Long id) {
        return todoListRepository.findTodoListById(id);
    }

    public List<TodoList> findByFinished(Boolean finished) {
        return todoListRepository.findByFinished(finished);
    }

    public List<TodoList> findByTodosId(Long todoId) {
        return todoListRepository.findByTodosId(todoId);
    }

    public TodoList findByIdAndTodosId(Long id, Long todoId) {
        return todoListRepository.findByIdAndTodosId(id, todoId);

    }

    public TodoList save(TodoList request) {
        return this.todoListRepository.save(request);
    }

    public TodoList updateTodo(Long id, TodoList request) {
        TodoList update = todoListRepository.findTodoListById(id);
        update.setText(request.getText());
        update.setFinished(request.isFinished());
        update.setTodos(request.getTodos());
        return this.todoListRepository.save(update);
    }

    public Boolean delete(Long id) {
        this.todoListRepository.deleteById(id);
        return this.todoListRepository.existsById(id);
    }

    public TodoList deleteTodo(Long id, Long todoId) {
        TodoList todolist = this.todoListRepository.findByIdAndTodosId(id, todoId);
        this.todoListRepository.delete(todolist);
        return todolist;
    }
}
