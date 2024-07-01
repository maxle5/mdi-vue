
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiImagePlus from "../../src/components/MdiImagePlus.vue";

test("MdiImagePlus snapshot", () => {
  const wrapper = mount(MdiImagePlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
