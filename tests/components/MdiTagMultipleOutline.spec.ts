
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTagMultipleOutline from "../../src/components/MdiTagMultipleOutline.vue";

test("MdiTagMultipleOutline snapshot", () => {
  const wrapper = mount(MdiTagMultipleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
