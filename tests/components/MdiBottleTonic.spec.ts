
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBottleTonic from "../../src/components/MdiBottleTonic.vue";

test("MdiBottleTonic snapshot", () => {
  const wrapper = mount(MdiBottleTonic, {});
  expect(wrapper.html()).toMatchSnapshot();
});
