
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHelpCircleOutline from "../../src/components/MdiHelpCircleOutline.vue";

test("MdiHelpCircleOutline snapshot", () => {
  const wrapper = mount(MdiHelpCircleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
