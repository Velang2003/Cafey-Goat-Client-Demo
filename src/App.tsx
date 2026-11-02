import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  Clock3,
  Coffee,
  Instagram,
  MapPin,
  Menu,
  Quote,
  Sparkles,
  Star,
  X,
} from "lucide-react";
import { Button, Eyebrow, TextLink, Wordmark } from "./components";
import { menuItems, reviews, type MenuCategory } from "./data";

const EntranceImage = new URL("./assets/EntranceImage.jpg", import.meta.url).href;

const categories: Array<"All" | MenuCategory> = ["All", "Coffee", "All-day", "Savoury", "Sweet"];

function App() {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>("All");
  const [menuOpen, setMenuOpen] = useState(false);
  const [notice, setNotice] = useState<string | null>(null);

  const filteredItems =
    activeCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  useEffect(() => {
    if (!notice) return;
    const timeout = window.setTimeout(() => setNotice(null), 3200);
    return () => window.clearTimeout(timeout);
  }, [notice]);

  const showComingSoon = (feature: string) => {
    setNotice(`${feature} is coming soon. For now, call us and we'll take care of you.`);
  };

  return (
    <div className="site-shell">
      <header className="header">
        <a aria-label="Cafey Goat home" className="brand-link" href="#top">
          <Wordmark />
        </a>
        <nav
          aria-label="Main navigation"
          className={`nav${menuOpen ? " nav--open" : ""}`}
        >
          <a href="#menu" onClick={() => setMenuOpen(false)}>
            Menu
          </a>
          <a href="#story" onClick={() => setMenuOpen(false)}>
            Our story
          </a>
          <a href="#reviews" onClick={() => setMenuOpen(false)}>
            Reviews
          </a>
          <a href="#visit" onClick={() => setMenuOpen(false)}>
            Visit
          </a>
        </nav>
        <div className="header-actions">
          <Button
            className="desktop-action"
            onClick={() => showComingSoon("Table booking")}
            variant="ghost"
          >
            Book a table
          </Button>
          <Button
            className="desktop-action"
            onClick={() => showComingSoon("Online ordering")}
          >
            Order online
          </Button>
          <button
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="menu-toggle"
            onClick={() => setMenuOpen((value) => !value)}
            type="button"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <main>
        <section className="hero" id="top">
          <div className="hero-copy">
            <Eyebrow light>Your neighbrew-hood coffee spot</Eyebrow>
            <h1>
              Good coffee.
              <br />
              Better company.
            </h1>
            <p>
              Specialty coffee, honest plates, and unhurried moments in the
              heart of Dollars Colony.
            </p>
            <div className="hero-actions">
              <Button href="#menu" variant="light">
                Explore the menu <ArrowDown aria-hidden="true" size={18} />
              </Button>
              <Button href="#visit" variant="ghost">
                Find us <MapPin aria-hidden="true" size={18} />
              </Button>
            </div>
          </div>
          <div className="hero-image-wrap">
            <img
              alt="The warm, plant-lined entrance to Cafey Goat"
              className="hero-image"
              src={EntranceImage}
            />
            <div className="rating-card">
              <div className="rating-stars" aria-label="4.8 out of 5 stars">
                <Star fill="currentColor" size={16} />
                <span>4.8</span>
              </div>
              <span>Loved by our neighbourhood</span>
            </div>
          </div>
          <div className="hero-side-note">Bengaluru · Since 2024</div>
        </section>

        <div className="marquee" aria-label="Cafe highlights">
          <div className="marquee-track">
            <span>Specialty coffee</span>
            <i />
            <span>All-day breakfast</span>
            <i />
            <span>Fresh bakes</span>
            <i />
            <span>Good mood food</span>
            <i />
            <span>Specialty coffee</span>
            <i />
            <span>All-day breakfast</span>
            <i />
            <span>Fresh bakes</span>
            <i />
          </div>
        </div>

        <section className="section menu-section" id="menu">
          <div className="section-heading">
            <div>
              <Eyebrow>From the kitchen & bar</Eyebrow>
              <h2>
                Made for every kind
                <br />
                of craving.
              </h2>
            </div>
            <p>
              Familiar flavours, made with care. From the first espresso of the
              morning to dessert after dinner.
            </p>
          </div>
          <div aria-label="Filter menu" className="category-tabs" role="group">
            {categories.map((category) => (
              <button
                aria-pressed={activeCategory === category}
                className={
                  activeCategory === category
                    ? "category-tab category-tab--active"
                    : "category-tab"
                }
                key={category}
                onClick={() => setActiveCategory(category)}
                type="button"
              >
                {category}
              </button>
            ))}
          </div>
          <div className="menu-grid">
            {filteredItems.map((item) => (
              <article className="menu-card" key={item.name}>
                <div className="menu-card-image-wrap">
                  <img
                    alt={item.name}
                    className="menu-card-image"
                    loading="lazy"
                    src={item.image}
                  />
                  {item.badge && (
                    <span className="menu-badge">{item.badge}</span>
                  )}
                </div>
                <div className="menu-card-body">
                  <div className="menu-card-title">
                    <h3>{item.name}</h3>
                    <span>₹{item.price}</span>
                  </div>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="section-cta">
            <Button onClick={() => setActiveCategory("All")} variant="ghost">
              See the full menu <ArrowRight aria-hidden="true" size={18} />
            </Button>
          </div>
        </section>

        <section className="story-section" id="story">
          <div className="story-image">
            <img
              alt="A warm modern café interior"
              loading="lazy"
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1400&q=85"
            />
            <div className="image-stamp">
              <Coffee aria-hidden="true" />
              <span>Roasted with care</span>
            </div>
          </div>
          <div className="story-copy">
            <Eyebrow light>Our little corner</Eyebrow>
            <h2>
              A café with
              <br />a point of view.
            </h2>
            <p className="story-lead">
              Cafey Goat was made for the in-between moments: the quick morning
              coffee that becomes a long chat, the working lunch that turns into
              cake.
            </p>
            <p>
              We care about what goes in the cup, but just as much about what
              happens around it. Expect thoughtful coffee, generous food and a
              team that remembers your usual.
            </p>
            <TextLink href="#visit">Come say hello</TextLink>
          </div>
        </section>

        <section className="section values-section">
          <div className="values-intro">
            <Eyebrow>The goat standard</Eyebrow>
            <h2>
              Simple things,
              <br />
              done properly.
            </h2>
          </div>
          <div className="values-grid">
            <article>
              <span>01</span>
              <Coffee aria-hidden="true" />
              <h3>Serious about coffee</h3>
              <p>
                Balanced espresso, careful brewing, and beans chosen for
                character.
              </p>
            </article>
            <article>
              <span>02</span>
              <Sparkles aria-hidden="true" />
              <h3>Fresh, all day</h3>
              <p>
                Breakfast through dinner, prepared in small batches with good
                produce.
              </p>
            </article>
            <article>
              <span>03</span>
              <MapPin aria-hidden="true" />
              <h3>Made for the neighbourhood</h3>
              <p>
                A warm, easygoing room for solo coffee, families, friends, and
                laptops.
              </p>
            </article>
          </div>
        </section>

        <section className="reviews-section" id="reviews">
          <div className="reviews-heading">
            <Eyebrow light>Kind words</Eyebrow>
            <h2>
              From our
              <br />
              regulars.
            </h2>
            <div className="big-rating">
              <span>4.8</span>
              <div>
                <div aria-hidden="true" className="stars">
                  ★★★★★
                </div>
                <p>Based on guest reviews</p>
              </div>
            </div>
          </div>
          <div className="review-list">
            {reviews.map((review) => (
              <article className="review-card" key={review.name}>
                <Quote aria-hidden="true" />
                <p>“{review.quote}”</p>
                <footer>
                  <strong>{review.name}</strong>
                  <span>{review.detail}</span>
                </footer>
              </article>
            ))}
          </div>
        </section>

        <section className="visit-section" id="visit">
          <div className="visit-copy">
            <Eyebrow>Drop by</Eyebrow>
            <h2>
              There’s always
              <br />
              room for one more.
            </h2>
            <div className="visit-detail">
              <MapPin aria-hidden="true" />
              <div>
                <strong>Dollars Colony</strong>
                <p>
                  Shakamabari Apartments, 19, 1st Main Road,
                  <br />
                  near Bank of Baroda, RMV 2nd Stage,
                  <br />
                  Bengaluru, Karnataka 560094
                </p>
              </div>
            </div>
            <div className="visit-detail">
              <Clock3 aria-hidden="true" />
              <div>
                <strong>Open every day</strong>
                <p>10:00 AM — 11:00 PM</p>
              </div>
            </div>
            <div className="visit-actions">
              <Button href="https://maps.google.com/?q=Cafey+Goat+Dollars+Colony+Bengaluru">
                Get directions <ArrowRight aria-hidden="true" size={18} />
              </Button>
              <Button href="tel:+918095967543" variant="ghost">
                Call the café
              </Button>
            </div>
          </div>
          <div className="map-card">
            <div className="map-grid" />
            <div className="map-road map-road--one" />
            <div className="map-road map-road--two" />
            <div className="map-pin">
              <Wordmark light />
            </div>
            <p>Dollars Colony</p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-top">
          <Wordmark light />
          <p>The neighbrew-hood coffee spot.</p>
          <a
            aria-label="Cafey Goat on Instagram"
            href="https://www.instagram.com/cafeygoat/"
          >
            <Instagram aria-hidden="true" />
          </a>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Cafey Goat</span>
          <span>Dollars Colony · Bengaluru</span>
          <span>Made with care, served warm.</span>
        </div>
      </footer>

      {notice && (
        <div aria-live="polite" className="toast" role="status">
          <Coffee aria-hidden="true" />
          <span>{notice}</span>
          <button
            aria-label="Dismiss message"
            onClick={() => setNotice(null)}
            type="button"
          >
            <X size={17} />
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
