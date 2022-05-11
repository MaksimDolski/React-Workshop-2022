import { Link } from "react-router-dom";

import { Collapse, Nav, NavbarBrand, NavItem, NavLink } from "reactstrap";

import { routes } from "routes";

import { CreateSidebarLinks, SidebarToggler } from ".";

export const ScrollBarContent = ({ logo, collapseState, setCollapseState }) => {
  let navbarBrandProps;

  if (logo && logo.innerLink) {
    navbarBrandProps = {
      to: logo.innerLink,
      tag: Link,
    };
  } else if (logo && logo.outerLink) {
    navbarBrandProps = {
      href: logo.outerLink,
      target: "_blank",
    };
  }

  return (
    <div className="scrollbar-inner">
      <div className="sidenav-header d-flex align-items-center">
        {logo ? (
          <NavbarBrand {...navbarBrandProps}>
            <img alt={logo.imgAlt} className="navbar-brand-img" src={logo.imgSrc} />
          </NavbarBrand>
        ) : null}
        <SidebarToggler />
      </div>
      <div className="navbar-inner">
        <Collapse navbar isOpen={true}>
          <Nav navbar>
            <CreateSidebarLinks
              routes={routes}
              collapseState={collapseState}
              setCollapseState={setCollapseState}
            />
          </Nav>

          <hr className="my-3" />
          <h6 className="navbar-heading p-0 text-muted">
            <span className="docs-normal">Other Examples</span>
            <span className="docs-mini">CT</span>
          </h6>
          <Nav className="mb-md-3" navbar>
            <NavItem>
              <NavLink
                href="https://jobs.kuehne-nagel.com/global/en/it-jobs-tallinn"
                target="_blank"
              >
                <i className="ni ni-palette" />
                <span className="nav-link-text">K+N ITC Tallinn</span>
              </NavLink>
            </NavItem>
          </Nav>

          <hr className="my-3" />
          <h6 className="navbar-heading p-0 text-muted">
            <span className="docs-normal">Support</span>
            <span className="docs-mini">D</span>
          </h6>
        </Collapse>
      </div>
    </div>
  );
};
