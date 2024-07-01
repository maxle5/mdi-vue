
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTextBoxPlusOutline from "../../src/components/MdiTextBoxPlusOutline.vue";

test("MdiTextBoxPlusOutline snapshot", () => {
  const wrapper = mount(MdiTextBoxPlusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
