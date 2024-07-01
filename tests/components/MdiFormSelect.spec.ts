
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFormSelect from "../../src/components/MdiFormSelect.vue";

test("MdiFormSelect snapshot", () => {
  const wrapper = mount(MdiFormSelect, {});
  expect(wrapper.html()).toMatchSnapshot();
});
