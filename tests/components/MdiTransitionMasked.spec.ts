
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTransitionMasked from "../../src/components/MdiTransitionMasked.vue";

test("MdiTransitionMasked snapshot", () => {
  const wrapper = mount(MdiTransitionMasked, {});
  expect(wrapper.html()).toMatchSnapshot();
});
