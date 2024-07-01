
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPin from "../../src/components/MdiPin.vue";

test("MdiPin snapshot", () => {
  const wrapper = mount(MdiPin, {});
  expect(wrapper.html()).toMatchSnapshot();
});
