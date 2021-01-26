let attributesNames = {
	"perception": "Perception",
	"strenght": "Force",
	"fortitude": "Courage",
	"agility": "Agilité",
	"intellect": "Intelligence"
};

let attributesDescription = "Augmente les dégâts à la tête et les chances de démembrement des armes relatives à cet attribut";

let primaryPerks = [
	{"attribute": "perception", "name": "Perception", "description": attributesDescription, "price": 16},
	{"attribute": "perception", "name": "Le transperceur", "description": "Ignore une partie de l'armure. Certaines armes peuvent transpercer et toucher plusieurs ennemies", "price": 4},
	{"attribute": "perception", "name": "Chanceux", "description": "Trouvez du butin de meilleur qualité et fouille plus rapide", "price": 5},
	{"attribute": "strenght", "name": "Force", "description": attributesDescription, "price": 16},
	{"attribute": "strenght", "name": "Bombe sexuelle", "description": "Réduis l'endurance consommée lors d'attaque au corps à corps et lors de l'utilisation d'outils", "price": 4},
	{"attribute": "strenght", "name": "Mule", "description": "Permet de porter plus sans être encombré", "price": 5},
	{"attribute": "strenght", "name": "Ruée vers l'or", "description": "Fabrique des outils de récolte de plus haut niveau et ces derniers font plus de dégâts et dégâts de bloc", "price": 5},
	{"attribute": "strenght", "name": "Part du lion", "description": "Les outils de récoltes rapporte plus de butin", "price": 5},
	{"attribute": "fortitude", "name": "Courage", "description": attributesDescription, "price": 16},
	{"attribute": "fortitude", "name": "Bien isolé", "description": "Réduis les debuff lié à la température et augmente de 20 points l'isolation thermique globale", "price": 3},
	{"attribute": "fortitude", "name": "Résistance à la douleur", "description": "Réduis les dégâts reçus, permet de ne plus être étourdis", "price": 5},
	{"attribute": "fortitude", "name": "Capacité régénératrice", "description": "Les blessures se soignent plus rapidement, octroie régénération des PV passive", "price": 5},
	{"attribute": "fortitude", "name": "Estomac d'acier", "description": "Vous avez faim et soif moins souvent, apnée plus longue, les buffs durent plus longtemps", "price": 5},
	{"attribute": "fortitude", "name": "Règle1: le cardio", "description": "Vous courrez plus longtemps", "price": 3},
	{"attribute": "agility", "name": "Agilité", "description": attributesDescription, "price": 16},
	{"attribute": "intellect", "name": "Intelligence", "description": attributesDescription, "price": 16},
	{"attribute": "intellect", "name": "L'aventurier téméraire", "description": "Vous gagnez de meilleurs récompenses en accomplissant vos missions et gagner plus d'argent", "price": 4},
	{"attribute": "intellect", "name": "Charisme naturel", "description": "Accorde différents bonus à vos compagnons proches", "price": 4},
];

let jobsPerks = {
	"gleaner": {
		"name": "Glaneur",
		"perks": [
			{"attribute": "perception", "name": "Opération récupération", "description": "Permet de construire des outils de récupération de plus haut niveau, de récupérer plus de ressources et plus rapidement sur les machines", "price": 5}
		]
	},
	"tracker": {
		"name": "Pisteur",
		"perks": [
			{"attribute": "perception", "name": "Crochetage de serrure", "description": "Le crochetage est plus rapide et les outils se cassent moins souvent", "price": 3},
			{"attribute": "perception", "name": "Pisteur animalier", "description": "Permet de détecter les animaux aux alentours", "price": 3},
			{"attribute": "perception", "name": "Chasseur de trésors", "description": "Le trésor contient plus de ressources et est plus facile à trouver", "price": 3}
		]
	},
	"hunter": {
		"name": "Chasseur",
		"perks": [
			{"attribute": "perception", "name": "Pisteur animalier", "description": "Permet de detecter les animaux aux alentours", "price": 3},
			{"attribute": "fortitude", "name": "Le chasseur", "description": "Récolte plus de ressources sur les animaux", "price": 5}
		]
	},
	"farmer": {
		"name": "Agriculteur",
		"perks": [
			{"attribute": "fortitude", "name": "Vie à la campagne", "description": "Débloque des recettes, récolte plus de ressources sur les plants et reduis le cout de construction des parcelles cultivable", "price": 3}
		]
	},
	"chef": {
		"name": "Cuisinier",
		"perks": [
			{"attribute": "strenght", "name": "Maître cuisinier", "description": "Cuisine plus rapidement et nécéssite moins d'ingredients. Permet de débloquer certaines recettes", "price": 5}
		]
	},
	"doctor": {
		"name": "Docteur",
		"perks": [
			{"attribute": "intellect", "name": "Médecin", "description": "Débloque des recettes, fabriquez des objets médicaux plus rapidement", "price": 4}
		]
	},
	"engineer": {
		"name": "Ingénieur",
		"perks": [
			{"attribute": "intellect", "name": "Inventeur en robotique", "description": "Augmente la qualité des tourelles et leurs nombre", "price": 5},
			{"attribute": "intellect", "name": "Ingénierie avancée", "description": "Débloque des recettes, fabriquez des objets à la forge en utilisant moins de materiaux", "price": 5},
			{"attribute": "intellect", "name": "Mécanicien", "description": "Débloque des recettes, les éléments de véhicules coutent moins cher", "price": 5}
		]
	}
};

