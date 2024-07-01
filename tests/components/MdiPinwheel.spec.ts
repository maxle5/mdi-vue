
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPinwheel from "../../src/components/MdiPinwheel.vue";

test("MdiPinwheel snapshot", () => {
  const wrapper = mount(MdiPinwheel, {});
  expect(wrapper.html()).toMatchSnapshot();
});
