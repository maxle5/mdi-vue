
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiExclamationThick from "../../src/components/MdiExclamationThick.vue";

test("MdiExclamationThick snapshot", () => {
  const wrapper = mount(MdiExclamationThick, {});
  expect(wrapper.html()).toMatchSnapshot();
});
