
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLogout from "../../src/components/MdiLogout.vue";

test("MdiLogout snapshot", () => {
  const wrapper = mount(MdiLogout, {});
  expect(wrapper.html()).toMatchSnapshot();
});
