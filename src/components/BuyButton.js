import React, { useLayoutEffect } from 'react'
import ShopifyBuy from "@shopify/buy-button-js"

// import { Base64 } from 'js-base64'

const BuyButton = ({ product }) => {
    useLayoutEffect(() => {
        const client = ShopifyBuy.buildClient({
            domain: 'hochwerben.myshopify.com',
            storefrontAccessToken: '7c17773375ca31f8045748b766dcb41b'
        })
        const ui = ShopifyBuy.UI.init(client)
        // const decodded = Base64.decode(product.shopifyId)
        // const acutalId = decodded.replace("gid://shopify/Product/", "")
        ui.createComponent("product", {
            id: 5967778250948,
            node: document.getElementById("button"),
            moneyFormat: '%E2%82%AC%7B%7Bamount_with_comma_separator%7D%7D',
            options: {
              "product": {
                "styles": {
                  "product": {
                    "@media (min-width: 601px)": {
                      "max-width": "calc(25% - 20px)",
                      "margin-left": "20px",
                      "margin-bottom": "50px"
                    }
                  },
                  "button": {
                    ":hover": {
                      "background-color": "#dc8502"
                    },
                    "background-color": "#f49402",
                    ":focus": {
                      "background-color": "#dc8502"
                    }
                  }
                },
                "text": {
                  "button": "In den Warenkorb"
                }
              },
              "productSet": {
                "styles": {
                  "product": {
                    "@media (min-width: 601px)": {
                      "max-width": "calc(25% - 20px)",
                      "margin-left": "20px",
                      "margin-bottom": "50px"
                    }
                  },
                  "button": {
                    ":hover": {
                      "background-color": "#dc8502"
                    },
                    "background-color": "#f49402",
                    ":focus": {
                      "background-color": "#dc8502"
                    }
                  }
                },
                "text": {
                  "button": "Add to cart"
                }
              },
              "productSet": {
                "styles": {
                  "products": {
                    "@media (min-width: 601px)": {
                      "margin-left": "-20px"
                    }
                  }
                }
              },
              "modalProduct": {
                "contents": {
                  "img": false,
                  "imgWithCarousel": true,
                  "button": false,
                  "buttonWithQuantity": true
                },
                "styles": {
                  "product": {
                    "@media (min-width: 601px)": {
                      "max-width": "100%",
                      "margin-left": "0px",
                      "margin-bottom": "0px"
                    }
                  },
                  "button": {
                    ":hover": {
                      "background-color": "#dc8502"
                    },
                    "background-color": "#f49402",
                    ":focus": {
                      "background-color": "#dc8502"
                    }
                  }
                },
                "text": {
                  "button": "In den Warenkorb"
                }
              },
              "cart": {
                "styles": {
                  "button": {
                    ":hover": {
                      "background-color": "#dc8502"
                    },
                    "background-color": "#f49402",
                    ":focus": {
                      "background-color": "#dc8502"
                    }
                  }
                },
                "text": {
                  "total": "Zwischensumme",
                  "button": "Zur Kasse"
                }
              },
              "toggle": {
                "styles": {
                  "toggle": {
                    "background-color": "#f49402",
                    ":hover": {
                      "background-color": "#dc8502"
                    },
                    ":focus": {
                      "background-color": "#dc8502"
                    }
                  }
                }
              }
            },
        })
    })

    return (
        <div>
            <div id="button" style={{ margin: 'auto' }}></div>
        </div>
    )
}

export default BuyButton