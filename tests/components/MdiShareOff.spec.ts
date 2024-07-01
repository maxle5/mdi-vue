
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiShareOff from "../../src/components/MdiShareOff.vue";

test("MdiShareOff snapshot", () => {
  const wrapper = mount(MdiShareOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
