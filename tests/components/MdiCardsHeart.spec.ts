
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCardsHeart from "../../src/components/MdiCardsHeart.vue";

test("MdiCardsHeart snapshot", () => {
  const wrapper = mount(MdiCardsHeart, {});
  expect(wrapper.html()).toMatchSnapshot();
});
