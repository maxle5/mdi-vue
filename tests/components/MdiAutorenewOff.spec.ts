
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAutorenewOff from "../../src/components/MdiAutorenewOff.vue";

test("MdiAutorenewOff snapshot", () => {
  const wrapper = mount(MdiAutorenewOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
