import React from 'react';
import styled from 'styled-components';

const FooterSpan = styled.span`
padding-top: 10px;
padding-bottom: 10px;
font-size: 13px;
text-align: center;
background-color: #f5f6fa;
`;

const Link = styled.a`
color: #c5515c;
text-decoration: solid;
`;

export default function Footer() {
    return <FooterSpan> A project by{" "}
    <Link href="https://twitter.com/Raathigesh" target="_blank">
      Raathigeshan
    </Link></FooterSpan>
}