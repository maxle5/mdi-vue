
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDeleteOffOutline from "../../src/components/MdiDeleteOffOutline.vue";

test("MdiDeleteOffOutline snapshot", () => {
  const wrapper = mount(MdiDeleteOffOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
