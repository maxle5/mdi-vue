
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFormatRotate90 from "../../src/components/MdiFormatRotate90.vue";

test("MdiFormatRotate90 snapshot", () => {
  const wrapper = mount(MdiFormatRotate90, {});
  expect(wrapper.html()).toMatchSnapshot();
});
