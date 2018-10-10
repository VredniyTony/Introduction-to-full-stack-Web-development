<?php
session_start();

function check_json($data)
{
    try {
        if (!file_exists($data)) {
            throw new Exception('no file');
        } elseif (!is_readable($data)) {
            throw new Exception('can not read');
        } elseif (!is_writable($data)) {
            throw new Exception('can not write');
        }
    } catch (Exception $e) {
        $_SESSION['error_msg'] = $e->getMessage();
        return false;
    }
    return true;
}

function check_vote($item, $brand_list)
{
    try {
        $brand_list = json_decode(file_get_contents($brand_list));
        if (!in_array($item, $brand_list->brands)) {
            throw new Exception('bad vote');
        }
    } catch (Exception $e) {
        $_SESSION['error_msg'] = $e->getMessage();
        return false;
    }
    return true;
}

function add_vote($item, $voted_list)
{
    $voted_list_item = json_decode(file_get_contents($voted_list));
    $voted_list_item->$item += 1;
    file_put_contents($voted_list, json_encode($voted_list_item));
}