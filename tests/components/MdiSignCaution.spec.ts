
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSignCaution from "../../src/components/MdiSignCaution.vue";

test("MdiSignCaution snapshot", () => {
  const wrapper = mount(MdiSignCaution, {});
  expect(wrapper.html()).toMatchSnapshot();
});
