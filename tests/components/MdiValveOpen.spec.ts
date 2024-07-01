
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiValveOpen from "../../src/components/MdiValveOpen.vue";

test("MdiValveOpen snapshot", () => {
  const wrapper = mount(MdiValveOpen, {});
  expect(wrapper.html()).toMatchSnapshot();
});
