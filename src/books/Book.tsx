import React from "react";
import { ListItem, ListItemText } from "@material-ui/core";

interface BookProps {
    author: string;
    title: string;
}

export const Book = ({author, title}: BookProps) => (
    <>
        <ListItem key={title} divider={true}>
            <ListItemText>
                <p><span className={"book"}> Title: </span> <span> {title} </span></p>
                <p><span className={"book"} >  Author:</span> <span> {author} </span></p>
            </ListItemText>
        </ListItem>
    </>
);
