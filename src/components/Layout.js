import React from "react";

// const useStyles = makeStyles({
// 	root: {
// 		background: 'black',
// 		width: '100%',
// 		height: '100%',
// 		color: 'white',
// 		display: 'flex',
// 		alignItems: 'center',
// 	},
// });
export default function Layout({ children }) {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
}
