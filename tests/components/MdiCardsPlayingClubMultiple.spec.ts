
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCardsPlayingClubMultiple from "../../src/components/MdiCardsPlayingClubMultiple.vue";

test("MdiCardsPlayingClubMultiple snapshot", () => {
  const wrapper = mount(MdiCardsPlayingClubMultiple, {});
  expect(wrapper.html()).toMatchSnapshot();
});
