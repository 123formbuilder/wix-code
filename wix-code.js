/*
 * This code is created by 123FormBuilder 
 * It is experimental code, created in order to push form submissions from 123FormBuilder to Wix Code
 * For support inquiries, feedback, suggestions, please contact us at: wixcode@123formbuilder.com
 *
 * https://github.com/123formbuilder/wix-code
 *
 */

import wixData from 'wix-data';
import wixLocation from 'wix-location';

$w.onReady(function () {
		
	let path = wixLocation.path;
	let query = wixLocation.query;	
	
	let collectionName = 'Default';
	if ("collection" in query) {
		collectionName = query['collection'];
	}
	
	if ("data" in query) {
		let obj = JSON.parse(atob(query['data']));
		console.log('Sending 123FormBuilder submitted data to WixCode');		
		wixData.insert(collectionName, obj);	
	}
	else {
		console.log('No submission data received from 123FormBuilder');		
	}		
});