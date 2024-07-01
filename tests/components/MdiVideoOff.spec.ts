
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiVideoOff from "../../src/components/MdiVideoOff.vue";

test("MdiVideoOff snapshot", () => {
  const wrapper = mount(MdiVideoOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
