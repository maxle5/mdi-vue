
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFlowerPollenOutline from "../../src/components/MdiFlowerPollenOutline.vue";

test("MdiFlowerPollenOutline snapshot", () => {
  const wrapper = mount(MdiFlowerPollenOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
