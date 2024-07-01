
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRobber from "../../src/components/MdiRobber.vue";

test("MdiRobber snapshot", () => {
  const wrapper = mount(MdiRobber, {});
  expect(wrapper.html()).toMatchSnapshot();
});
