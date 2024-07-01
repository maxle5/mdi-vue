
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCardsPlayingDiamond from "../../src/components/MdiCardsPlayingDiamond.vue";

test("MdiCardsPlayingDiamond snapshot", () => {
  const wrapper = mount(MdiCardsPlayingDiamond, {});
  expect(wrapper.html()).toMatchSnapshot();
});
