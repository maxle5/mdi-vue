
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCodeString from "../../src/components/MdiCodeString.vue";

test("MdiCodeString snapshot", () => {
  const wrapper = mount(MdiCodeString, {});
  expect(wrapper.html()).toMatchSnapshot();
});
