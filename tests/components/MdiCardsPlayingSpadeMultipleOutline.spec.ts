
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCardsPlayingSpadeMultipleOutline from "../../src/components/MdiCardsPlayingSpadeMultipleOutline.vue";

test("MdiCardsPlayingSpadeMultipleOutline snapshot", () => {
  const wrapper = mount(MdiCardsPlayingSpadeMultipleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
