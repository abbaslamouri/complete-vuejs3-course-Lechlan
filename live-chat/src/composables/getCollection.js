import { ref, watchEffect } from "vue"
import { db } from "../firebase/config"

const getCollection = (collection) =>{

  const documents = ref(null)
  const error = ref(null)

  let collectionRef = db.collection(collection).orderBy('createdAt')

  const unsub = collectionRef.onSnapshot((snap) => {
    let results = []
    snap.docs.forEach(doc => {
      doc.data().createdAt && results.push({...doc.data(), id: doc.id})
    })
    documents.value = results
    error.value = null
  }, (err) => {
    console.log(err.message)
    documents.value = null
    error.value = 'Could not fetch data'
  })

  watchEffect((onInvalidate) => {
    // Unsubscribe from prev collection when watcher is stopped (component unmounted)

    onInvalidate(() =>{
      unsub()
    })
  })

  return { documents, error }

}


export default getCollection