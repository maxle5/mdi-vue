
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCheckboxMarkedCircleOutline from "../../src/components/MdiCheckboxMarkedCircleOutline.vue";

test("MdiCheckboxMarkedCircleOutline snapshot", () => {
  const wrapper = mount(MdiCheckboxMarkedCircleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
