
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSleep from "../../src/components/MdiSleep.vue";

test("MdiSleep snapshot", () => {
  const wrapper = mount(MdiSleep, {});
  expect(wrapper.html()).toMatchSnapshot();
});