let optionalsPerks = [
	{"attribute": "perception", "name": "L'infiltrateur", "description": "Les mines et les pièges vous inflige moins de dégâts et sont retardés", "price": 3},
	{"attribute": "agility", "name": "Courir et tirer", "description": "Réduis les pénalités de mouvement lors du rechargement, augmente la précision du tir au jugé", "price": 3},
	{"attribute": "agility", "name": "Parkour", "description": "Réduis l'endurance consommée lors des saut, vous sautez plus haut, vous ne pouvez plus vous casser de membres en sautant", "price": 4},
	{"attribute": "agility", "name": "Frappe discrète", "description": "Augmente les dégâts discrets", "price": 5},
	{"attribute": "agility", "name": "Enfant de l'ombre", "description": "Augmente votre furtivité et réduis le temps de poursuite des zombies", "price": 5},
	{"attribute": "intellect", "name": "Meilleur troqueur", "description": "Vous profitez de meilleures réductions et vous vendez vos objets plus chers", "price": 5}
];

let optionalsRecap = {

};

function capitalize(pString) {
	return pString.charAt(0).toUpperCase() + pString.slice(1);
}


// Function to update total price
function updateTotalPrice(pPrice) {
	let htmlContent = $("#totalPrice").html();
	let price = Number(htmlContent.replace("Total : ", "").replace(" pts", "")) + pPrice;
	$("#totalPrice").html("Total : " + price + " pts")
}


// Load and append primary perks.
$.each(primaryPerks, function(i, perkObject) {
	$("#primary__container").append(
		`<img src="img/attribute${capitalize(perkObject.attribute)}.webp" title="${attributesNames[perkObject.attribute]}" alt="${attributesNames[perkObject.attribute]}">
		<span>${perkObject.name}</span>
		<p>${perkObject.description}.</p>
		<span>${perkObject.price} pts</span>`
	);
});


// Load, append and add function to toogle jobs.
$.each(jobsPerks, function(jobName, jobObject) {
	let capitalizedJobName = capitalize(jobName);
	let idCheckbox = "j" + capitalizedJobName;
	
	// Append jobs to their container.
	$("#jobs__container").append(
		`<div id="jobs__${jobName}">
			<input id="${idCheckbox}" type="checkbox">
			<label for="${idCheckbox}"></label>
			<span>${jobObject.name}</span>
		</div>`
	);

	jobObject.totalPrice = 0;
	$.each(jobObject.perks, function(i, perkObject) {
		jobObject.totalPrice += perkObject.price;
	});

	jobObject.addToRecap = function() {
		let htmlSkillsContent = "";
		$.each(jobObject.perks, function(i, perkObject) {
			htmlSkillsContent += `
				<!-- Skill -->
				<img src="img/attribute${capitalize(perkObject.attribute)}.webp" title="${attributesNames[perkObject.attribute]}" alt="${attributesNames[perkObject.attribute]}">
				<span>${perkObject.name}</span>
				<p>${perkObject.description}.</p>
				<span>${perkObject.price} pts</span>
			`;
		});

		$("#recap__jobs").append(
			`<div class="recap__job" id="recap__${idCheckbox}">
				<h2>${jobObject.name}</h2>
				<div class="perksContainer">
					<!-- Header -->
					<div class="gridHeader">Attribut</div>
					<div class="gridHeader">Compétence</div>
					<div class="gridHeader">Description</div>
					<div class="gridHeader">Prix</div>
					${htmlSkillsContent}
				</div>
			</div>
		`);

		updateTotalPrice(jobObject.totalPrice);
	};

	jobObject.removeFromRecap = function() {
		$("#recap__" + idCheckbox).remove();
		updateTotalPrice(-jobObject.totalPrice);
	};

	// Toogle the visibility of the perks for each jobs.
	$("#" + idCheckbox).change(function() {
		if ($("#recap__" + idCheckbox).length == 0) {
			jobObject.addToRecap();
		} else {
			jobObject.removeFromRecap();
		}
	});
});


// Load and append optionals perks.
$.each(optionalsPerks, function(i, perkObject) {
	$("#optionals__container").append(
		`<img src="img/attribute${capitalize(perkObject.attribute)}.webp" title="${attributesNames[perkObject.attribute]}" alt="${attributesNames[perkObject.attribute]}">
		<span>${perkObject.name}</span>
		<p>${perkObject.description}.</p>
		<span>${perkObject.price} pts</span>
		<input id="optionals__${i}" type="checkbox">`
	);

	// Toogle the visibility of the perks for each optionnals.
	$("#optionals__" + i).change(function() {
		if (perkObject.selected) {
			perkObject.selected = false;
			let newPrice = Number($("#recap__optionalsContainer .price").html().replace(" pts", "")) - perkObject.price;
			updateTotalPrice(-perkObject.price);
			$("#recap__optionalsContainer .price").html(newPrice + " pts");
			// jobObject.addToRecap();
		} else {
			perkObject.selected = true;
			let newPrice = Number($("#recap__optionalsContainer .price").html().replace(" pts", "")) + perkObject.price;
			updateTotalPrice(perkObject.price);
			$("#recap__optionalsContainer .price").html(newPrice + " pts");
			// jobObject.removeFromRecap();
		}
	});
});