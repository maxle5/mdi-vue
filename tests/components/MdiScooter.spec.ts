
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiScooter from "../../src/components/MdiScooter.vue";

test("MdiScooter snapshot", () => {
  const wrapper = mount(MdiScooter, {});
  expect(wrapper.html()).toMatchSnapshot();
});
