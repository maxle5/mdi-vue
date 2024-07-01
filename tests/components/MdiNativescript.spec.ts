
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNativescript from "../../src/components/MdiNativescript.vue";

test("MdiNativescript snapshot", () => {
  const wrapper = mount(MdiNativescript, {});
  expect(wrapper.html()).toMatchSnapshot();
});
