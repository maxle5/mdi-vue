
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTailwind from "../../src/components/MdiTailwind.vue";

test("MdiTailwind snapshot", () => {
  const wrapper = mount(MdiTailwind, {});
  expect(wrapper.html()).toMatchSnapshot();
});
