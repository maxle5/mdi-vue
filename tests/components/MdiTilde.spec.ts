
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTilde from "../../src/components/MdiTilde.vue";

test("MdiTilde snapshot", () => {
  const wrapper = mount(MdiTilde, {});
  expect(wrapper.html()).toMatchSnapshot();
});
