import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

import Todo from "../todo/TodoClass";
import Container from "../../layout/ContainerClass";
import Item from "../../layout/ItemClass";

const StyledTodoPlaceholderText = styled.div`
  font-family: "Homemade Apple", sans-serif;
  font-size: 24px;
  text-align: center;
  padding: 16px;
`;

const StyledAddButtonPlaceholderText = styled.span`
  font-family: "Bungee", sans-serif;
  font-size: 24px;
`;

const StyledSeeAboutPagePlaceholderText = styled.span`
  font-family: "Bungee", sans-serif;
  font-size: 18px;
`;

class Todos extends React.Component {
  render() {
    const { todos, completeTodo } = this.props;
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
              <StyledTodoPlaceholderText>
                {[
                  "Add todo by clicking ",
                  <StyledAddButtonPlaceholderText>
                    Add
                  </StyledAddButtonPlaceholderText>,
                  " button on the top of left corner"
                ]}
              </StyledTodoPlaceholderText>
              <Container justifyContent="center">
                <Item>
                  <StyledSeeAboutPagePlaceholderText>
                    <Link to="/about">Or visit about page</Link>
                  </StyledSeeAboutPagePlaceholderText>
                </Item>
              </Container>
            </React.Fragment>
          )}
        </Container>
      </section>
    );
  }

  static propTypes = {
    todos: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string
      })
    ),
    completeTodo: PropTypes.func.isRequired
  };
}

export default Todos;
