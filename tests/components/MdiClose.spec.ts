
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiClose from "../../src/components/MdiClose.vue";

test("MdiClose snapshot", () => {
  const wrapper = mount(MdiClose, {});
  expect(wrapper.html()).toMatchSnapshot();
});
