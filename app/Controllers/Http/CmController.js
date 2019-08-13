'use strict'

const CmsEntry = use('App/Models/CmsEntry')

class CmController {

  async home({view}){
    //create entry
    const entry = new CmsEntry;
    entry.page_name = 'New Name';
    entry.page_body = 'Page Body'
    entry.rank =      1;

    await entry.save();

    // fetch entries
    const entries = await CmsEntry.all();

    return view.render('index', {entries: entries.toJSON()})

  }

}

module.exports = CmController
