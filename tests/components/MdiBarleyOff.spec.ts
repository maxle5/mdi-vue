
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBarleyOff from "../../src/components/MdiBarleyOff.vue";

test("MdiBarleyOff snapshot", () => {
  const wrapper = mount(MdiBarleyOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
