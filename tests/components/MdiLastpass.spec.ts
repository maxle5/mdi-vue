
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLastpass from "../../src/components/MdiLastpass.vue";

test("MdiLastpass snapshot", () => {
  const wrapper = mount(MdiLastpass, {});
  expect(wrapper.html()).toMatchSnapshot();
});
