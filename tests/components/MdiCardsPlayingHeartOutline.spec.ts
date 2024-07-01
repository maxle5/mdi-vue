
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCardsPlayingHeartOutline from "../../src/components/MdiCardsPlayingHeartOutline.vue";

test("MdiCardsPlayingHeartOutline snapshot", () => {
  const wrapper = mount(MdiCardsPlayingHeartOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
