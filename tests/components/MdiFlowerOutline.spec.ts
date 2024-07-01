
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFlowerOutline from "../../src/components/MdiFlowerOutline.vue";

test("MdiFlowerOutline snapshot", () => {
  const wrapper = mount(MdiFlowerOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
