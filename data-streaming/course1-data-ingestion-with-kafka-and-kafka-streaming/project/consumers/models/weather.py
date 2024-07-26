"""Contains functionality related to Weather"""
import logging


logger = logging.getLogger(__name__)


class Weather:
    """Defines the Weather model"""

    def __init__(self):
        """Creates the weather model"""
        self.temperature = 70.0
        self.status = "sunny"

    def process_message(self, message):
        """Handles incoming weather data"""
        #
        #
        # TODO: Process incoming weather messages. Set the temperature and status.
        #
        #
        value = message.value()
        self.temperature = value["temperature"]
        self.status = value["status"]
        logger.debug(f"The temperature now is {self.temperature} and it is {self.status.replace("_", " ")}")
