
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCallReceived from "../../src/components/MdiCallReceived.vue";

test("MdiCallReceived snapshot", () => {
  const wrapper = mount(MdiCallReceived, {});
  expect(wrapper.html()).toMatchSnapshot();
});
