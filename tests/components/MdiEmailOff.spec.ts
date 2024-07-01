
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEmailOff from "../../src/components/MdiEmailOff.vue";

test("MdiEmailOff snapshot", () => {
  const wrapper = mount(MdiEmailOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
