
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCloseThick from "../../src/components/MdiCloseThick.vue";

test("MdiCloseThick snapshot", () => {
  const wrapper = mount(MdiCloseThick, {});
  expect(wrapper.html()).toMatchSnapshot();
});
