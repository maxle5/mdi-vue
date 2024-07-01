
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiVideoBoxOff from "../../src/components/MdiVideoBoxOff.vue";

test("MdiVideoBoxOff snapshot", () => {
  const wrapper = mount(MdiVideoBoxOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
