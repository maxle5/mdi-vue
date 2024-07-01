
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRepeatOff from "../../src/components/MdiRepeatOff.vue";

test("MdiRepeatOff snapshot", () => {
  const wrapper = mount(MdiRepeatOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
