
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLeakOff from "../../src/components/MdiLeakOff.vue";

test("MdiLeakOff snapshot", () => {
  const wrapper = mount(MdiLeakOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
