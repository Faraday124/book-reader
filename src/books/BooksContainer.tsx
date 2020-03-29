import React from 'react';
import data from '../resources/books';
import { Book } from "./Book";
import { List, Paper, Divider } from "@material-ui/core";


export const BooksContainer = () => {

    const getBookComponent = (author: string, title: string) => <Book author={author} title={title} />;
    return (
        <>
            <h1 className={"title"}>Book history journal</h1>

            {data.books.map(data => (
                <>
                        <div className={"book-container"}>
                    <Paper elevation={3} className={"paper-container"}>
                        <h2 className={"book"}>
                            <i className="fas fa-book"></i>
                            {data.year}
                        </h2>
                        <Divider />
                            <List>
                                {data.list.map(book => getBookComponent(book.author, book.title))}
                            </List>
                    </Paper>
                        </div>
                </>
            ))}
        </>
    );
};
