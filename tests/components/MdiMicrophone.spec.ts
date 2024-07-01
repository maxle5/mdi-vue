
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMicrophone from "../../src/components/MdiMicrophone.vue";

test("MdiMicrophone snapshot", () => {
  const wrapper = mount(MdiMicrophone, {});
  expect(wrapper.html()).toMatchSnapshot();
});
