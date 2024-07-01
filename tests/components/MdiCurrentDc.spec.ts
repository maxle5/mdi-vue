
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCurrentDc from "../../src/components/MdiCurrentDc.vue";

test("MdiCurrentDc snapshot", () => {
  const wrapper = mount(MdiCurrentDc, {});
  expect(wrapper.html()).toMatchSnapshot();
});
