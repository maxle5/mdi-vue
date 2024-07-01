
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHomeGroupMinus from "../../src/components/MdiHomeGroupMinus.vue";

test("MdiHomeGroupMinus snapshot", () => {
  const wrapper = mount(MdiHomeGroupMinus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
