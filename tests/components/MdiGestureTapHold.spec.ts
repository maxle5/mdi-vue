
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGestureTapHold from "../../src/components/MdiGestureTapHold.vue";

test("MdiGestureTapHold snapshot", () => {
  const wrapper = mount(MdiGestureTapHold, {});
  expect(wrapper.html()).toMatchSnapshot();
});
