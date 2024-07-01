
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountBoxMinusOutline from "../../src/components/MdiAccountBoxMinusOutline.vue";

test("MdiAccountBoxMinusOutline snapshot", () => {
  const wrapper = mount(MdiAccountBoxMinusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
