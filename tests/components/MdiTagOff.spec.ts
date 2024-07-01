
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTagOff from "../../src/components/MdiTagOff.vue";

test("MdiTagOff snapshot", () => {
  const wrapper = mount(MdiTagOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
