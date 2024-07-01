
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTumbleDryerOff from "../../src/components/MdiTumbleDryerOff.vue";

test("MdiTumbleDryerOff snapshot", () => {
  const wrapper = mount(MdiTumbleDryerOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
