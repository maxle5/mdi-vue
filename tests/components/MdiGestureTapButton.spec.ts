
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGestureTapButton from "../../src/components/MdiGestureTapButton.vue";

test("MdiGestureTapButton snapshot", () => {
  const wrapper = mount(MdiGestureTapButton, {});
  expect(wrapper.html()).toMatchSnapshot();
});
