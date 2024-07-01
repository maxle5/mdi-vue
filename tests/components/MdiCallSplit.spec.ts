
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCallSplit from "../../src/components/MdiCallSplit.vue";

test("MdiCallSplit snapshot", () => {
  const wrapper = mount(MdiCallSplit, {});
  expect(wrapper.html()).toMatchSnapshot();
});
