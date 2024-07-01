
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHelpRhombusOutline from "../../src/components/MdiHelpRhombusOutline.vue";

test("MdiHelpRhombusOutline snapshot", () => {
  const wrapper = mount(MdiHelpRhombusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
