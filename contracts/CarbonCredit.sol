
contract CarbonCredit {
    struct Credit {
        uint id;
        uint emissionAmount;
        address owner;
    }

    Credit[] public credits;

    function createCredit(uint emissionAmount) public {
        credits.push(Credit({
            id: credits.length,
            emissionAmount: emissionAmount,
            owner: msg.sender
        }));
    }

    function transferCredit(uint id, address to) public {
        Credit storage credit = credits[id];
        require(msg.sender == credit.owner, "Only the owner can transfer");

        credit.owner = to;
    }
}