import React from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

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
    //1) manual dispatch when omitting mapDispatchToProps() at connect()
    //this.props.dispatch(courseActions.createCourse(this.state.course));
    //2
    //this.props.createCourse(this.state.course);
    //3
    this.props.actions.createCourse(this.state.course);
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
        {this.props.courses.map((course) => (
          <div key={course.title}>{course.title}</div>
        ))}
      </form>
    );
  }
}

//required cause props.dispatch is created by omitting the 2nd parameter at connect function below and used handleSubmit method above
CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  //dispatch: PropTypes.func.isRequired, // 2)replaced by the dispatch function returned in mapDispatchToProps()
  //createCourse: PropTypes.func.isRequired, // 3)replaced due to bingActionCreators
  actions: PropTypes.object.isRequired,
};

//determines what part of the state exposed to component. after being executed, coursePage is connected to the list of courses in React store
function mapStateToProps(state) {
  return {
    courses: state.courses,
  };
}

//defines dispatch function with which action(s) to expose to .props
function mapDispatchToProps(dispatch) {
  return {
    //createCourse: (course) => dispatch(courseActions.createCourse(course)),
    actions: bindActionCreators(courseActions, dispatch), // see comments for bindActionCreators for more info. // passing in all course Actions and no need to change later
  };
}

//4 mapDispatchToProps can be defined as an object
//const mapDispatchToProps = {
//  createCourse: courseActions.createCourse
//}

//when omitting mapDispatchToProps function, connect creates a dispatch at component's prop => props.dispatch
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage); //call the return from connect function with parameter CoursePage.
