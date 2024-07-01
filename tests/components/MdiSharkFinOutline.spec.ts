
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSharkFinOutline from "../../src/components/MdiSharkFinOutline.vue";

test("MdiSharkFinOutline snapshot", () => {
  const wrapper = mount(MdiSharkFinOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
