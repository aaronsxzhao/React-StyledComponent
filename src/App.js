import "./styles.css";
import React from "react";
import styled, { css } from "styled-components";

// export default function App() {

//   return (
//     <div className="App">
//       <h1>Tag</h1>
//       <h2>Start editing to see some magic happen!</h2>
//     </div>
//   );
// }
// import { Tag, Icon } from './components';

export default function App() {
  const Tag = styled.span`
    display: inline-block;
    padding: 0.5em;
    background-color: ${(props) => props.color || "red"};
    border-radius: ${(props) => props.borderRadius || "1em"};

    ${(props) =>
      props.hasIcon &&
      css`
        &:hover > img {
          filter: none;
        }
      `}
  `;

  const Icon = styled.img`
    filter: blur(6px);

    ${({ tag }) =>
      tag &&
      css`
        filter: none;
      `}
  `;
  return (
    <div>
      <p>Default Tag</p>
      <Tag>
        content
        {/* <Icon src="my-icon.png" hasTag /> */}
      </Tag>
      <p>Tag with properties</p>
      <Tag color="purple" borderRadius="100em">
        content
      </Tag>
      <p>Default Icon</p>
      <Icon src="image.png" hasTag />
      <p>Icon inside Tag</p>
      <Tag>
        <Icon src="image.png" hasTag />
        Content
      </Tag>
    </div>
  );
}
