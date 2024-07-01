
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTextBoxEditOutline from "../../src/components/MdiTextBoxEditOutline.vue";

test("MdiTextBoxEditOutline snapshot", () => {
  const wrapper = mount(MdiTextBoxEditOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
