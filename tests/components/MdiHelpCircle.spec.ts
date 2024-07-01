
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHelpCircle from "../../src/components/MdiHelpCircle.vue";

test("MdiHelpCircle snapshot", () => {
  const wrapper = mount(MdiHelpCircle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
