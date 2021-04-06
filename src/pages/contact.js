import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import RecipesList from "../components/RecipesList"
import SEO from "../components/SEO"

const Contact = ({ data }) => {
  const recipes = data.allContentfulRecipe.nodes
  return (
    <Layout>
      <SEO title="Contact" />
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Want to Get In Touch?</h3>
            <p>
              Snackwave godard synth stumptown, keffiyeh beard church-key pok
              pok aesthetic whatever irony adaptogen mixtape man bun. Swag ennui
              post-ironic tattooed vegan tilde slow-carb chia vape microdosing
              seitan taxidermy air plant. Forage cornhole shoreditch
              intelligentsia pok pok yr stumptown literally poutine hexagon.
              Single-origin coffee you probably haven't heard of them bitters
              skateboard hashtag irony actually squid four dollar toast hoodie
              lumbersexual banjo whatever iPhone synth. Austin keytar selfies
              chambray echo park.
            </p>
            <p>ntelligentsia pok pok yr stumpt</p>
            <p>
              Cray vice marfa mustache. Small batch gluten-free jean shorts
              drinking vinegar vice. Cold-pressed coloring book forage chia
              lo-fi etsy lyft plaid single-origin coffee tumeric. Cloud bread
              pitchfork sartorial chartreuse cronut raclette. Church-key blog ty
            </p>
          </article>
          <article>
            <form
              className="form contact-form"
              action="https://formspree.io/f/mwkakbee"
              method="POST"
            >
              <div className="form-row">
                <label htmlFor="name">Your name</label>
                <input type="text" name="name" id="name"></input>
              </div>
              <div className="form-row">
                <label htmlFor="email">Your email</label>
                <input type="email" name="email" id="email"></input>
              </div>
              <div className="form-row">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message"></textarea>
              </div>
              <button type="submit" className="btn block">
                Submit
              </button>
            </form>
          </article>
        </section>
        <section className="featured-recipes">
          <h5>Look at this Awesomesouce!</h5>
          <RecipesList recipes={recipes} />
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulRecipe(
      sort: { fields: title, order: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        id
        title
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`

export default Contact
