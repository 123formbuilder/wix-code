/*
 * This code is created by 123FormBuilder 
 * It is experimental code, created in order to push form submissions from 123FormBuilder to Wix Code
 * For support inquiries, feedback, suggestions, please contact us at: wixcode@123formbuilder.com
 *
 * https://github.com/123formbuilder/wix-code
 *
 */

import {created, badRequest} from 'wix-http-functions';
import wixData from 'wix-data';

export function post_submit123FormData( request ) 
{
    let responseOptions = {
        "headers": {
            "Content-Type": "application/json"
        },
        "body" : null
    };

    return request.body.json()
    .then( ( body ) => 
    {
        if ( body.collection.indexOf('123FormBuilder') === -1 ) {
            throw new Error( 'Invalid Request Source.' );
        }

        return wixData.insert( body.collection, body.data );   
    } )
    .then( ( result ) => 
    {
        responseOptions.body = result;
        return created( responseOptions );
    } )
    .catch( ( error ) => 
    {
        responseOptions.body = JSON.stringify(error.message);
        return badRequest( responseOptions );
    } );
        
}