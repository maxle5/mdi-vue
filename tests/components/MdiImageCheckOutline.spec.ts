
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiImageCheckOutline from "../../src/components/MdiImageCheckOutline.vue";

test("MdiImageCheckOutline snapshot", () => {
  const wrapper = mount(MdiImageCheckOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
