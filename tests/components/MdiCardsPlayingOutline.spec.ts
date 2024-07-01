
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCardsPlayingOutline from "../../src/components/MdiCardsPlayingOutline.vue";

test("MdiCardsPlayingOutline snapshot", () => {
  const wrapper = mount(MdiCardsPlayingOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
