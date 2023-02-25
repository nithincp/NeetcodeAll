def uniqueEmails(emails):

    hashSet = set()

    for email in emails:
        local,domain = email.split('@')
        local = local.split('+')[0]
        local = local.replace('.','')
        emailToAdd = local + '@' + domain

        hashSet.add(emailToAdd)

    return len(hashSet)