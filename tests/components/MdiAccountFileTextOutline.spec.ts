
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountFileTextOutline from "../../src/components/MdiAccountFileTextOutline.vue";

test("MdiAccountFileTextOutline snapshot", () => {
  const wrapper = mount(MdiAccountFileTextOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
