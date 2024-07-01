
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSignDirection from "../../src/components/MdiSignDirection.vue";

test("MdiSignDirection snapshot", () => {
  const wrapper = mount(MdiSignDirection, {});
  expect(wrapper.html()).toMatchSnapshot();
});
