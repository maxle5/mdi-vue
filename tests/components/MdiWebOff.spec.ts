
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWebOff from "../../src/components/MdiWebOff.vue";

test("MdiWebOff snapshot", () => {
  const wrapper = mount(MdiWebOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
