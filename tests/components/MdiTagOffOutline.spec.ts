
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTagOffOutline from "../../src/components/MdiTagOffOutline.vue";

test("MdiTagOffOutline snapshot", () => {
  const wrapper = mount(MdiTagOffOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
