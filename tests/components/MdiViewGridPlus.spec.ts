
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiViewGridPlus from "../../src/components/MdiViewGridPlus.vue";

test("MdiViewGridPlus snapshot", () => {
  const wrapper = mount(MdiViewGridPlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
