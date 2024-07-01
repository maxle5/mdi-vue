
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAutoMode from "../../src/components/MdiAutoMode.vue";

test("MdiAutoMode snapshot", () => {
  const wrapper = mount(MdiAutoMode, {});
  expect(wrapper.html()).toMatchSnapshot();
});
