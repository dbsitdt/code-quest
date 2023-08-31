export const areElementsInOrder = function (
  siblingElements: HTMLElement[],
  parentElement: HTMLElement
) {
  siblingElements.forEach((element) => {
    if (!element) return false;
  });
  const childElements = Array.from(parentElement.children);
  for (let i = 0; i < siblingElements.length; i++) {
    if (siblingElements[i] !== childElements[i]) {
      return false;
    }
  }
  return true;
};
export const checkElementText = function (
  element: HTMLElement,
  expectedText: String
) {
  if (!element) return false;

  let elementText = element.textContent || element.innerText;
  elementText = elementText.trim();
  return elementText === expectedText;
};
export const isElementChildOf = function (
  childElement: HTMLElement,
  parentElement: HTMLElement
) {
  if (!childElement) return false;

  let currentNode = childElement.parentNode ?? childElement.closest("body");
  if (!currentNode) return false;

  while (currentNode !== null) {
    if (currentNode === parentElement) {
      return true;
    }
    currentNode = currentNode.parentNode;
  }

  return false;
};
export const checkElementAttribute = (
  element: HTMLElement,
  attribute: string,
  optimalValue: string
): boolean => {
  const attributeValue = element.getAttribute(attribute);

  if (attributeValue === optimalValue) {
    return true;
  } else {
    return false;
  }
};
