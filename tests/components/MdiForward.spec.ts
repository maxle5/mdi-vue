
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiForward from "../../src/components/MdiForward.vue";

test("MdiForward snapshot", () => {
  const wrapper = mount(MdiForward, {});
  expect(wrapper.html()).toMatchSnapshot();
});
