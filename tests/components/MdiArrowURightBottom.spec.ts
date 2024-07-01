
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowURightBottom from "../../src/components/MdiArrowURightBottom.vue";

test("MdiArrowURightBottom snapshot", () => {
  const wrapper = mount(MdiArrowURightBottom, {});
  expect(wrapper.html()).toMatchSnapshot();
});
