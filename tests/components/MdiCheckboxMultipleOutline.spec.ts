
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCheckboxMultipleOutline from "../../src/components/MdiCheckboxMultipleOutline.vue";

test("MdiCheckboxMultipleOutline snapshot", () => {
  const wrapper = mount(MdiCheckboxMultipleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
