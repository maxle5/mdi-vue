
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCardsPlaying from "../../src/components/MdiCardsPlaying.vue";

test("MdiCardsPlaying snapshot", () => {
  const wrapper = mount(MdiCardsPlaying, {});
  expect(wrapper.html()).toMatchSnapshot();
});
