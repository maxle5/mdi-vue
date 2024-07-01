
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFilterPlusOutline from "../../src/components/MdiFilterPlusOutline.vue";

test("MdiFilterPlusOutline snapshot", () => {
  const wrapper = mount(MdiFilterPlusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
