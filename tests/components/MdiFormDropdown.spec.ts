
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFormDropdown from "../../src/components/MdiFormDropdown.vue";

test("MdiFormDropdown snapshot", () => {
  const wrapper = mount(MdiFormDropdown, {});
  expect(wrapper.html()).toMatchSnapshot();
});
