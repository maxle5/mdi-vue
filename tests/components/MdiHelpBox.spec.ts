
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHelpBox from "../../src/components/MdiHelpBox.vue";

test("MdiHelpBox snapshot", () => {
  const wrapper = mount(MdiHelpBox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
