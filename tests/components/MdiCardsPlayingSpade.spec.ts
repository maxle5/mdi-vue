
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCardsPlayingSpade from "../../src/components/MdiCardsPlayingSpade.vue";

test("MdiCardsPlayingSpade snapshot", () => {
  const wrapper = mount(MdiCardsPlayingSpade, {});
  expect(wrapper.html()).toMatchSnapshot();
});
