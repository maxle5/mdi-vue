
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiServerPlusOutline from "../../src/components/MdiServerPlusOutline.vue";

test("MdiServerPlusOutline snapshot", () => {
  const wrapper = mount(MdiServerPlusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
