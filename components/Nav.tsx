import React from "react";
import Styled from "styled-components";
import colors from "../assets/colors";

const Nav = () => {
  return (
    <NavWrapper>
      <NavInnerWrapper>
        <div>
          <ul className="top-links">
            <li>
              <a href="https://sphere.guide/career-coach">Career</a>
            </li>
            <li>
              <a href="https://sphere.guide/leadership-coach">Leadership</a>
            </li>
            <li>
              <a href="https://sphere.guide/business-coach">Buisness</a>
            </li>
            <li>
              <a href="https://sphere.guide/relationship-coach">
                Relationships
              </a>
            </li>
            <li>
              <a href="https://sphere.guide/life-coach">Life</a>
            </li>
            <li>
              <a href="https://sphere.guide/wellbeing-coach">Wellbeing</a>
            </li>
          </ul>
        </div>
        <div className="bottom-nav">
          <div className="logo-container">
            <h3 className="logo">Sphere</h3>
          </div>
          <ul className="bottom-links">
            <li>
              <img
                className="app-store"
                alt="App Store"
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMTkuNjY0IiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTE5LjY2NCA0MCI+PGRlZnM+PHN0eWxlPi5he2ZpbGw6I2E2YTZhNjt9LmJ7ZmlsbDojZmZmO308L3N0eWxlPjwvZGVmcz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDApIj48cGF0aCBjbGFzcz0iYSIgZD0iTTExMC4xMzUsMEg5LjUzNUM5LjE2OCwwLDguODA2LDAsOC40NCwwYy0uMzA2LDAtLjYxLjAwOC0uOTE5LjAxM2ExMy4yMTUsMTMuMjE1LDAsMCwwLTIsLjE3Nyw2LjY2NSw2LjY2NSwwLDAsMC0xLjkuNjI3QTYuNDM4LDYuNDM4LDAsMCwwLDIsMiw2LjI1OCw2LjI1OCwwLDAsMCwuODE5LDMuNjE4YTYuNiw2LjYsMCwwLDAtLjYyNSwxLjksMTIuOTkzLDEyLjk5MywwLDAsMC0uMTc5LDJDLjAwNiw3LjgzLDAsOC4xMzgsMCw4LjQ0NFYzMS41NTljMCwuMzEuMDA2LjYxMS4wMTUuOTIyYTEyLjk5MywxMi45OTMsMCwwLDAsLjE3OSwyLDYuNTg4LDYuNTg4LDAsMCwwLC42MjUsMS45QTYuMjA4LDYuMjA4LDAsMCwwLDIsMzgsNi4yNzQsNi4yNzQsMCwwLDAsMy42MTYsMzkuMThhNi43LDYuNywwLDAsMCwxLjkuNjMxLDEzLjQ1NSwxMy40NTUsMCwwLDAsMiwuMTc3Yy4zMDkuMDA3LjYxMy4wMTEuOTE5LjAxMS4zNjYsMCwuNzI4LDAsMS4wOTUsMGgxMDAuNmMuMzU5LDAsLjcyNSwwLDEuMDg0LDAsLjMsMCwuNjE3LDAsLjkyMi0uMDExYTEzLjI3OSwxMy4yNzksMCwwLDAsMi0uMTc3LDYuOCw2LjgsMCwwLDAsMS45MDgtLjYzMUE2LjI3OCw2LjI3OCwwLDAsMCwxMTcuNjY2LDM4YTYuNCw2LjQsMCwwLDAsMS4xODItMS42MTQsNi42LDYuNiwwLDAsMCwuNjE5LTEuOSwxMy41MDYsMTMuNTA2LDAsMCwwLC4xODYtMmMwLS4zMTEsMC0uNjExLDAtLjkyMi4wMDgtLjM2My4wMDgtLjcyNS4wMDgtMS4wOTRWOS41MzZjMC0uMzY2LDAtLjcyOS0uMDA4LTEuMDkyLDAtLjMwNywwLS42MTQsMC0uOTIxYTEzLjUwNiwxMy41MDYsMCwwLDAtLjE4Ni0yLDYuNjE4LDYuNjE4LDAsMCwwLS42MTktMS45LDYuNDY2LDYuNDY2LDAsMCwwLTIuOC0yLjgsNi43NjgsNi43NjgsMCwwLDAtMS45MDgtLjYyNywxMy4wNDQsMTMuMDQ0LDAsMCwwLTItLjE3N2MtLjMsMC0uNjE3LS4wMTEtLjkyMi0uMDEzLS4zNTksMC0uNzI1LDAtMS4wODQsMFoiLz48cGF0aCBkPSJNOC40NDUsMzkuMTI1Yy0uMywwLS42LDAtLjktLjAxMWExMi42ODgsMTIuNjg4LDAsMCwxLTEuODY5LS4xNjNBNS44ODQsNS44ODQsMCwwLDEsNC4wMTUsMzguNGE1LjQwNiw1LjQwNiwwLDAsMS0xLjQtMS4wMTdBNS4zMjEsNS4zMjEsMCwwLDEsMS42LDM1Ljk5YTUuNzIyLDUuNzIyLDAsMCwxLS41NDMtMS42NTcsMTIuNDEzLDEyLjQxMywwLDAsMS0uMTY3LTEuODc1Yy0uMDA2LS4yMTEtLjAxNS0uOTEzLS4wMTUtLjkxM1Y4LjQ0NHMuMDA5LS42OTEuMDE1LS44OTVhMTIuMzcsMTIuMzcsMCwwLDEsLjE2Ni0xLjg3MkE1Ljc1NSw1Ljc1NSwwLDAsMSwxLjYsNC4wMTZhNS4zNzMsNS4zNzMsMCwwLDEsMS4wMTUtMS40QTUuNTY1LDUuNTY1LDAsMCwxLDQuMDE0LDEuNmE1LjgyMyw1LjgyMywwLDAsMSwxLjY1My0uNTQ0QTEyLjU4NiwxMi41ODYsMCwwLDEsNy41NDMuODg3bC45LS4wMTJIMTExLjIxNGwuOTEzLjAxM2ExMi4zODUsMTIuMzg1LDAsMCwxLDEuODU4LjE2Myw1LjkzOCw1LjkzOCwwLDAsMSwxLjY3MS41NDgsNS41OTQsNS41OTQsMCwwLDEsMi40MTUsMi40Miw1Ljc2Myw1Ljc2MywwLDAsMSwuNTM1LDEuNjQ5LDEzLDEzLDAsMCwxLC4xNzQsMS44ODdjMCwuMjgzLDAsLjU4NywwLC44OS4wMDguMzc1LjAwOC43MzIuMDA4LDEuMDkyVjMwLjQ2NWMwLC4zNjMsMCwuNzE4LS4wMDgsMS4wNzUsMCwuMzI1LDAsLjYyMywwLC45M2ExMi43MywxMi43MywwLDAsMS0uMTcxLDEuODU0LDUuNzM5LDUuNzM5LDAsMCwxLS41NCwxLjY3LDUuNDgsNS40OCwwLDAsMS0xLjAxNiwxLjM4Niw1LjQxMyw1LjQxMywwLDAsMS0xLjQsMS4wMjIsNS44NjIsNS44NjIsMCwwLDEtMS42NjguNTUsMTIuNTQzLDEyLjU0MywwLDAsMS0xLjg2OS4xNjNjLS4yOTMuMDA3LS42LjAxMS0uOS4wMTFsLTEuMDg0LDBaIi8+PHBhdGggY2xhc3M9ImIiIGQ9Ik0yNC43NjksMjAuM2E0Ljk0OSw0Ljk0OSwwLDAsMSwyLjM1Ny00LjE1Miw1LjA2Niw1LjA2NiwwLDAsMC0zLjk5MS0yLjE1OGMtMS42NzktLjE3Ni0zLjMwNywxLTQuMTYzLDEtLjg3MiwwLTIuMTktLjk4Ny0zLjYwOC0uOTU4YTUuMzE1LDUuMzE1LDAsMCwwLTQuNDczLDIuNzI4Yy0xLjkzNCwzLjM0OC0uNDkxLDguMjY5LDEuMzYxLDEwLjk3Ni45MjcsMS4zMjUsMi4wMSwyLjgwNiwzLjQyOCwyLjc1MywxLjM4Ny0uMDU4LDEuOTA1LS44ODQsMy41NzktLjg4NCwxLjY1OSwwLDIuMTQ1Ljg4NCwzLjU5MS44NTEsMS40ODgtLjAyNCwyLjQyNi0xLjMzMSwzLjMyMS0yLjY2OUExMC45NjIsMTAuOTYyLDAsMCwwLDI3LjY4OCwyNC43LDQuNzgyLDQuNzgyLDAsMCwxLDI0Ljc2OSwyMC4zWiIvPjxwYXRoIGNsYXNzPSJiIiBkPSJNMjIuMDM3LDEyLjIxMUE0Ljg3Miw0Ljg3MiwwLDAsMCwyMy4xNTIsOC43MmE0Ljk1Nyw0Ljk1NywwLDAsMC0zLjIwOCwxLjY2QTQuNjM2LDQuNjM2LDAsMCwwLDE4LjgsMTMuNzQxLDQuMSw0LjEsMCwwLDAsMjIuMDM3LDEyLjIxMVoiLz48cGF0aCBjbGFzcz0iYiIgZD0iTTQyLjMsMjcuMTRIMzcuNTY5TDM2LjQzMiwzMC41aC0ybDQuNDgzLTEyLjQxOGgyLjA4M0w0NS40NzcsMzAuNUg0My40MzhabS00LjI0My0xLjU0OWgzLjc1MmwtMS44NS01LjQ0N0gzOS45MVoiLz48cGF0aCBjbGFzcz0iYiIgZD0iTTU1LjE2LDI1Ljk3YzAsMi44MTMtMS41MDYsNC42MjEtMy43NzgsNC42MjFhMy4wNjksMy4wNjksMCwwLDEtMi44NDktMS41ODRINDguNDl2NC40ODRINDYuNjMxVjIxLjQ0MmgxLjh2MS41MDZoLjAzNGEzLjIxMiwzLjIxMiwwLDAsMSwyLjg4My0xLjZDNTMuNjQ1LDIxLjM0OCw1NS4xNiwyMy4xNjQsNTUuMTYsMjUuOTdabS0xLjkxLDBjMC0xLjgzMy0uOTQ3LTMuMDM4LTIuMzkzLTMuMDM4LTEuNDIsMC0yLjM3NSwxLjIzLTIuMzc1LDMuMDM4LDAsMS44MjQuOTU1LDMuMDQ2LDIuMzc1LDMuMDQ2QzUyLjMsMjkuMDE2LDUzLjI1LDI3LjgxOSw1My4yNSwyNS45N1oiLz48cGF0aCBjbGFzcz0iYiIgZD0iTTY1LjEyNSwyNS45N2MwLDIuODEzLTEuNTA2LDQuNjIxLTMuNzc4LDQuNjIxQTMuMDY5LDMuMDY5LDAsMCwxLDU4LjUsMjkuMDA3aC0uMDQzdjQuNDg0SDU2LjZWMjEuNDQyaDEuOHYxLjUwNmguMDM0YTMuMjEyLDMuMjEyLDAsMCwxLDIuODgzLTEuNkM2My42MSwyMS4zNDgsNjUuMTI1LDIzLjE2NCw2NS4xMjUsMjUuOTdabS0xLjkxLDBjMC0xLjgzMy0uOTQ3LTMuMDM4LTIuMzkzLTMuMDM4LTEuNDIsMC0yLjM3NSwxLjIzLTIuMzc1LDMuMDM4LDAsMS44MjQuOTU1LDMuMDQ2LDIuMzc1LDMuMDQ2LDEuNDQ1LDAsMi4zOTMtMS4yLDIuMzkzLTMuMDQ2WiIvPjxwYXRoIGNsYXNzPSJiIiBkPSJNNzEuNzEsMjcuMDM2Yy4xMzgsMS4yMzEsMS4zMzQsMi4wNCwyLjk2OSwyLjA0LDEuNTY2LDAsMi42OTMtLjgwOSwyLjY5My0xLjkxOSwwLS45NjQtLjY4LTEuNTQxLTIuMjg5LTEuOTM3bC0xLjYwOS0uMzg4Yy0yLjI4LS41NTEtMy4zMzktMS42MTctMy4zMzktMy4zNDgsMC0yLjE0MywxLjg2Ny0zLjYxNCw0LjUxOS0zLjYxNCwyLjYyNCwwLDQuNDIzLDEuNDcyLDQuNDgzLDMuNjE0SDc3LjI2MWMtLjExMi0xLjIzOS0xLjEzNy0xLjk4Ny0yLjYzNC0xLjk4N3MtMi41MjEuNzU3LTIuNTIxLDEuODU4YzAsLjg3OC42NTQsMS4zOTUsMi4yNTUsMS43OWwxLjM2OC4zMzZjMi41NDguNiwzLjYwNiwxLjYyNiwzLjYwNiwzLjQ0MiwwLDIuMzIzLTEuODUxLDMuNzc4LTQuNzk0LDMuNzc4LTIuNzU0LDAtNC42MTMtMS40MjEtNC43MzMtMy42NjdaIi8+PHBhdGggY2xhc3M9ImIiIGQ9Ik04My4zNDYsMTkuM3YyLjE0M2gxLjcyMnYxLjQ3Mkg4My4zNDZ2NC45OTFjMCwuNzc1LjM0NSwxLjEzNywxLjEsMS4xMzdBNS44MDcsNS44MDcsMCwwLDAsODUuMDU5LDI5djEuNDYzYTUuMSw1LjEsMCwwLDEtMS4wMzIuMDg2Yy0xLjgzMywwLTIuNTQ4LS42ODgtMi41NDgtMi40NDRWMjIuOTE0SDgwLjE2M1YyMS40NDJoMS4zMTZWMTkuM1oiLz48cGF0aCBjbGFzcz0iYiIgZD0iTTg2LjA2NSwyNS45N2MwLTIuODQ5LDEuNjc4LTQuNjM5LDQuMjk0LTQuNjM5czQuMjk1LDEuNzksNC4yOTUsNC42MzktMS42NjEsNC42MzktNC4yOTUsNC42MzlTODYuMDY1LDI4LjgyNiw4Ni4wNjUsMjUuOTdabTYuNywwYzAtMS45NTQtLjktMy4xMDctMi40LTMuMTA3cy0yLjQsMS4xNjItMi40LDMuMTA3YzAsMS45NjIuODk1LDMuMTA2LDIuNCwzLjEwNnMyLjQtMS4xNDUsMi40LTMuMTA2WiIvPjxwYXRoIGNsYXNzPSJiIiBkPSJNOTYuMTg2LDIxLjQ0MmgxLjc3MnYxLjU0MUg5OGEyLjE1OSwyLjE1OSwwLDAsMSwyLjE3OC0xLjYzNiwyLjg2NiwyLjg2NiwwLDAsMSwuNjM3LjA2OXYxLjczOGEyLjYsMi42LDAsMCwwLS44MzUtLjExMiwxLjg3MywxLjg3MywwLDAsMC0xLjkzNywyLjA4M1YzMC41SDk2LjE4NloiLz48cGF0aCBjbGFzcz0iYiIgZD0iTTEwOS4zODQsMjcuODM3Yy0uMjUsMS42NDQtMS44NTEsMi43NzEtMy45LDIuNzcxLTIuNjM0LDAtNC4yNjktMS43NjUtNC4yNjktNC42czEuNjQ0LTQuNjgyLDQuMTktNC42ODJjMi41LDAsNC4wOCwxLjcyMSw0LjA4LDQuNDY2di42MzdoLTYuMzk1di4xMTJhMi4zNTgsMi4zNTgsMCwwLDAsMi40MzYsMi41NjQsMi4wNDgsMi4wNDgsMCwwLDAsMi4wOTEtMS4yNzNabS02LjI4Mi0yLjdoNC41MjZhMi4xNzcsMi4xNzcsMCwwLDAtMi4yMjEtMi4zLDIuMjkyLDIuMjkyLDAsMCwwLTIuMzA2LDIuM1oiLz48cGF0aCBjbGFzcz0iYiIgZD0iTTM3LjgyNiw4LjczMUEyLjY0LDIuNjQsMCwwLDEsNDAuNjM0LDExLjdjMCwxLjkwNi0xLjAzLDMtMi44MDgsM0gzNS42NzFWOC43MzFaTTM2LjYsMTMuODU0aDEuMTI1YTEuODc2LDEuODc2LDAsMCwwLDEuOTY4LTIuMTQ2LDEuODgxLDEuODgxLDAsMCwwLTEuOTY4LTIuMTM0SDM2LjZaIi8+PHBhdGggY2xhc3M9ImIiIGQ9Ik00MS42ODEsMTIuNDQ0YTIuMTMzLDIuMTMzLDAsMSwxLDQuMjQ3LDAsMi4xMzQsMi4xMzQsMCwxLDEtNC4yNDcsMFptMy4zMzMsMGMwLS45NzYtLjQzOC0xLjU0Ny0xLjIwOC0xLjU0N3MtMS4yMDcuNTcxLTEuMjA3LDEuNTQ3LjQzNSwxLjU1LDEuMjA3LDEuNTUsMS4yMDgtLjU3LDEuMjA4LTEuNTVaIi8+PHBhdGggY2xhc3M9ImIiIGQ9Ik01MS41NzMsMTQuN2gtLjkyMmwtLjkzMS0zLjMxNmgtLjA3TDQ4LjcyNCwxNC43aC0uOTEzbC0xLjI0MS00LjVoLjlsLjgwNywzLjQzNmguMDY2bC45MjYtMy40MzZoLjg1M2wuOTI2LDMuNDM2aC4wN2wuOC0zLjQzNmguODg5WiIvPjxwYXRoIGNsYXNzPSJiIiBkPSJNNTMuODU0LDEwLjE5NWguODU1di43MTVoLjA2NmExLjM0OCwxLjM0OCwwLDAsMSwxLjM0NC0uOCwxLjQ2NSwxLjQ2NSwwLDAsMSwxLjU1OSwxLjY3NVYxNC43aC0uODg5VjEyLjAwNmMwLS43MjQtLjMxNC0xLjA4My0uOTcyLTEuMDgzYTEuMDMzLDEuMDMzLDAsMCwwLTEuMDc1LDEuMTQxVjE0LjdoLS44ODlaIi8+PHBhdGggY2xhc3M9ImIiIGQ9Ik01OS4wOTQsOC40MzdoLjg4OVYxNC43aC0uODg5WiIvPjxwYXRoIGNsYXNzPSJiIiBkPSJNNjEuMjE4LDEyLjQ0NGEyLjEzMywyLjEzMywwLDEsMSw0LjI0OCwwLDIuMTM0LDIuMTM0LDAsMSwxLTQuMjQ4LDBabTMuMzMzLDBjMC0uOTc2LS40MzgtMS41NDctMS4yMDgtMS41NDdzLTEuMjA3LjU3MS0xLjIwNywxLjU0Ny40MzUsMS41NSwxLjIwNywxLjU1LDEuMjA4LS41NywxLjIwOC0xLjU1WiIvPjxwYXRoIGNsYXNzPSJiIiBkPSJNNjYuNCwxMy40MjRjMC0uODExLjYtMS4yNzgsMS42NzUtMS4zNDRsMS4yMi0uMDd2LS4zODljMC0uNDc2LS4zMTQtLjc0NC0uOTIyLS43NDQtLjUsMC0uODQuMTgyLS45MzguNWgtLjg2Yy4wOTEtLjc3My44MTgtMS4yNywxLjg0LTEuMjcsMS4xMjksMCwxLjc2Ni41NjIsMS43NjYsMS41MTNWMTQuN2gtLjg1NXYtLjYzM2gtLjA3YTEuNTE1LDEuNTE1LDAsMCwxLTEuMzUzLjcwNywxLjM2LDEuMzYsMCwwLDEtMS41LTEuMzQ4Wk02OS4zLDEzLjA0di0uMzc2bC0xLjEuMDdjLS42Mi4wNDItLjkuMjUyLS45LjY0OXMuMzUyLjY0MS44MzUuNjQxQTEuMDYxLDEuMDYxLDAsMCwwLDY5LjMsMTMuMDRaIi8+PHBhdGggY2xhc3M9ImIiIGQ9Ik03MS4zNDgsMTIuNDQ0YzAtMS40MjMuNzMxLTIuMzI0LDEuODY5LTIuMzI0YTEuNDg0LDEuNDg0LDAsMCwxLDEuMzgxLjc5aC4wNjZWOC40MzdoLjg4OVYxNC43SDc0Ljd2LS43MTFoLS4wN2ExLjU2MywxLjU2MywwLDAsMS0xLjQxNC43ODZDNzIuMDcyLDE0Ljc3Miw3MS4zNDgsMTMuODcxLDcxLjM0OCwxMi40NDRabS45MTgsMGMwLC45NTUuNDUsMS41MywxLjIsMS41M3MxLjIxMi0uNTgzLDEuMjEyLTEuNTI2LS40NjgtMS41My0xLjIxMi0xLjUzLTEuMi41NzktMS4yLDEuNTI2WiIvPjxwYXRoIGNsYXNzPSJiIiBkPSJNNzkuMjMsMTIuNDQ0YTIuMTMzLDIuMTMzLDAsMSwxLDQuMjQ3LDAsMi4xMzQsMi4xMzQsMCwxLDEtNC4yNDcsMFptMy4zMzMsMGMwLS45NzYtLjQzOC0xLjU0Ny0xLjIwOC0xLjU0N3MtMS4yMDcuNTcxLTEuMjA3LDEuNTQ3LjQzNSwxLjU1LDEuMjA3LDEuNTVTODIuNTYzLDEzLjQyNCw4Mi41NjMsMTIuNDQ0WiIvPjxwYXRoIGNsYXNzPSJiIiBkPSJNODQuNjY5LDEwLjE5NWguODU1di43MTVoLjA2NmExLjM0OCwxLjM0OCwwLDAsMSwxLjM0NC0uOCwxLjQ2NSwxLjQ2NSwwLDAsMSwxLjU1OSwxLjY3NVYxNC43aC0uODg5VjEyLjAwNmMwLS43MjQtLjMxNC0xLjA4My0uOTcyLTEuMDgzYTEuMDMzLDEuMDMzLDAsMCwwLTEuMDc1LDEuMTQxVjE0LjdoLS44ODlaIi8+PHBhdGggY2xhc3M9ImIiIGQ9Ik05My41MTUsOS4wNzR2MS4xNDJoLjk3NnYuNzQ5aC0uOTc2djIuMzE1YzAsLjQ3Mi4xOTQuNjc4LjYzNy42NzhhMi45NjYsMi45NjYsMCwwLDAsLjMzOS0uMDIxdi43NGEyLjkxNSwyLjkxNSwwLDAsMS0uNDgzLjA0NWMtLjk4OCwwLTEuMzgyLS4zNDgtMS4zODItMS4yMTZWMTAuOTY0aC0uNzE1di0uNzQ5aC43MTVWOS4wNzRaIi8+PHBhdGggY2xhc3M9ImIiIGQ9Ik05NS43LDguNDM3aC44ODF2Mi40ODFoLjA3YTEuMzg2LDEuMzg2LDAsMCwxLDEuMzczLS44MDcsMS40ODMsMS40ODMsMCwwLDEsMS41NTEsMS42NzlWMTQuN2gtLjg5VjEyLjAxYzAtLjcxOS0uMzM1LTEuMDgzLS45NjMtMS4wODNhMS4wNTIsMS4wNTIsMCwwLDAtMS4xMzQsMS4xNDJWMTQuN0g5NS43WiIvPjxwYXRoIGNsYXNzPSJiIiBkPSJNMTA0Ljc2MSwxMy40ODJhMS44MjgsMS44MjgsMCwwLDEtMS45NTEsMS4zLDIuMDQ1LDIuMDQ1LDAsMCwxLTIuMDgtMi4zMjQsMi4wNzcsMi4wNzcsMCwwLDEsMi4wNzYtMi4zNTNjMS4yNTMsMCwyLjAwOS44NTYsMi4wMDksMi4yN3YuMzFoLTMuMTh2LjA1YTEuMTksMS4xOSwwLDAsMCwxLjIsMS4yOSwxLjA3OSwxLjA3OSwwLDAsMCwxLjA3MS0uNTQ2Wm0tMy4xMjYtMS40NTFoMi4yNzRhMS4wODYsMS4wODYsMCwwLDAtMS4xMDgtMS4xNjcsMS4xNTIsMS4xNTIsMCwwLDAtMS4xNjYsMS4xNjdaIi8+PC9nPjwvc3ZnPg=="
              />
            </li>
            <li>
              <img
                className="app-store"
                alt="Play Store"
                src="https://sphere.guide/_next/image?url=%2F_next%2Fstatic%2Fimages%2Fgoogle-play-badge-4dd714de354e7946cdacb08aceda447d.png&w=128&q=75"
              />
            </li>
            <li>
              <a href="https://sphere.guide/getstarted">Find a Coach</a>
            </li>
            <li>
              <a href="https://sphere.guide/how-it-works">How it works</a>
            </li>
            <li className="try-free">
              <a href="https://sphere.guide/">Try for Free</a>
            </li>
          </ul>
        </div>
      </NavInnerWrapper>
    </NavWrapper>
  );
};

