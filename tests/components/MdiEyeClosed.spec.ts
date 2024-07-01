
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEyeClosed from "../../src/components/MdiEyeClosed.vue";

test("MdiEyeClosed snapshot", () => {
  const wrapper = mount(MdiEyeClosed, {});
  expect(wrapper.html()).toMatchSnapshot();
});
