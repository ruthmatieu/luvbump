import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                    title: 'Baby',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 1,
                    link: 'hats'
                },
                {
                    title: 'Toddler',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: 2,
                    link: ''
                },
                {
                    title: 'Kids',
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id: 3,
                    link: ''
                },
                {
                    title: 'Ryuk',
                    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    id: 4,
                    link: ''
                },
                {
                    title: 'Rem',
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    id: 5
                }
            ]
        }
    }

    render() {
        return (
            <div className="directory-menu">
                {
                    // we took out id separately and spread in the rest of the data
                    this.state.sections.map(({ id, ...otherSectionProps }) => (
                        <MenuItem key={id} {...otherSectionProps}/>
                    ))
                }
            </div>
        )
    }
}

export default Directory