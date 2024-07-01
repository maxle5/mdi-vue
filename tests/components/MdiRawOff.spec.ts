
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRawOff from "../../src/components/MdiRawOff.vue";

test("MdiRawOff snapshot", () => {
  const wrapper = mount(MdiRawOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
