import React from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import PropTypes from "prop-types";

class CoursesPage extends React.Component {
  //constructor and super is removed to have less coding
  state = {
    course: {
      title: "",
    },
  };

  //use arrow function to avoid use this keyword that binds to class instead of the calling function
  handleChange = (event) => {
    const course = { ...this.state.course, title: event.target.value };
    this.setState({ course }); //used to update components' state and so forth re-render. and OBJECT shorthand syntax is used.
  };

  //handleSubmit is defined at form level instead of input submit inside to give an 'enter' submit possible
  handleSubmit = (event) => {
    //to prevent default browser behaviour, in this case, refreshing the page right after submit.
    event.preventDefault();
    this.props.dispatch(courseActions.createCourse(this.state.course));
    //alert(this.state.course.title);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Courses</h2>
        <h3>Add Course</h3>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.course.title}
        />
        <input type="submit" value="Save" />
      </form>
    );
  }
}

//required cause props.dispatch is created by omitting the 2nd parameter at connect function below and used handleSubmit method above
CoursesPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

//determines what part of the state exposed to component
function mapStateToProps(state) {
  return {
    courses: state.courses,
  };
}

//when omitting mapDispatchToProps function, connect creates a dispatch at component prop => props.dispatch
export default connect(mapStateToProps)(CoursesPage); //call the return from connect function with parameter CoursePage.
