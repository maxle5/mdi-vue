
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCardsSpadeOutline from "../../src/components/MdiCardsSpadeOutline.vue";

test("MdiCardsSpadeOutline snapshot", () => {
  const wrapper = mount(MdiCardsSpadeOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
