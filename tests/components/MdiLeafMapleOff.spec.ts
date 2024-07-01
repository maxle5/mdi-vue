
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLeafMapleOff from "../../src/components/MdiLeafMapleOff.vue";

test("MdiLeafMapleOff snapshot", () => {
  const wrapper = mount(MdiLeafMapleOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
