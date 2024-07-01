
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTextBoxRemove from "../../src/components/MdiTextBoxRemove.vue";

test("MdiTextBoxRemove snapshot", () => {
  const wrapper = mount(MdiTextBoxRemove, {});
  expect(wrapper.html()).toMatchSnapshot();
});
