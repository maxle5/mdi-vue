
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEjectCircle from "../../src/components/MdiEjectCircle.vue";

test("MdiEjectCircle snapshot", () => {
  const wrapper = mount(MdiEjectCircle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
