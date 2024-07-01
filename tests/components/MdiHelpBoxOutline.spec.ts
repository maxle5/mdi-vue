
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHelpBoxOutline from "../../src/components/MdiHelpBoxOutline.vue";

test("MdiHelpBoxOutline snapshot", () => {
  const wrapper = mount(MdiHelpBoxOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
