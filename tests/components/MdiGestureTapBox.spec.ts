
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGestureTapBox from "../../src/components/MdiGestureTapBox.vue";

test("MdiGestureTapBox snapshot", () => {
  const wrapper = mount(MdiGestureTapBox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
