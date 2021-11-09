import React from "react";
import Link from "@mui/material/Link";

// const useStyles = makeStyles({
// 	root: {
// 		display: 'flex',
// 		color: '#90914',
// 		width: '150px',
// 		fontSize: 'small',
// 		bottom: '0',
// 		position: 'absolute',
// 		padding: '1rem',
// 		justifyContent: 'space-between',
// 	},
// });
export default function Footer() {
  return (
    <div>
      <Link component="button">Link</Link>
      <Link component="button">Terms</Link>
      <Link component="button">Privacy</Link>
    </div>
  );
}
