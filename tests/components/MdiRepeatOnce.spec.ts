
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRepeatOnce from "../../src/components/MdiRepeatOnce.vue";

test("MdiRepeatOnce snapshot", () => {
  const wrapper = mount(MdiRepeatOnce, {});
  expect(wrapper.html()).toMatchSnapshot();
});