export default Nav;

const NavWrapper = Styled.nav`
position: fixed;
top:0;
width: 100%;
display: flex;
justify-content: center;
background-color: ${colors.black};
color: ${colors.white};
`;
const NavInnerWrapper = Styled.div`
width: 95%;
.top-links, .bottom-links {
  display: flex;
  text-decoration: none;
  align-items: center;
  list-style-type: none;
  padding: 0;
  font-size: 17px;
}
.top-links {
  height: 40%;
  border-bottom: white solid thin;
}
.bottom-links {
  margin: 0;
  li{
    margin-right: 25px;
  }
}
.bottom-nav {
  display: flex;
  justify-content: space-between;
  border-bottom: white solid thin;
  height: 30px;
}
.logo-container {
  display:flex;
  align-items: center;
}
.logo {
  margin: 0;
  margin-bottom: 10px;
  padding: 0;
  font-size: 30px;
  font-family: Mercury Display;
}
.app-store{
  height: 25px;
  margin-bottom: 4px;
}
.try-free {
  background-color: ${colors.blue_primary};
  border-radius: 10px;
  padding: 2px 17px;
}
li {
  transition: color 1s;
  cursor: pointer;
  margin-right: 10px;
  margin-bottom: 7px;
}
li:hover {
  color: ${colors.grey};
}
`;
