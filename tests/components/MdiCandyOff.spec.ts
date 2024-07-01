
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCandyOff from "../../src/components/MdiCandyOff.vue";

test("MdiCandyOff snapshot", () => {
  const wrapper = mount(MdiCandyOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
