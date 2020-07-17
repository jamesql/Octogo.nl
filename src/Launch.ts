/// <refrence path="./util/@types/global.d.ts" />
import web from "./WEB";

export default class OctogonlServer
{
    async launch()
    {
        // use web.prototypes;
        await web.start();
    }

    
};