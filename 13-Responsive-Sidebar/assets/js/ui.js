export class UI {
  addNavItem(element, data) {
    data.forEach((pokemon) => {
      element.innerHTML += `
                            <li class="nav-item">
                                <a href="#" id="${pokemon.name}" class="nav-link">
                                    <img src="assets/images/${pokemon.name.toLowerCase()}.svg"></img>
                                    <span class="link-text">${pokemon.name}</span>
                                    <span style="display: none" class="link-text">${pokemon.primary}</span>
                                    <span style="display: none" class="link-text">${pokemon.secondary}</span>
                                    <span style="display: none" class="link-text">${pokemon.tertiary}</span>
                                </a>
                            </li>
    `;
    });
  }
}
