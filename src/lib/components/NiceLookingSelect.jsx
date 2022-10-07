import React, { useState } from "react";
import styled from "styled-components";

/** Style **/
/* Arrow */
const ARROW = styled.span`
    border: solid ${props => props.styledProps.chevronsColor};
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 5px;
    &:hover {
        border-color: ${props => props.styledProps.hoverColor};
        cursor: pointer;
    }
    &.arrow-up {
        transform: rotate(-135deg);
    }
    &.arrow-down {
        transform: rotate(45deg);
    }
`;

/* Button */
const BUTTON = styled.button`
    align-items: center;
    background-color: ${props => props.styledProps.backgroundColor};
    border-color: transparent;
    border-radius: ${props => props.styledProps.borderRadius};
    color: ${props => props.styledProps.fontColor};
    display: flex;
    font-size: 18px;
    gap: 0 30px;
    justify-content: ${props => props.styledProps.centerTitle ? "center" : "space-between"};
    min-height: 50px;
    padding: 5px 10px;
    width: 100%;
    &:hover {
        color: ${props => props.styledProps.hoverColor};
        cursor: pointer;
    }
`;

/* List */
const LIST = styled.ul`
    columns: ${props => props.styledProps.columnsNumber};
    list-style: none;
    margin: auto;
    padding: 2.5px 10px 5px 10px;
    ${props => props.styledProps.centerOptions ? "text-align: center;" : ""}
`;

const LIST_ITEM = styled.li`
    color: ${props => props.styledProps.fontColor};
    margin-bottom: 15px;
    &:hover {
        color: ${props => props.styledProps.hoverColor};
        cursor: pointer;
    }
`;

/* Select */
const OPENED_SELECT = styled.div`
    background-color: ${props => props.styledProps.backgroundColor};
`;

export default function NiceLookingSelect({options, parameter}) {
    /* State */
    const [showNiceLookingSelect, setShowNiceLookingSelect] = useState(false);

    /* Select */
    const handleSelected = (event) => {
        document.querySelectorAll(`.list-item--${parameter.id}`).forEach(listItem => {
            listItem.classList.remove(`selected-item--${parameter.id}`);
        });
        event.currentTarget.classList.add(`selected-item--${parameter.id}`);
    }

    /** RETURN **/
    return (
        <div className="nice-looking-select" id={parameter.id}>
            {/* Button */}
            {
                showNiceLookingSelect === false &&
                <BUTTON id={`btn-open-select--${parameter.id}`} onClick={() => setShowNiceLookingSelect(true)} styledProps={parameter}>{parameter.title} {parameter.showChevrons === true && <ARROW className="arrow-down" styledProps={parameter} />}</BUTTON>
            }

            {/* Opened Select */}
            {
                showNiceLookingSelect === true &&
                <OPENED_SELECT id={`opened-select--${parameter.id}`} styledProps={parameter}>
                    <BUTTON id={`btn-close-select--${parameter.id}`} onClick={() => setShowNiceLookingSelect(false)} styledProps={parameter}>{parameter.title} {parameter.showChevrons === true && <ARROW className="arrow-up" styledProps={parameter} />}</BUTTON>
                    <LIST id={`list-select--${parameter.id}`} styledProps={parameter}>
                        {
                            options.map((option, index) => {
                                return <LIST_ITEM className={`list-item--${parameter.id}`} key={index} onClick={handleSelected} styledProps={parameter}>{option}</LIST_ITEM>
                            })
                        }
                    </LIST>
                </OPENED_SELECT>
            }
        </div>
    );
}