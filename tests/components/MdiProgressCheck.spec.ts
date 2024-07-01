
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiProgressCheck from "../../src/components/MdiProgressCheck.vue";

test("MdiProgressCheck snapshot", () => {
  const wrapper = mount(MdiProgressCheck, {});
  expect(wrapper.html()).toMatchSnapshot();
});
