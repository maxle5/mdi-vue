
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBookPlusOutline from "../../src/components/MdiBookPlusOutline.vue";

test("MdiBookPlusOutline snapshot", () => {
  const wrapper = mount(MdiBookPlusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
