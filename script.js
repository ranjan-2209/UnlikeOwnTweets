function nextUnlike() {
	return document.querySelector('[data-testid="unlike"]')
}

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function removeAll() {
  let count = 0
  let next = nextUnlike()
  while (next && count < 500) {
    next.focus()
    next.click()
    console.log(`Unliked ${++count} tweets`)
    await wait(count % 50 === 0 ? 30000 : 2000)
    next = nextUnlike()
  }
  if (next) {
    console.log('Finished early to prevent rate-limiting')
  } else {
    console.log('Finished, count =', count)
  }
}

removeAll() 
