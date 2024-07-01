
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSelectColor from "../../src/components/MdiSelectColor.vue";

test("MdiSelectColor snapshot", () => {
  const wrapper = mount(MdiSelectColor, {});
  expect(wrapper.html()).toMatchSnapshot();
});
