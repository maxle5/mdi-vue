
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCheckboxMarkedCircleMinusOutline from "../../src/components/MdiCheckboxMarkedCircleMinusOutline.vue";

test("MdiCheckboxMarkedCircleMinusOutline snapshot", () => {
  const wrapper = mount(MdiCheckboxMarkedCircleMinusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
