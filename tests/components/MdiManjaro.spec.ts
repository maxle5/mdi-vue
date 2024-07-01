
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiManjaro from "../../src/components/MdiManjaro.vue";

test("MdiManjaro snapshot", () => {
  const wrapper = mount(MdiManjaro, {});
  expect(wrapper.html()).toMatchSnapshot();
});
