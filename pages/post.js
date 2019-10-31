import { withRouter } from 'next/router'
import Layout from '../components/MyLayout.js'
import Markdown from 'react-markdown'

function Post(props) {
  return (
    <Layout>
      <h1>{props.router.query.title}</h1>
      <div className="markdown">
        <Markdown
          source={`
Dies ist ein Beispiel-Blogeintrag.

### Beitragstitel

Inhalt:
   `}
        />
      </div>
      <style jsx global>{`
        .markdown {
          font-family: 'Arial';
        }

        .markdown a {
          text-decoration: none;
          color: blue;
        }

        .markdown a:hover {
          opacity: 0.6;
        }

        .markdown h3 {
          margin: 0;
          padding: 0;
          text-transform: uppercase;
        }
      `}</style>
    </Layout>
  )
}

export default withRouter(Post)
