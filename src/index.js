import { useEffect } from "react";
import CMS from "netlify-cms-app";
import React from "react";

<script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>

const Preview = (props) => {
  const entry = props.entry;
  const title = entry.getIn(["data", "title"]) || "";

  return (
    <>
      <h1>{props.widgetFor("title")}</h1>
      {props.widgetFor("body")}
    </>
  );
};

const Admin = () => {
  useEffect(() => {
    CMS.init();
    CMS.registerPreviewTemplate("blog", Preview);
  }, []);

  return (
    <>
    </>
  );
};

export default Admin;