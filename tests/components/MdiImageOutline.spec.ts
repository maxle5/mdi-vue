
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiImageOutline from "../../src/components/MdiImageOutline.vue";

test("MdiImageOutline snapshot", () => {
  const wrapper = mount(MdiImageOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
