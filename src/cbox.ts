import { Transfer, cbox  } from "../generated/cbox/cbox";
/// the transfer event and all the parameters that were emitted with it
import { Token, User} from '../generated/schema'
///The token and users types

const cBoxURI = "https://companioninabox.art/api/companion/"

///This function will run everytime the transfer event is call in the smartcontract
export function handleTransfer(event: Transfer): void {

    //constructor of the type Token auto assign tokenId to ID
    let token = Token.load(event.params.tokenId.toString());
    if(!token) {
        token = new Token(event.params.tokenId.toString())
        token.tokenID = event.params.tokenId;

        token.tokenURI = cBoxURI + event.params.tokenId.toString()
        
        let metadata = token.tokenURI + ".json"

        token.externalURL = metadata
    }

    token.owner = event.params.to.toHexString()
    token.save();

    //constructor of the type USER auto assign to address to ID
    let user = User.load(event.params.to.toHexString());
    if(!user) {
        user = new User(event.params.to.toHexString());
        user.save();
    }
}