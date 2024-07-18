# Please complete the TODO items in the code

from dataclasses import asdict, dataclass
import json

import faust


#
# TODO: Define a ClickEvent Record Class with an email (str), timestamp (str), uri(str),
#       and number (int)
#
#       See: https://docs.python.org/3/library/dataclasses.html
#       See: https://faust.readthedocs.io/en/latest/userguide/models.html#model-types
#
@dataclass
class Purchase(faust.Record):
    username: str
    currency: str
    amount: int

app = faust.App("exercise2", broker="kafka://localhost:9092")

#
# TODO: Provide the key (uri) and value type to the clickevent
#
purchases_topic = app.topic(
    "com.udacity.streams.purchases",
    key_type=str,
    value_type=Purchase,
)

@app.agent(purchases_topic)
async def purchase(purchases):
    async for purchase in purchases:
        print(json.dumps(asdict(purchase), indent=2))


if __name__ == "__main__":
    app.main()
