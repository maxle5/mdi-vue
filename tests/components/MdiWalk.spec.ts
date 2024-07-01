
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWalk from "../../src/components/MdiWalk.vue";

test("MdiWalk snapshot", () => {
  const wrapper = mount(MdiWalk, {});
  expect(wrapper.html()).toMatchSnapshot();
});
