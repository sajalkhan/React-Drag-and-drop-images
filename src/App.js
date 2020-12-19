import React, { useEffect } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import loading from "./assets/images/loader.gif";

import ImageShape from "./component/imageShap";
import "./assets/styles/App.scss";

import Column from "./component/column";
import MoveLeftItems from "./component/move_left_items";
import MoveRightItems from "./component/move_right_items";

//Redux connect
import { connect } from "react-redux";
import { loadData, moveleftCard } from "./redux/column_1/left_column_action";
import { moveRightCard } from "./redux/column_2/right_column_action";

const App = ({ loadData, load_left_column, load_right_column }) => {
  useEffect(() => {
    if (load_left_column.loading) loadData();
  }, [loadData, load_left_column]);

  // if (load_left_column.loading) return null;

  const returnItemsForLeftColumn = () => {
    return (
      load_left_column.images &&
      load_left_column.images?.map((item, index) => (
        <MoveLeftItems
          key={item.char_id}
          name={item.name}
          image={item.img}
          currentColumnName={"Start"}
          index={index}
          moveleftCard={moveleftCard}
        />
      ))
    );
  };

  const returnItemsForRightColumn = () => {
    return (
      load_right_column.images &&
      load_right_column.images?.map((item, index) => (
        <MoveRightItems
          key={item.char_id}
          name={item.name}
          image={item.img}
          currentColumnName={"In Progress"}
          index={index}
          moveRightCard={moveRightCard}
        />
      ))
    );
  };

  return (
    <div className="container">
      {load_left_column.loading ? (
        <img src={loading} alt="" className="loaderStyle" />
      ) : (
        <DndProvider backend={HTML5Backend}>
          <Column title="Start" className="column do-it-column">
            <span style={{ backgroundColor: "#ffff", marginTop: 10 }}>
              Media Panel
            </span>
            {returnItemsForLeftColumn("Start")}
          </Column>
          <Column title="In Progress" className="column in-progress-column">
            {load_right_column.loading ? <ImageShape /> : null}
            {returnItemsForRightColumn("In Progress")}
          </Column>
        </DndProvider>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    load_left_column: state.LoadleftColumnImageState,
    load_right_column: state.LoadrightColumnImageState,
  };
};

export default connect(mapStateToProps, {
  loadData,
  moveleftCard,
  moveRightCard,
})(App);
