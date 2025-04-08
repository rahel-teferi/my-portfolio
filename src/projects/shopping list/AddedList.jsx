import react from "react";
import { TableFooter } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

export const AddedList = ({ data, onDeleteItem, onMoveUp, onMoveDown }) => {
  return (
    <>
      {data.length > 0 ? (
        <Paper
          sx={{
            width: "100%",
            overflow: "hidden",
            textAlign: "left",
            // padding: "10px 25px",
            // marginTop: "0",
            height: "80vh",
          }}
        >
          <TableContainer
            sx={{ maxHeight: "100%", margin: "auto", padding: "0" }}
          >
            <Table
              stickyHeader
              aria-label="sticky table"
              style={{
                position: "relative",
                top: 0,
                margin: 0,
                padding: "0 10px",
              }}
            >
              <TableHead
                style={{
                  position: "sticky",
                  top: "0",
                  zIndex: "1",
                  backgroundColor: "#000",
                  color: "#fff",
                }}
              >
                <TableRow>
                  <td style={{ padding: "20px" }}>Id</td>
                  <td>Item</td>
                  <td>Delete</td>
                  <td>Move up</td>
                  <td>Move down</td>
                </TableRow>
              </TableHead>
              <TableBody style={{ maxHeight: "100%" }}>
                {data.map((item, index) => (
                  <TableRow key={index}>
                    <>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          textAlign: "left",
                          paddingLeft: "0",
                        }}
                      >
                        {item}
                      </TableCell>
                      <TableCell>
                        <button
                          type="button"
                          onClick={() => {
                            onDeleteItem(index);
                          }}
                        >
                          X
                        </button>
                      </TableCell>
                      <TableCell>
                        <button type="button" onClick={() => onMoveUp(index)}>
                          Up
                        </button>
                      </TableCell>
                      <TableCell>
                        <button type="button" onClick={() => onMoveDown(index)}>
                          Down
                        </button>
                      </TableCell>
                    </>
                  </TableRow>
                ))}
                {/* );
                  })} */}
              </TableBody>
              <TableFooter
                style={{
                  position: "sticky",
                  bottom: "0",
                  zIndex: "1",
                  backgroundColor: "#000",
                  color: "#fff",
                }}
              >
                <tr>
                  <td colSpan="5" style={{ padding: "20px" }}>
                    Total items: <span>{data.length}</span>
                  </td>
                </tr>
              </TableFooter>
            </Table>
          </TableContainer>
        </Paper>
      ) : (
        <p style={{ paddingTop: "50px", minHeight: "75vh" }}>
          No items are added yet
        </p>
      )}
    </>
    // <>
    //   {data.length > 0 ? (
    //     <div style={sl}>
    //       <table
    //         style={{
    //           padding: "0 0",
    //           overflowY: "auto",
    //           position: "relative",
    //         }}
    //       >
    //         <thead
    //           style={{
    //             position: "sticky",
    //             top: "0",
    //             zIndex: "",
    //           }}
    //         >
    //           <td>Number</td>
    //           <td>Item</td>
    //           <td>Delete</td>
    //           <td>Move up</td>
    //           <td>Move down</td>
    //         </thead>
    //         <tbody
    //           style={{
    //             // maxHeight: "30vh",
    //             overflowY: "scroll",
    //           }}
    //         >
    //           {data.map((item, index) => (
    //             <tr>
    //               <td key={index}>{index + 1}</td>
    //               <td
    //                 key={index}
    //                 style={{
    //                   display: "flex",
    //                   flexWrap: "wrap",
    //                 }}
    //               >
    //                 {item}
    //               </td>
    //               <td>
    //                 <button
    //                   type="button"
    //                   onClick={() => {
    //                     onDeleteItem(index);
    //                   }}
    //                   style={{ marginLeft: "20px" }}
    //                 >
    //                   X
    //                 </button>
    //               </td>
    //               <td>
    //                 <button type="button" onClick={() => onMoveUp(index)}>
    //                   Up
    //                 </button>
    //               </td>
    //               <td>
    //                 <button type="button" onClick={() => onMoveDown(index)}>
    //                   Down
    //                 </button>
    //               </td>
    //             </tr>
    //           ))}
    //         </tbody>
    //         <tfoot
    //           style={{
    //             position: "sticky",
    //             bottom: "0",
    //             zIndex: "",
    //           }}
    //         >
    //           <tr>
    //             <td colSpan="5" style={{ paddingTop: "50px" }}>
    //               Total items: <span>{data.length}</span>
    //             </td>
    //           </tr>
    //         </tfoot>
    //       </table>
    //     </div>
    //   ) : (
    //     <p style={{ paddingTop: "50px" }}>No items are added yet</p>
    //   )}
    // </>
  );
};
