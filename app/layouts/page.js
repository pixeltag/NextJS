import React, { Fragment } from 'react'

const Page = ( { children } ) => {
    return (
        <Fragment>
            <main>{children}</main>
        </Fragment>
    )
}

export default Page;
