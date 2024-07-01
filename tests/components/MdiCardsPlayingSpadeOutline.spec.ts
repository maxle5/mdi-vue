
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCardsPlayingSpadeOutline from "../../src/components/MdiCardsPlayingSpadeOutline.vue";

test("MdiCardsPlayingSpadeOutline snapshot", () => {
  const wrapper = mount(MdiCardsPlayingSpadeOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
