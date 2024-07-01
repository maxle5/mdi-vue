
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTooth from "../../src/components/MdiTooth.vue";

test("MdiTooth snapshot", () => {
  const wrapper = mount(MdiTooth, {});
  expect(wrapper.html()).toMatchSnapshot();
});
