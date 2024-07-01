
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiStrategy from "../../src/components/MdiStrategy.vue";

test("MdiStrategy snapshot", () => {
  const wrapper = mount(MdiStrategy, {});
  expect(wrapper.html()).toMatchSnapshot();
});
