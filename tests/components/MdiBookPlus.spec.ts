
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBookPlus from "../../src/components/MdiBookPlus.vue";

test("MdiBookPlus snapshot", () => {
  const wrapper = mount(MdiBookPlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
