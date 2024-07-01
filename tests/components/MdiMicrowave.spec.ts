
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMicrowave from "../../src/components/MdiMicrowave.vue";

test("MdiMicrowave snapshot", () => {
  const wrapper = mount(MdiMicrowave, {});
  expect(wrapper.html()).toMatchSnapshot();
});
