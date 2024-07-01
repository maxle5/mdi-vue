
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMagnifyPlusOutline from "../../src/components/MdiMagnifyPlusOutline.vue";

test("MdiMagnifyPlusOutline snapshot", () => {
  const wrapper = mount(MdiMagnifyPlusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
