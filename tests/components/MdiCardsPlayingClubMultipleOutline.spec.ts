
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCardsPlayingClubMultipleOutline from "../../src/components/MdiCardsPlayingClubMultipleOutline.vue";

test("MdiCardsPlayingClubMultipleOutline snapshot", () => {
  const wrapper = mount(MdiCardsPlayingClubMultipleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
