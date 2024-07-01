
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTreasureChest from "../../src/components/MdiTreasureChest.vue";

test("MdiTreasureChest snapshot", () => {
  const wrapper = mount(MdiTreasureChest, {});
  expect(wrapper.html()).toMatchSnapshot();
});
