import React from 'react';
import TeacherList from '../TeacherList/TeacherList';
import ChildrenList from '../ChildrenList/ChildrenList';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function AdminPage() {
  return (
    <div className="container">
      <p style={{color: "white"}}>Daycare Roster</p>
      <TeacherList />
      <ChildrenList />
    </div>
  );
}

export default AdminPage;
