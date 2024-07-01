
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPipeDisconnected from "../../src/components/MdiPipeDisconnected.vue";

test("MdiPipeDisconnected snapshot", () => {
  const wrapper = mount(MdiPipeDisconnected, {});
  expect(wrapper.html()).toMatchSnapshot();
});
