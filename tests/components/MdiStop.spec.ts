
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiStop from "../../src/components/MdiStop.vue";

test("MdiStop snapshot", () => {
  const wrapper = mount(MdiStop, {});
  expect(wrapper.html()).toMatchSnapshot();
});
