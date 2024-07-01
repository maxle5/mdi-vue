
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTagMinusOutline from "../../src/components/MdiTagMinusOutline.vue";

test("MdiTagMinusOutline snapshot", () => {
  const wrapper = mount(MdiTagMinusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
