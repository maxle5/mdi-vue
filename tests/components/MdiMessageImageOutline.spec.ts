
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMessageImageOutline from "../../src/components/MdiMessageImageOutline.vue";

test("MdiMessageImageOutline snapshot", () => {
  const wrapper = mount(MdiMessageImageOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
