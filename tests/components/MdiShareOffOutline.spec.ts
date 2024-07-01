
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiShareOffOutline from "../../src/components/MdiShareOffOutline.vue";

test("MdiShareOffOutline snapshot", () => {
  const wrapper = mount(MdiShareOffOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
