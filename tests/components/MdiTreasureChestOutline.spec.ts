
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTreasureChestOutline from "../../src/components/MdiTreasureChestOutline.vue";

test("MdiTreasureChestOutline snapshot", () => {
  const wrapper = mount(MdiTreasureChestOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
