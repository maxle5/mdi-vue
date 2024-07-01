
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCardsPlayingDiamondOutline from "../../src/components/MdiCardsPlayingDiamondOutline.vue";

test("MdiCardsPlayingDiamondOutline snapshot", () => {
  const wrapper = mount(MdiCardsPlayingDiamondOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
