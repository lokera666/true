import { PageHeader } from "antd";
import React from "react";

// displays a page header

export default function Header() {
  return (
    <a href="/">
      <PageHeader
        title="🏰 BG"
        /*subTitle={(
          <span>v2.3 - [<a href="https://gnosis-safe.io/app/#/safes/0x97843608a00e2bbc75ab0C1911387E002565DEDE" target="_blank"><span style={{marginRight:4}}>🔐 </span> Multisig</a>] - [<a href="https://youtu.be/aYMj00JoIug" target="_blank"><span style={{marginRight:4}}>🎥 </span> 8min speed run</a>] -  [<a href="https://dao.buidlguidl.com" target="_blank"><span style={{marginRight:4}}>🤠 </span> DAO</a>] - [<a href="https://gitcoin.co/grants/1636/buidlguidl" target="_blank"><span style={{marginRight:4}}></span>🤖  Gitcoin grant</a>]</span>
        )}*/
        style={{ cursor: "pointer" }}
      />
    </a>
  );
}
