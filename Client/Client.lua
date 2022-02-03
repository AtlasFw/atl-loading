RegisterNetEvent('atl-loadscreen:GetInfo', function (name, picture)
    SendNUIMessage({
        photo = picture,
        name = name
    })
end)
