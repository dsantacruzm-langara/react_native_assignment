// import { useState } from "react";

// const Dropdown = ({ dropDownValues, fetchData }) => {
//   const [service, setService] = useState("");

//   console.log(dropDownValues);

//   const onSelection = async (selectedValue) => {
//     setService(selectedValue);
//     await fetchData(service);
//   };

//   return (
//     <Center>
//       <Box maxW="300">
//         <Select
//           selectedValue={service}
//           minWidth="200"
//           accessibilityLabel="Filter by"
//           placeholder="Filter by"
//           _selectedItem={{
//             bg: "teal.600",
//             endIcon: <CheckIcon size="5" />,
//           }}
//           mt={1}
//           onValueChange={(selectedValue) => onSelection(selectedValue)}
//         >
//           <Select.Item label={dropDownValues[0]} value={dropDownValues[0]} />
//           <Select.Item label={dropDownValues[1]} value={dropDownValues[1]} />
//           <Select.Item label={dropDownValues[2]} value={dropDownValues[2]} />
//         </Select>
//       </Box>
//     </Center>
//   );
// };

// export default Dropdown;
