
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFlowerPollen from "../../src/components/MdiFlowerPollen.vue";

test("MdiFlowerPollen snapshot", () => {
  const wrapper = mount(MdiFlowerPollen, {});
  expect(wrapper.html()).toMatchSnapshot();
});
