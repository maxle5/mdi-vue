
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSheep from "../../src/components/MdiSheep.vue";

test("MdiSheep snapshot", () => {
  const wrapper = mount(MdiSheep, {});
  expect(wrapper.html()).toMatchSnapshot();
});
