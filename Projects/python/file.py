# to do list
import sqlite3 as sql
todo_list = []

curse = sql.connect('data.db')
cur = curse.cursor()
def add_task(task):
    """Add a task to the to-do list."""
    todo_list.append(task)
    cur.execute(f'insert into todo (task) values ("{task}")')

    print(f'Task "{task}" added to the list.')
def remove_task(task):
    """Remove a task from the to-do list."""
    try:
        todo_list.remove(task)
        print(f'Task "{task}" removed from the list.')
    except ValueError:
        print(f'Task "{task}" not found in the list.')
def view_tasks():
    """View all tasks in the to-do list."""
    e = (cur.execute('SELECT * FROM todo'))
    print(e)
    table = cur.fetchall()
    print(table)
       
   
# for i in range(3):
#     inp = input("Enter a task to add: ")
#     add_task(inp)

view_tasks()

curse.commit()
