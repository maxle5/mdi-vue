
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCardsPlayingHeartMultiple from "../../src/components/MdiCardsPlayingHeartMultiple.vue";

test("MdiCardsPlayingHeartMultiple snapshot", () => {
  const wrapper = mount(MdiCardsPlayingHeartMultiple, {});
  expect(wrapper.html()).toMatchSnapshot();
});
