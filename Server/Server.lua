-------------------------------------------------------------------------------
local SteamApiKey = '461D58FD6D13208C8C2E818EFDD2C7A1'


AddEventHandler('playerConnecting', function() 
    local ids = ExtractIdentifiers(source)
    local source = source
    local steamID = ""
    if ids.steam ~= "" then
        steamID = ids.steam:gsub( "steam:", "")
    else
        steamID = ""
    end
    steamID = tonumber(steamID,16)
    print('ok, ', steamID)
    PerformHttpRequest("http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key="..SteamApiKey.."&steamids="..steamID,
    function(err, text, headers)
        local image = string.match(text, '"avatarfull":"(.-)","')
        print(image, GetPlayerName(source))
        TriggerClientEvent('atl-loadscreen:GetInfo', source, GetPlayerName(source), image)
    end)
end)

function ExtractIdentifiers(src)
    local identifiers = {
        steam = "",
        ip = "",
        discord = "",
        license = "",
        xbl = "",
        live = ""
    }
    for i = 0, GetNumPlayerIdentifiers(src) - 1 do
        local id = GetPlayerIdentifier(src, i)
        if string.find(id, "steam") then
            identifiers.steam = id
        end
    end
    return identifiers
end