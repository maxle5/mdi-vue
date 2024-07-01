
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTableCheck from "../../src/components/MdiTableCheck.vue";

test("MdiTableCheck snapshot", () => {
  const wrapper = mount(MdiTableCheck, {});
  expect(wrapper.html()).toMatchSnapshot();
});
