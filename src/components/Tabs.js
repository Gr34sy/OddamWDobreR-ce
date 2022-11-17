import React from "react";
import { useState } from "react";
import { CollectPagination } from "./CollectPagination";
import { FundationPagination } from "./FundationPagination";
import { OrganizationPagination } from "./OrganizationPagination";

export function Tabs(){
    const [toggleTabs, setToggleTabs] = useState('1');

    function handleTabsChange(e){
        e.preventDefault();
        setToggleTabs(e.target.getAttribute("data-id"))
    }

    return(
        <div className="tabs-container">
            <div className="tabs__menu">
                <div className={ toggleTabs === '1' ? "tabs tabs--active" : "tabs"} onClick={handleTabsChange} data-id="1">
                    Fundacjom
                </div>

                <div className={ toggleTabs === '2' ? "tabs tabs--active" : "tabs"} onClick={handleTabsChange} data-id="2">
                    Organizacjom pozarządowym
                </div>

                <div className={ toggleTabs === '3' ? "tabs tabs--active" : "tabs"} onClick={handleTabsChange} data-id="3">
                    Lokalnym zbiórkom
                </div>
            </div>

            <div className="tabs__contents">
                <div className={ toggleTabs === '1' ? "content content--active" : "content"}>
                    <FundationPagination/>
                </div>

                <div className={ toggleTabs === '2' ? "content content--active" : "content"}>
                   <OrganizationPagination/>
                </div>

                <div className={ toggleTabs === '3' ? "content content--active" : "content"}>
                    <CollectPagination/>
                </div>

            </div>
        </div>
    )
}