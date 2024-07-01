
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEyePlus from "../../src/components/MdiEyePlus.vue";

test("MdiEyePlus snapshot", () => {
  const wrapper = mount(MdiEyePlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
