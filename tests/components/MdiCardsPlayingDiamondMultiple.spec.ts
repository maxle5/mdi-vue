
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCardsPlayingDiamondMultiple from "../../src/components/MdiCardsPlayingDiamondMultiple.vue";

test("MdiCardsPlayingDiamondMultiple snapshot", () => {
  const wrapper = mount(MdiCardsPlayingDiamondMultiple, {});
  expect(wrapper.html()).toMatchSnapshot();
});
