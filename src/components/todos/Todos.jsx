/** @jsxImportSource @emotion/react */
import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

import Todo from "../todo/Todo";
import Container from "../../layout/Container";
import Item from "../../layout/Item";

import * as styles from "./todos.styles";

const Todos = ({ todos, completeTodo }) => {
  return (
    <section className="todos-component">
      <Container flexDirection="column" minHeight="500px">
        {todos.length > 0 &&
          todos.map((todo, index) => {
            return (
              <Todo
                key={index}
                text={todo.text}
                isCompleted={todo.isCompleted}
                completeTodo={completeTodo}
                index={index}
              />
            );
          })}
        {todos.length === 0 && (
          <React.Fragment>
            <div css={styles.todoPlaceholderText}>
              Add todo by clicking{" "}
              <span css={styles.addButtonPlaceholderText}>Add</span> button on
              the top left corner
            </div>
            <Container justifyContent="center">
              <Item>
                <span css={styles.seeAboutPagePlaceholderText}>
                  <Link to="/about">Or visit about page</Link>
                </span>
              </Item>
            </Container>
          </React.Fragment>
        )}
      </Container>
    </section>
  );
};

Todos.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string
    })
  ),
  completeTodo: PropTypes.func.isRequired
};

export default Todos;
