
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCardsOutline from "../../src/components/MdiCardsOutline.vue";

test("MdiCardsOutline snapshot", () => {
  const wrapper = mount(MdiCardsOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
