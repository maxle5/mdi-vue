
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFlower from "../../src/components/MdiFlower.vue";

test("MdiFlower snapshot", () => {
  const wrapper = mount(MdiFlower, {});
  expect(wrapper.html()).toMatchSnapshot();
});
