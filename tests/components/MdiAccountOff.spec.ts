
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountOff from "../../src/components/MdiAccountOff.vue";

test("MdiAccountOff snapshot", () => {
  const wrapper = mount(MdiAccountOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
