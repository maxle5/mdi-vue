
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCardsPlayingDiamondMultipleOutline from "../../src/components/MdiCardsPlayingDiamondMultipleOutline.vue";

test("MdiCardsPlayingDiamondMultipleOutline snapshot", () => {
  const wrapper = mount(MdiCardsPlayingDiamondMultipleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
