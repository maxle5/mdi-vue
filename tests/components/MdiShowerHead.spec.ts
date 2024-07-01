
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiShowerHead from "../../src/components/MdiShowerHead.vue";

test("MdiShowerHead snapshot", () => {
  const wrapper = mount(MdiShowerHead, {});
  expect(wrapper.html()).toMatchSnapshot();
});
