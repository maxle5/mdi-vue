
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLeafOff from "../../src/components/MdiLeafOff.vue";

test("MdiLeafOff snapshot", () => {
  const wrapper = mount(MdiLeafOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
