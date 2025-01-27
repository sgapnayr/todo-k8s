import { Injectable } from '@nestjs/common';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodoService {
  /*
  In memory data store for todos
  */
  private todos: Todo[] = [
    {
      id: 1,
      title: 'Learn NestJS',
      description: 'Understand NestJS basics',
      completed: false,
    },
    {
      id: 2,
      title: 'Build a CRUD app',
      description: 'Create a todo app using NestJS',
      completed: false,
    },
  ];
  /*
  Change to a DB in future.
  */

  findAll(): Todo[] {
    return this.todos;
  }

  findOne(id: number): Todo {
    const todo = this.todos.find((todo) => todo.id === id);
    if (!todo) {
      throw new Error(`Todo with id ${id} not found`);
    }
    return todo;
  }

  create(todo: Todo): Todo {
    this.todos.push(todo);
    return todo;
  }

  update(id: number, updateData: Partial<Todo>): Todo {
    const todo = this.findOne(id);
    if (todo) {
      Object.assign(todo, updateData);
      return todo;
    }
    throw new Error(`Todo with id ${id} not found`);
  }

  delete(id: number): boolean {
    const index = this.todos.findIndex((todo) => todo.id === id);
    if (index !== -1) {
      this.todos.splice(index, 1);
      return true;
    }
    return false;
  }
}
