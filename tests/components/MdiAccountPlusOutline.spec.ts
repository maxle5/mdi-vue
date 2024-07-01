
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountPlusOutline from "../../src/components/MdiAccountPlusOutline.vue";

test("MdiAccountPlusOutline snapshot", () => {
  const wrapper = mount(MdiAccountPlusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
