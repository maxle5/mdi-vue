
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTorch from "../../src/components/MdiTorch.vue";

test("MdiTorch snapshot", () => {
  const wrapper = mount(MdiTorch, {});
  expect(wrapper.html()).toMatchSnapshot();
});
