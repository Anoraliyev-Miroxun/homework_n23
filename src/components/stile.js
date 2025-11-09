import styled from "@emotion/styled";
import { Color } from "../config/config-color.js";
import { IconButton } from "@mui/material";

export const Searchinput = styled.input`
  flex-grow: 1;  
  padding-top: 16px;
  padding-bottom: 16px;
  border: none;
  outline: none;
  border-bottom: 2px solid rgba(0, 0, 0, 0.5);
  width: 100%;
  &:focus {
    border-color: ${Color.primary};
  }
`;

export const CustomIconButton = styled(IconButton)`

  right: 0;
  bottom: 11px;

`;
export const CustomButton = styled(IconButton)`
  &:hover {
    color: ${Color.primary};
  }
`;