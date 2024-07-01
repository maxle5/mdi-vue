
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCardsPlayingClub from "../../src/components/MdiCardsPlayingClub.vue";

test("MdiCardsPlayingClub snapshot", () => {
  const wrapper = mount(MdiCardsPlayingClub, {});
  expect(wrapper.html()).toMatchSnapshot();
});
