
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiToothOutline from "../../src/components/MdiToothOutline.vue";

test("MdiToothOutline snapshot", () => {
  const wrapper = mount(MdiToothOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
