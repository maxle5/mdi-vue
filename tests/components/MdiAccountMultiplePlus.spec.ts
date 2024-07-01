
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountMultiplePlus from "../../src/components/MdiAccountMultiplePlus.vue";

test("MdiAccountMultiplePlus snapshot", () => {
  const wrapper = mount(MdiAccountMultiplePlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
