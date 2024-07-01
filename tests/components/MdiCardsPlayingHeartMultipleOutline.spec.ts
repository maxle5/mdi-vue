
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCardsPlayingHeartMultipleOutline from "../../src/components/MdiCardsPlayingHeartMultipleOutline.vue";

test("MdiCardsPlayingHeartMultipleOutline snapshot", () => {
  const wrapper = mount(MdiCardsPlayingHeartMultipleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
