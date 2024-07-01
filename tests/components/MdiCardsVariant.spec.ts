
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCardsVariant from "../../src/components/MdiCardsVariant.vue";

test("MdiCardsVariant snapshot", () => {
  const wrapper = mount(MdiCardsVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
