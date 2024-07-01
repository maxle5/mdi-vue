
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountRemoveOutline from "../../src/components/MdiAccountRemoveOutline.vue";

test("MdiAccountRemoveOutline snapshot", () => {
  const wrapper = mount(MdiAccountRemoveOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
