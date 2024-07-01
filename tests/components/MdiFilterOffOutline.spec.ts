
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFilterOffOutline from "../../src/components/MdiFilterOffOutline.vue";

test("MdiFilterOffOutline snapshot", () => {
  const wrapper = mount(MdiFilterOffOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
