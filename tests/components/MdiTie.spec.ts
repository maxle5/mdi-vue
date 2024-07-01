
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTie from "../../src/components/MdiTie.vue";

test("MdiTie snapshot", () => {
  const wrapper = mount(MdiTie, {});
  expect(wrapper.html()).toMatchSnapshot();
});
