
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCardsPlayingHeart from "../../src/components/MdiCardsPlayingHeart.vue";

test("MdiCardsPlayingHeart snapshot", () => {
  const wrapper = mount(MdiCardsPlayingHeart, {});
  expect(wrapper.html()).toMatchSnapshot();
});
