
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTextBoxRemoveOutline from "../../src/components/MdiTextBoxRemoveOutline.vue";

test("MdiTextBoxRemoveOutline snapshot", () => {
  const wrapper = mount(MdiTextBoxRemoveOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
