
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEmailPlus from "../../src/components/MdiEmailPlus.vue";

test("MdiEmailPlus snapshot", () => {
  const wrapper = mount(MdiEmailPlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
