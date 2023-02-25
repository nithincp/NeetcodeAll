var uniqueEmails = function(emails){

    let hashSet = new Set()

    for(const email of emails){
        let splitEmail = email.split('@')
        let local = splitEmail[0]
        let domain = splitEmail[1]
        local = local.split('+')[0]
        local = local.replace(/\./g,'')
        const emailToAdd = local + '@' + domain

        hashSet.add(emailToAdd)
    }

    return hashSet.size
}