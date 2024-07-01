
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFlowerTulipOutline from "../../src/components/MdiFlowerTulipOutline.vue";

test("MdiFlowerTulipOutline snapshot", () => {
  const wrapper = mount(MdiFlowerTulipOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
