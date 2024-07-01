
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTennisBall from "../../src/components/MdiTennisBall.vue";

test("MdiTennisBall snapshot", () => {
  const wrapper = mount(MdiTennisBall, {});
  expect(wrapper.html()).toMatchSnapshot();
});
