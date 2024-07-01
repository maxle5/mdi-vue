
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGasBurner from "../../src/components/MdiGasBurner.vue";

test("MdiGasBurner snapshot", () => {
  const wrapper = mount(MdiGasBurner, {});
  expect(wrapper.html()).toMatchSnapshot();
});
