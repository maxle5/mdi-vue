
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCarOff from "../../src/components/MdiCarOff.vue";

test("MdiCarOff snapshot", () => {
  const wrapper = mount(MdiCarOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
