
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTagCheckOutline from "../../src/components/MdiTagCheckOutline.vue";

test("MdiTagCheckOutline snapshot", () => {
  const wrapper = mount(MdiTagCheckOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
