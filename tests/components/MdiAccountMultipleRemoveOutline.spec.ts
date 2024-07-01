
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountMultipleRemoveOutline from "../../src/components/MdiAccountMultipleRemoveOutline.vue";

test("MdiAccountMultipleRemoveOutline snapshot", () => {
  const wrapper = mount(MdiAccountMultipleRemoveOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
