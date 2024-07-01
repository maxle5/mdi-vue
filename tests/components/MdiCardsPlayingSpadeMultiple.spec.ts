
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCardsPlayingSpadeMultiple from "../../src/components/MdiCardsPlayingSpadeMultiple.vue";

test("MdiCardsPlayingSpadeMultiple snapshot", () => {
  const wrapper = mount(MdiCardsPlayingSpadeMultiple, {});
  expect(wrapper.html()).toMatchSnapshot();
});
