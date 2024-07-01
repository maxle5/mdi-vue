
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCoatRack from "../../src/components/MdiCoatRack.vue";

test("MdiCoatRack snapshot", () => {
  const wrapper = mount(MdiCoatRack, {});
  expect(wrapper.html()).toMatchSnapshot();
});
