import React from 'react'
import { SecondaryNavigation } from '../components/SecondaryNavigation'
import { Container, Row, Col } from 'reactstrap'
import './blog-post.css'
import TalkyardCommentsIframe from '@debiki/gatsby-plugin-talkyard'
import Helmet from 'react-helmet'

export default props => {
  const { markdownRemark } = props.data // props.data.markdownRemark holds our post data
  const { frontmatter, html, wordCount, timeToRead, excerpt } = markdownRemark
  return (
    <Container>
      <Helmet
        title={`${frontmatter.title} - giraffesyo.io`}
        meta={[{ name: 'description', content: `${excerpt}` }]}
      >
        <html lang="en" />>
      </Helmet>
      <Row>
        <Col xs={12}>
          <SecondaryNavigation location={props.location} />
        </Col>
      </Row>
      <Row>
        <h1>{frontmatter.title}</h1>
      </Row>
      <Row className="date">
  <h6 className="green-text code-font">{'//'}{frontmatter.date}</h6>
      </Row>
      <Row className="bottom">
        <h6 className="light-blue-text code-font">
          <span className="dark-blue-text">Read time:</span> {timeToRead}{' '}
          {timeToRead > 1 ? 'minutes' : 'minute'}{' '}
          <span className="orange-text">{'&&'}</span>{' '}
          <span className="dark-blue-text">Word Count:</span> {wordCount.words}
        </h6>
      </Row>
      <Row className="content">
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </Row>
      <Row>
        <Col>
          <TalkyardCommentsIframe discussionId={frontmatter.discussionId} />
        </Col>
      </Row>
    </Container>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      excerpt(pruneLength: 100)
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        discussionId
      }
      timeToRead
      wordCount {
        words
      }
    }
  }
`
