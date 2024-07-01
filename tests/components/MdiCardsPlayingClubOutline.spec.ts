
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCardsPlayingClubOutline from "../../src/components/MdiCardsPlayingClubOutline.vue";

test("MdiCardsPlayingClubOutline snapshot", () => {
  const wrapper = mount(MdiCardsPlayingClubOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
