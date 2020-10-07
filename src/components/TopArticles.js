import React from "react";
import { Card } from "semantic-ui-react";
class TopArticles extends React {
  render() {
    return(
    <Card
    image='/images/avatar/large/elliot.jpg'
    header='Elliot Baker'
    meta='Friend'
    description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
    extra={extra}
  />
  })
}
